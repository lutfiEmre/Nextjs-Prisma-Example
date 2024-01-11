
import Image from 'next/image'

import NextFinger from '@/public/back.svg'
import Link from "next/link";

import {db} from "@/db";
import {notFound} from "next/navigation";
import EditorFile from "@/components/EditorFile";

import * as actions from "@/actions";

export default async function Home(props) {
    await new Promise((r) => setTimeout(r, 500));

    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) },
    });

    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);


    console.log(snippet)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-32">
            <div className={'mt-4'}>
                <div
                    className={'bg-gray-300 shadow-md p-4 w-[400px] md:w-[600px] gap-[55px]  pb-[50px] min-h-[390px] flex flex-col justify-start items-center  rounded-md'}>
                    <div className={'flex flex-row items-center gap-[15px]'}>
                        <h1 className={'font-bold text-4xl'}>User Comments</h1>
                        <Link className={'p-2'} href={'/comments'}>
                            <Image className={'cursor-pointer '} src={NextFinger} width={30} height={30}
                                   alt={'Next Button'}/>
                        </Link>

                    </div>
                        <EditorFile deleteSnippetAction={deleteSnippetAction} snippet={snippet ? snippet : ''}/>


                </div>


            </div>
        </main>
    )
}
