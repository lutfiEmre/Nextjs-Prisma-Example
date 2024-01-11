import Image from 'next/image'

import NextFinger from '@/public/back.svg'
import Link from "next/link";



import {db} from "@/db";
export default async function Home() {
    const snippets = await db.snippet.findMany();
    const renderedSnippets =    snippets.map((snippet ) => {
        return (
            <Link key={snippet.id} className={' w-fit md:w-full'} href={`/comments/${snippet.id}`}>
                <div key={snippet.id} className={'shadow-md items-center pr-4 flex flex-row gap-4 w-full h-fit bg-gray-100'}>
                    <div className={'p-4 w-[160px] flex flex-col md:flex-row break-words'}><h1>Name:</h1><h1>{snippet.Name}</h1></div>
                    <div className={'px-4 break-words w-[150px] md:w-full flex items-center justify-center bg-gray-200'}>
                        <h1 className={'w-[150px] md:w-full'}>
                            {snippet.Comment}
                        </h1>
                    </div>

                </div>
            </Link>

        )
    })

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
     <div className={'mt-4'}>
         <div className={'bg-gray-300 shadow-md p-4 w-[350px] sm:w-[450px] md:w-[600px] gap-[55px] pb-[50px] min-h-[390px] flex flex-col justify-start items-center  rounded-md'}>
             <div className={'flex flex-col sm:flex-row items-center gap-[15px]'}>
                 <h1 className={'font-bold text-center text-4xl'}>User Comment List</h1>
                 <Link className={'p-2'} href={'/'}>
                     <Image className={'cursor-pointer '} src={NextFinger} width={30} height={30} alt={'Next Button'}/>
                 </Link>

             </div>
             {renderedSnippets}



         </div>


     </div>
    </main>
  )
}
