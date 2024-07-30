import { ImageResponse } from 'next/og';
export const runtime = 'edge'
 
export async function GET(request: Request) {
    try{
        const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
        const { searchParams } = new URL(request.url,NEXT_PUBLIC_URL);
        const uri = searchParams.get('uri') || "";
        const text = searchParams.get('text')||"";
        console.log(uri,text)
        return new ImageResponse(
            (
              <div
                style={{
                  position: 'relative',
                  width: '1200px',
                  height: '630px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
                        fontSize: 100,
                        fontFamily: '"Oswald Bold"',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        textShadow:
                        '5px 5px 3px #000, -5px 5px 3px #000, -5px -5px 0 #000, 5px -5px 0 #000',
                    }}
                    >
                    {text}
                    </p>
              </div>
        
            ),
            {
              width: 1200,
              height: 630,
            },
          );
    }catch(e){
        console.log(e)

        return new Response(`Failed to generate the image`, {
          status: 500,
        });
    
    }
  

}