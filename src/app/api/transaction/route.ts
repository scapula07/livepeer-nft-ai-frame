import { NextRequest, NextResponse } from "next/server";
import {
    FrameRequest,
    getFrameMessage,
    getFrameHtmlResponse,
  } from "@coinbase/onchainkit";

export async function POST(req: NextRequest): Promise<Response> {
    const body: FrameRequest = await req.json(); 
    console.log(body,"bodyyy")

    return new NextResponse()
}