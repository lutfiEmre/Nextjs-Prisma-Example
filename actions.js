'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id,Comment) {
    await db.snippet.update({
        where: { id },
        data: { Comment },
    });

    redirect(`/comments`);
}

export async function deleteSnippet(id) {
    await db.snippet.delete({
        where: { id },
    });

    redirect('/comments');
}
