import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { NextRequest, NextResponse } from "next/server";
  export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; 
    const url = new URL(req.url)
    const uri = url.searchParams.get("uri") as string
    const body: FrameRequest = await req.json(); 
      try{
        return new NextResponse(
          getFrameHtmlResponse({
              image: {
                src: `${NEXT_PUBLIC_URL}/background.png`,
                aspectRatio: "1:1",
              },
              buttons: [
                {
                    label:"Share",
                    action:'post',
                    target:`${NEXT_PUBLIC_URL}/api/share?uri=${uri}`
                },
               ],
                postUrl: `${NEXT_PUBLIC_URL}/api/share?uri=${uri}`,
            })
      )     
      }catch(e){
        console.log(e)
        return new NextResponse()     
      }
      
  }
  