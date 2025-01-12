import { API_URL, DEFAULT_HEADERS } from "@/shared";
import type { Response } from "../model/types";

export async function sendQuery(query: string): Promise<Response> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({ query }),
    });
    return response.json();
}