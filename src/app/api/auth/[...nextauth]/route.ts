import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: "Ov23lialugncn4r7EGSH",// process.env.GITHUB_ID || "",
            clientSecret: "33bb1b3a885c44dbd83ef899d5456d5c20b1f4e3"//process.env.GITHUB_SECRET || ""
        })
    ]
})

export {handler as GET, handler as POST}
