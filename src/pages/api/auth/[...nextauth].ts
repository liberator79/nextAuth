import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {Provider} from "next-auth/providers"

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
            clientSecret : process.env.NEXT_CLIENT_SECRET
        }),
    ] as Provider[],
    secret : process.env.NEXTAUTH_SECRET,
    session : {
        strategy : "jwt",
        maxAge : 30*24*60*60,
    },
    jwt: {
        encryption : true
    },
}
export default NextAuth(authOptions);