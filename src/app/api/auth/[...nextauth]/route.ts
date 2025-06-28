import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: "Ov23ligXB8oJyDaT9yJi",// process.env.GITHUB_ID || "",
            clientSecret: "415da18807818fe234aa2ec918b5db5b8050c018"//process.env.GITHUB_SECRET || ""
        })
    ]
})

export {handler as GET, handler as POST}
