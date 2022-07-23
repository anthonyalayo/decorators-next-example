import { NextApiRequest, NextApiResponse } from "next";

export function exceptionHandler(
    error: unknown,
    req: NextApiRequest,
    res: NextApiResponse
) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred.';
    res.status(200).json({ error: message });
}