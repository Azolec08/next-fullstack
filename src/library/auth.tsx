import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "./connectdb";
import { User } from "./model";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials: any) => {
  try {
    connectDb();
    const user = await User.findOne({ userName: credentials.userName });

    if (!user) {
      throw new Error("Wrong Credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong Credentials");
    }

    return user;
  } catch (err) {
    console.log(err);

    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        connectDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              userName: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }

      return true;
    },
    ...authConfig.callbacks,
  },
});
