"use client"
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
// import {  useNavigate } from 'react-router-dom';
import Link from 'next/link';
import  Card  from '@/components/Card';

export default function Home() {
  // const navigate= useNavigate()
  const [username, setusername] = useState("")

  const handelOnClick=()=>{
    
    console.log(username);
    // <Card username={username}/>
    // navigate('/card')

  }
  
  const onChange=(e)=>{

    setusername(e.target.value)

  }

  return (
    <main className="flex min-h-screen justify-center">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">

        <form className="z-10 w-full ml-20 mr-20 items-center justify-between align-item-center font-mono text-sm lg:flex">
          <label>Enter your github username</label>
          <input type='text' className="bg-black-800 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="username" value={username} placeholder="Enter username" onChange={onChange} />

          <Link type="submit" href={`/card/${username}`} onClick={handelOnClick} className="text-white my-2 mx-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
          </Link>

        </form>

      </div>
    </main>
  )
}
