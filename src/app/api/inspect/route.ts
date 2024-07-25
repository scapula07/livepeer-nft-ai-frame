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
            <meta name="fc:frame:image:aspect_ratio" content="1.91:1" />
            <meta property="og:image" content=${result?.outputs[0]?.url}>
            <meta name="fc:frame:button:1:post_url" content=${NEXT_PUBLIC_URL}/api/prompt />
            <meta name="fc:frame:button:1" content="Regenerate" />
            <meta name="fc:frame:button:2" content="Transaction"/>
            <meta name="fc:frame:button:2:action" content="tx" />
            <meta
              name="fc:frame:button:2:target"
              content=${NEXT_PUBLIC_URL}/api/transaction?uri=${result?.outputs[0]?.url}
           />
           <meta
              property="fc:frame:button:2:post_url"
              content=${NEXT_PUBLIC_URL}/api/mint?uri=${result?.outputs[0]?.url}
            />
      `
           
        )     
     }catch(e){
        console.log(e)
        return new NextResponse()
     }
   

  }