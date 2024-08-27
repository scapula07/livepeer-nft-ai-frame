import {FrameRequest} from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";
import { Buffer } from 'buffer';
import FormData from 'form-data';
import axios from "axios";


const queue:any = [];
var hash:string=""
const processQueue = async () => {
  while (queue.length > 0) {
    const { NEXT_PUBLIC_URL, uri, inputText, urlIpfs, resolve, reject } = queue.shift();
    try {
      const urlStream = await fetch(`${NEXT_PUBLIC_URL}/api/og?uri=${uri}&text=${encodeURIComponent(inputText)}`);
      const arrayBuffer = await urlStream.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const formData = new FormData();
      formData.append("file", buffer, "file");

      const result = await axios.post(urlIpfs, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: process.env.API_KEY,
          pinata_secret_api_key: process.env.API_SECRET,
        },
      });
      resolve(result.data.IpfsHash);
    } catch (e) {
      reject(e);
    }
  }
};
setInterval(processQueue, 1000);

export async function POST(req: NextRequest): Promise<Response> {
    const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
    const urlIpfs = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const body: FrameRequest = await req.json();    
    const { inputText}=body?.untrustedData
    const url = new URL(req.url)
    const uri = url.searchParams.get("uri") as string
  
    const encodedText = encodeURIComponent(inputText);
    const ipfsUri=`https://salmon-criminal-muskox-571.mypinata.cloud/ipfs/${hash}`
 
    try{
      const ipfsPromise = new Promise((resolve, reject) => {
        queue.push({ NEXT_PUBLIC_URL, uri, inputText, urlIpfs, resolve, reject });
      });
      ipfsPromise.then((ipfsHash) => {
          hash=ipfsHash as string
          console.log(hash,"hash in")
       }).catch((e) => {
      });
  
    }catch(e){
     console.log(e)
    }
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
              content=${NEXT_PUBLIC_URL}/api/mint?uri=${NEXT_PUBLIC_URL}/api/og?uri=${uri}&text=${encodedText}
            />`
         )     
      }catch(e){
        console.log(e)
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {status: 500});
      }
   

  }



