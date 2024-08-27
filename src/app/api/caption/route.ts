import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";
import { SDAPI } from "@/app/lib";

// Caption Api

export async function POST(req: NextRequest): Promise<Response> {
     const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
     const body: FrameRequest = await req.json();   
     const {inputText}=body?.untrustedData
     try{
      const api= new SDAPI()
      const result = await api.txt2img(inputText as string); // text-2-image api call
      return new NextResponse(
          getFrameHtmlResponse({
              image:{
                src:result?.outputs[0]?.url,  
                aspectRatio: "1.91:1",
              },
              buttons:[
                {
                  label:"Regenerate",
                  action:"post",
                  target:`${NEXT_PUBLIC_URL}/api/prompt`
                },
                {
                  label:"Add caption",
                  action:"post",
                  target:`${NEXT_PUBLIC_URL}/api/inspect?uri=${result?.outputs[0]?.url}`

                }
               ],
               input: {
                  text: "Your caption...",
                },
             })
           )
        }catch(e){
          return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
       }
      }