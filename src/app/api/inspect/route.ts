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
   
    const { inputText}=body?.untrustedData

    const api= new SDAPI()
    const result = await api.txt2img(inputText || "");
    try{          
        return new NextResponse(
          `
            <!doctype html>

            <title>Frame 2</title>

            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image" content=${result?.outputs[0]?.url}>
            <meta property="og:image" content=${result?.outputs[0]?.url}>
            <meta name="fc:frame:button:1" content="Mint" />
            <meta name="fc:frame:button:1:action" content="mint" />
            <meta
              name="fc:frame:button:1:target"
              content="eip155:8453:0xf5a3b6dee033ae5025e4332695931cadeb7f4d2b:1"
            />
     `
           
        )     
     }catch(e){
        console.log(e)
        return new NextResponse()
     }
   

  }