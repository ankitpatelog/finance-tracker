"use client";

import { SessionProvider } from "next-auth/react";

/** 
 * @param {{ children: React.ReactNode }} props 
 */
export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
