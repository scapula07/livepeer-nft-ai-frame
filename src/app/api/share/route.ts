import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { NextRequest, NextResponse } from "next/server";



  export async function POST(req: NextRequest): Promise<Response> {
        const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
        const body: FrameRequest = await req.json(); 
        const url = new URL(req.url,NEXT_PUBLIC_URL )
        const uri = url.searchParams.get("uri") as string
        const text = url.searchParams.get("text") as string
        const encodedText = encodeURIComponent(text);
       
       const imgUrl=`${uri}&text=${encodedText}`
     try{          
        return new NextResponse(
            getFrameHtmlResponse({
                image:{
                  src:`${uri}&text=${encodedText}`,
                  aspectRatio: "1.91:1",
                },
                buttons:[
                {
                  label:"X.com",
                  action:'link',
                  target:`https://twitter.com/intent/tweet?url=${imgUrl}`
                },
                {
                  label:"Recast",
                  action:'link',
                  target:`https://warpcast.com/~/compose?embeds[]=${imgUrl}`
                },
              ],
            })
           )     
      }catch(e){
          console.log(e)
          return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {status: 500});
      }
   }