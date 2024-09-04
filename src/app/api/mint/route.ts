import { FrameRequest,getFrameHtmlResponse} from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

// Mint api
export async function POST(req: NextRequest): Promise<Response> {
        const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL; 
        const body: FrameRequest = await req.json(); 
        const url = new URL(req.url)
        const uri = url.searchParams.get("uri") as string
        const text = url.searchParams.get("text") as string
        const encodedText = encodeURIComponent(text);
      try{
        return new NextResponse(
          getFrameHtmlResponse({
              image:{
                src: `${NEXT_PUBLIC_URL}/background.png`,
                aspectRatio: "1:1",
               },
              buttons:[
                {
                  label:"Share",
                  action:'post',
                  target:`${NEXT_PUBLIC_URL}/api/share?uri=${uri}&text=${encodedText}`
                },
               ],
                  postUrl: `${NEXT_PUBLIC_URL}/api/share?uri=${uri}&text=${encodedText}`,
              })
            )     
        }catch(e){
          console.log(e)
          return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });   
        }
 }
  