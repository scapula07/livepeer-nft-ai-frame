import { NextRequest, NextResponse } from "next/server";
import { ethers } from 'ethers';
import { abi } from "@/app/utils/abi";

const getRandomInt=(min:number, max:number) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export async function POST(req: NextRequest): Promise<Response> {

    try {
        const body= await req.json();  
        const url = new URL(req.url)
        const uri = url.searchParams.get("uri") as string
        const tokenId= getRandomInt(1, 1000);
        const contractInterface = new ethers.Interface(abi);
        const data = contractInterface.encodeFunctionData("safeMint", [tokenId,uri]);
        
        const txActionResponse = {
          method:"eth_sendTransaction",
          chainId:process.env.CHAIN_ID, 
          params: {
            abi:abi,
            to:process.env.CONTRACT_ADDRESS,
            data,
          },
        };
        return new NextResponse(JSON.stringify(txActionResponse), { status: 200 });
      } catch (error) {
        console.error('Error processing transaction request:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
      }
    
}