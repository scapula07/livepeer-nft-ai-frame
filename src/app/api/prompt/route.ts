import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { NextRequest, NextResponse } from "next/server";

// Prompt Api
  export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
    try{
      return new NextResponse(
        getFrameHtmlResponse({
            image:{
              src: `${NEXT_PUBLIC_URL}/background4.jpeg`,  
              aspectRatio: "1.91:1"
            },
            buttons:[
              {
                label:"Generate",
              },

            ],
            input:{
              text: "A cool cow on the beach...", // Collect user input
              },
              postUrl: `${NEXT_PUBLIC_URL}/api/caption`, // caption url
          })
       )
      }catch(e){
        console.log(e)
        return new NextResponse()
      }


     }