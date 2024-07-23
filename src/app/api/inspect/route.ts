import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { NextRequest, NextResponse } from "next/server";
import { SDAPI } from "@/app/lib";


  export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
    const body: FrameRequest = await req.json(); 
    const { inputText }=body?.untrustedData

    const api= new SDAPI()
    const result = await api.txt2img(inputText || "");
    console.log(result,"ress")

    try{
     
        return new NextResponse(
            getFrameHtmlResponse({
                image: {
                  src:result?.outputs[0]?.url,
                },
                buttons: [
                  {
                    label:
                      "Regenerate",
                  },
                  {
                    label:
                      "Mint",
                  },
    
                ],
                  postUrl: `${NEXT_PUBLIC_URL}/api/inspect`,
              })
        )
     }catch(e){
        console.log(e)
        return new NextResponse()
     }
   

  }