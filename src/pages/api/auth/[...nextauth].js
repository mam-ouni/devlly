import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
export default NextAuth({
  session : {
    strategy : 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" ,placeholder : 'Email'},
        password: { type: "password" ,placeholder : 'Password'}
      },
      async authorize(credentials, req) {
         console.log(credentials)
         var user = null;
         try {
           const res = await axios.post('http://localhost:3000/api/auth/login',{email : credentials.email,password : credentials.password},{withCredentials : true , responseType : 'json'})
           console.log(res.data.data[0]);
           user = res.data.data[0];
           if (res.data.data[0]){
              user = res.data.data[0]
           }
           return user
         } catch (error) {
            console.log(error);
            throw error;
         }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token if the user exists
      if (user) {
        token.id = user.email;
        token.email = user.email;
        token.name = user.name;  // Include other fields as needed
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      // Add token data to the session
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;  
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

