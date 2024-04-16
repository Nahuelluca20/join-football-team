import {NextAuthConfig} from "next-auth";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";

import {db} from "@/db";

export const authConfig = {
  secret: process.env.AUTH_SECRET!,
  adapter: DrizzleAdapter(db),
  providers: [Google],
  callbacks: {
    async session({session, user}) {
      session.user.id = user.id;

      return session;
    },
  },
} satisfies NextAuthConfig;
