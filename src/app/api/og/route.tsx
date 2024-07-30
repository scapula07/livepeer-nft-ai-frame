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
                <div
                  style={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: '800',
                    textAlign: 'center',
                    padding: '0 20px',
                  }}
                >
                  {text}
                </div>
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