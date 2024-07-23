import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { NextRequest, NextResponse } from "next/server";


  export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
    return new NextResponse(
        getFrameHtmlResponse({
            image: {
              src: `${NEXT_PUBLIC_URL}/background4.jpeg`,
            },
            buttons: [
              {
                label:
                  "Generate",
              },

            ],
            input: {
                text: "A cool cow on the beach...",
              },
              postUrl: `${NEXT_PUBLIC_URL}/api/prompt`,
          })
    )

  }