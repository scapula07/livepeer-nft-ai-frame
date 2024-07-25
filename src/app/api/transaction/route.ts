import { NextRequest, NextResponse } from "next/server";
import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";
  import { ethers } from 'ethers';
import { abi } from "@/app/utils/abi";


const getRandomInt=(min:number, max:number) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export async function POST(req: NextRequest): Promise<Response> {
    try {
        const body= await req.json();  
        const url = new URL(req.url)
        
        const uri = url.searchParams.get("uri")
        console.log(url,uri,"url")
        const tokenId= getRandomInt(1, 1000);
        const contractInterface = new ethers.Interface(abi);
        const data = contractInterface.encodeFunctionData("safeMint", [tokenId,uri]);

        const txActionResponse = {
          method: "eth_sendTransaction",
          chainId: "eip155:421614", 
          params: {
            abi:abi,
            to: "0xc707E384871fF5c253dECe60DbaDDd6812f2bE8e",
            data,
          },
        };
    
        return new NextResponse(JSON.stringify(txActionResponse), { status: 200 });
      } catch (error) {
        console.error('Error processing transaction request:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
      }
    
}