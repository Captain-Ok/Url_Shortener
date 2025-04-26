"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { Playpen_Sans as PlaypenSansFont } from 'next/font/google';

const playpenSans = PlaypenSansFont({
  variable: "--font-Playpen_Sans",
  subsets: ["latin"],
})

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setShorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-green-100 my-16 p-8 rounded-lg'>
      <h1 className={`font-bold mb-4 text-2xl ${playpenSans.className}`}>Generate your short URLS</h1>
      <div className='flex flex-col gap-2'>
        <input value={url} onChange={e => { seturl(e.target.value) }} type="text" className='bg-white px-4 py-2 focus:outline-2 focus:outline-green-600 rounded-md' placeholder='Enter your URL' />
        <input value={shorturl} onChange={e => { setShorturl(e.target.value) }} type="text" className='bg-white px-4 py-2 focus:outline-2 focus:outline-green-600 rounded-md' placeholder='Enter your preferred short URL text' />

        <button onClick={generate} className="text-white bg-gradient-to-r from-green-400 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer w-full my-3" >Generate</button>
      </div>
      {generated &&
        <>
          <div className={`text-lg font-bold ${playpenSans.className} mt-3`}>Your Link: </div>
          <code><Link href={generated} target="_blank" >{generated}</Link></code>
        </>
      }

    </div>
  )
}

export default Shorten