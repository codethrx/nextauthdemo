import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: { jwt: true },
  callbacks: {
    signIn: async ({ account }) => {
      console.log(account.providerAccountId);
      // return account.providerAccountId;
      // console.log(obj);
      return true;
    },
    async jwt(jwtObject) {
      // token.id = account.providerAccountId;
      console.log(jwtObject.token.sub);
      return jwtObject.token;
    },
    session: ({ token, session, account }) => {
      session.uid = token.sub;
      // console.log(account.p);
      return session;
      // return session;
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
});
