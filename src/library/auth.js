import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/library/mongoDb";
import UserModel from "@/models/userModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        try {
          await connectToDatabase();
          
          // ✅ Explicitly select password field (it's excluded by default)
          const user = await UserModel.findOne({ 
            email: credentials.email.toLowerCase() 
          }).select('+password');

          if (!user) {
            // ⚠️ Generic error message to prevent email enumeration
            throw new Error("Invalid credentials");
          }

          // ✅ Direct bcrypt comparison
          const isValid = await bcrypt.compare(
            credentials.password,  // Password from login form
            user.password          // Hashed password from database
          );

          if (!isValid) {
            throw new Error("Invalid credentials");
          }

          // ✅ Return user data for session
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Auth error:", error.message);
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge:  60 * 60, // 1hour session period
  },

  secret: process.env.NEXTAUTH_SECRET,
};