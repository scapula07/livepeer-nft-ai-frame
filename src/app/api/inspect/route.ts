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
   
    const { inputText,buttonIndex }=body?.untrustedData

    const api= new SDAPI()
    const result = await api.txt2img(inputText || "");
    console.log(result,"ress")

    try{          
        return new NextResponse(
            getFrameHtmlResponse({
                image: {
                  src:result?.outputs[0]?.url,
                  aspectRatio: "1.91:1",
                },
                buttons: [
                  {
                    label:"Regenerate",
                    action:'post',
                    target:`${NEXT_PUBLIC_URL}/api/prompt`
                  },
                  {
                      label:"Mint",
                      action:'post',
                      target:`${NEXT_PUBLIC_URL}/api/mint?uri=${result?.outputs[0]?.url}`
                  },
    
                ],
                postUrl: `${NEXT_PUBLIC_URL}/api/mint?uri=${result?.outputs[0]?.url}`,
              })
        )     
     }catch(e){
        console.log(e)
        return new NextResponse()
     }
   

  }