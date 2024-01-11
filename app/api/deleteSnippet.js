// pages/api/deleteSnippet.js

import { getSession } from 'next-auth/client';
import db from '@/db';

export default async function handler(req, res) {
    const session = await getSession({ req });
    console.log(session)

    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    if (req.method === 'DELETE') {
        const { id } = req.body;

        try {
            await db.snippet.delete({
                where: { id: parseInt(id) },
            });

            return res.status(200).json({ message: 'Snippet deleted successfully' });
        } catch (error) {
            console.error('Error deleting snippet:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
}
