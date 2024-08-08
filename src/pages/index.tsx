
import { Inter } from 'next/font/google'
import { signIn, useSession, signOut } from "next-auth/react"
import Image from 'next/image'

export default function Home() {
  const session = useSession();
  console.log(session)
  return (
    <div className='w-[100%] h-[100vh]'>
      {
        session.data &&
        <div className='flex p-2 justify-between'>
          <div className='flex items-center justify-center gap-2'>
            <Image
              className='rounded-full w-[100%] h-auto'
              width = {20}
              height = {20}
              src={session.data.user?.image}
              alt="Picture of the author"
            />
            <div>{session.data.user?.name}</div>
          </div>
          <button className='bg-red-400 rounded-md p-2' onClick={() => signOut()}>Sign Out</button>
        </div>
      }
      {
        !session.data &&
        <div>
          <button className='bg-green-400 p-2 rounded-md' onClick={() => signIn()}>Sign In</button>
        </div>
      }
    </div>
  )
}