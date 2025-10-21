"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const loginPromise = signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      await toast.promise(loginPromise, {
        loading: "Logging in...",
        success: "Login successful!",
        error: "Invalid email or password",
      });

      const res = await loginPromise;

      if (!res.error) {
        router.push("/dashboard");
      } else {
        setError(res.error);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              {/* Email Field */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>

              {/* Password Field */}
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </Field>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}

              {/* Submit Button & Footer */}
              <Field>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
                <FieldDescription className="text-center mt-2">
                  Don’t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-accent underline hover:no-underline hover:text-accent"
                  >
                    Sign Up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
