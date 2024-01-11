import Image from 'next/image'

import NextFinger from '@/public/next-finger-svgrepo-com.svg'
import Link from "next/link";
import {db} from "@/db";
import {redirect} from "next/navigation";
import React from "react";

export default function Home() {

    async function createSnippet(formData){
        'use server'
        const Name = formData.get('name')
        const Comment = formData.get('comment')

        const snippet = await db.snippet.create({
            data: {
                Name,
                Comment
            }
        })
        redirect('/comments')
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
     <div className={'mt-4'}>
         <div className={'bg-gray-300 shadow-md p-4 w-[400px] md:w-[600px] gap-[55px] h-fit md:h-[390px] flex flex-col justify-start items-center  rounded-md'}>
             <div className={'flex flex-col sm:flex-row items-center gap-[15px]'}>
                 <h1 className={'font-bold text-center text-4xl'}>Create User Comment</h1>
                 <Link className={'p-2'} href={'/comments'}>
                     <Image className={'cursor-pointer'} src={NextFinger} width={30} height={30} alt={'Next Button'}/>

                 </Link>
             </div>
             <form className={'flex  items-center flex-col gap-[50px]'} action={createSnippet}>
                 <div className={'flex flex-row w-full justify-between gap-[5px]'}>
                     <label className={'text-2xl pr-4'} htmlFor="name">Name:</label>
                     <input className={'appearance-none active:outline-none outline-none'} name={'name'} type="text"/>
                 </div>
                 <div className={'flex w-full justify-between flex-row gap-[5px]'}>
                     <label className={'text-2xl pr-4'} htmlFor="comment">Comment:</label>
                     <input className={'appearance-none active:outline-none outline-none'} name={'comment'} type="text"/>
                 </div>
               <div className={'h-[55px]'}>
                   <button  className={'bg-black text-2xl rounded-md active:mt-[4px] transition duration-300 text-white w-[250px] h-[50px]'} type={'submit'}>
                       Send
                   </button>
               </div>
             </form>
         </div>


     </div>
    </main>
  )
}
