import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
    // todos in the body of the POST request
    const { todos } = await request.json()

    // Comunication with OpenAI GPT API
    const response = await openai.createChatCompletion({
        model: "gpt-3.5",
        temperature: "0.8",
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as Mr.Kaito! Limit the response to 200 characters`,
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos.
                    Count how many todos are in each category such as To do, in progess and done, then tell the user
                    to have a productive day! Here's a data: ${JSON.stringify(todos)}`,
            },
        ],
    });

    const { data } = await response;

    return NextResponse.json(data.choices[0].message);
}