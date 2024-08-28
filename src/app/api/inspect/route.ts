import {FrameRequest} from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";
import { Buffer } from 'buffer';
import FormData from 'form-data';
import axios from "axios";

export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
    const body: FrameRequest = await req.json();    
    const { inputText}=body?.untrustedData
    const url = new URL(req.url)
    const uri = url.searchParams.get("uri") as string
  
    const encodedText = encodeURIComponent(inputText);
    const imgUrl=`${NEXT_PUBLIC_URL}/api/og?uri=${uri}`
 
    try{          
        return new NextResponse(
         `<!doctype html>

            <title>Frame 2</title>

            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image"
              content=${NEXT_PUBLIC_URL}/api/og?uri=${uri}&text=${encodedText}  

            >
            <meta name="fc:frame:image:aspect_ratio" content="1.91:1" />
            <meta property="og:image" 
              content=${NEXT_PUBLIC_URL}/api/og?uri=${uri}&text=${encodedText}  
            >
            <meta name="fc:frame:button:1:post_url" content=${NEXT_PUBLIC_URL}/api/prompt />
            <meta name="fc:frame:button:1" content="Regenerate" />
            <meta name="fc:frame:button:2" content="Mint"/>
            <meta name="fc:frame:button:2:action" content="tx" />
            <meta
              name="fc:frame:button:2:target"
              content=${NEXT_PUBLIC_URL}/api/transaction?uri=${NEXT_PUBLIC_URL}/api/og?uri=${uri}&text=${encodedText}
           />
            <meta
              property="fc:frame:button:2:post_url"
              content=${NEXT_PUBLIC_URL}/api/mint?uri=${imgUrl}&text=${encodedText}
            />
            <meta property="fc:frame:state" content="{\"text\":${inputText}" />
            `
         )     
      }catch(e){
        console.log(e)
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {status: 500});
      }
   

  }



