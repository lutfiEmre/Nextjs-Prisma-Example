'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NextFinger from "@/public/back.svg";
import EditorFile from "@/components/EditorFile";
import {usePathname} from "next/navigation";

const NotFound = (props) => {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-32">
            <div className={'mt-4'}>
                <div
                    className={'bg-gray-300 shadow-md p-4 w-[400px] md:w-[600px] gap-[55px]  pb-[50px] min-h-[390px] flex flex-col justify-start items-center  rounded-md'}>
                    <div className={'flex flex-row items-center gap-[15px]'}>
                        There is no comment about {pathname}
                    </div>



                </div>


            </div>
        </main>

    );
};

export default NotFound;
