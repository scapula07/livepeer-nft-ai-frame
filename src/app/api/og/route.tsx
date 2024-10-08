import { ImageResponse } from 'next/og';
export const runtime = 'edge'
 
// vercel og api
export async function GET(request: Request) {
     
    try{
          const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
          const { searchParams } = new URL(request.url,NEXT_PUBLIC_URL);
          const uri = searchParams.get('uri') as string;
          const text = searchParams.get('text') as string;
          const fontData = await fetch(
            new URL('../../../fonts/Oswald-Bold.ttf', import.meta.url)
          ).then((res) => res.arrayBuffer())
          const fontSize= text?.length >20? 50:100
         return new ImageResponse(
            (
                 <div
                    style={{
                        display: 'flex',
                        background: '#f6f6f6',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                    <img
                        src={uri}
                        alt="Image"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                   <p
                    style={{
                        position: 'absolute',
                        margin: 0,
                        paddingBottom: 20,
                        color: '#ffffff',
                        lineHeight: 1,
                        fontSize:fontSize,
                        fontFamily: '"Oswald Bold"',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        textShadow:
                        '5px 5px 3px #000, -5px 5px 3px #000, -5px -5px 0 #000, 5px -5px 0 #000',
                     }}>
                    {text}
                  </p>
               </div>
             ),
            {
              width: 1200,
              height: 630,
              fonts: [
                {
                  name:'Oswald Bold',
                  data: fontData,
                  style: 'normal',
                },
              ],
            },
           );
       }catch(e){
        console.log(e)
        return new Response(`Failed to generate the image`, {
          status: 500,
       });
     }
   }