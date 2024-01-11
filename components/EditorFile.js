'use client'
import React, {useState} from 'react';
import Editor from "@monaco-editor/react";
import * as actions from '@/actions'
import Image from "next/image";
import deletesvg from "@/public/delete-svgrepo-com.svg";

const EditorFile = ({snippet,deleteSnippetAction}) => {
    const [code, setCode] = useState(snippet.Comment)
    const handleEditorChange = (value) => {
        setCode(value);
    };
    const editSnippetAction = actions.editSnippet.bind(null, snippet.id,code);


    return (
        <div className={'h-full w-full'}>
            <div
                className={'shadow-md items-center justify-between pr-4 flex flex-row gap-4 w-full h-full bg-gray-100'}>
                <h1 className={'md:p-4 p-2 text-2xl'}>Name: {snippet ? snippet.Name : ''}</h1>
                <div className={'flex w-fit items-center h-full flex-row gap-4'}>
                    <form className={'w-full'} action={deleteSnippetAction}>
                        <button type={'submit'}>
                            <Image className={'cursor-pointer '} src={deletesvg} width={30} height={30}
                                   alt={'Next Button'}/>

                        </button>
                    </form>
                    <form className={'h-full w-full'} action={editSnippetAction}>
                        <button type="submit" className="w-full p-5 h-full border rounded">
                            Save
                        </button>
                    </form>

                </div>
            </div>
            <div className={'text-2xl items-center justify-center flex  h-[200px] rounded-b-md w-full bg-gray-200'}>
                <Editor
                    className={'w-full h-full'}
                    height="220px"
                    theme="vs-dark"
                    language="VBScript"
                    defaultValue={snippet.Comment}
                    options={{minimap: {enabled: false}}}
                    onChange={handleEditorChange}
                />
            </div>

        </div>
    );
};

export default EditorFile;
