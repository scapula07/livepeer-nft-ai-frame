// import satori from "satori";
// import { join } from "path";
// import * as fs from "fs";
// import sharp from "sharp";
// import axios from "axios";
// const FormData = require('form-data');

// const font = fs.readFileSync(
//     join(process.cwd(), "src/fonts/RedHatDisplayBlack.ttf")
// );

// const generatePriceImageSvg = async (
//     text,
//     url
//  )=> {
//     return await satori(
   
//             <img src={url} alt="Image"  />
//          ,
//             {
//               width: 600,
//               height: 400,
//               fonts: [
//                 {
//                     data: font,
//                     name: "Red Hat Display Black",
//                     style: "normal",
//                 },
//                 ],
//             }
//             )
// }
// const base64ToBlob=(base64, mimeType)=> {
//   const byteCharacters = atob(base64);
//   const byteNumbers = new Array(byteCharacters.length);

//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }

//   const byteArray = new Uint8Array(byteNumbers);
//   return new Blob([byteArray], { type: mimeType });

// }

// const pinFileToIPFS=async(base64String) =>{
//    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
//   try {

//     const base64ToBuffer = (base64String) => {
//       return Buffer.from(base64String, 'base64');
//     };

//     const data= new FormData();
//     data.append('file', base64ToBuffer(base64String), 'image.png');

    
//     const result= await axios
//         .post(url, 
//             data,
        
//         {
//             headers: {
//           "Content-Type": "multipart/form-data",
//             pinata_api_key:process.env.API_KEY,
//             pinata_secret_api_key:process.env.API_SECRET,
//           },
//       }) 
//       return result?.data?.IpfsHash
//   } catch (error) {
//     console.log(error);
//   }
// };


// export const generateBase64PriceImage = async (
//   text,
//   url
// ) => {
//   const svg = await generatePriceImageSvg(text,url);
//   // const pngBuffer = await sharp(Buffer.from(svg)).toFormat("png").toBuffer();
//   // const base64String = pngBuffer.toString('base64');
  
//   // // const blob = base64ToBlob(base64String, 'image/png');
//   // const hash =await pinFileToIPFS(base64String)
//   // return hash
//     return (await sharp(Buffer.from(svg)).toFormat("png").toBuffer()).toString(
//         "base64"
//     );
// };

// const DEFAULT_DISPLAY = 'flex';

// const presetStyles = {
//   div: {
//     display: DEFAULT_DISPLAY,
//   },
//   strong: {
//     fontWeight: 'bold',
//   },
//   b: {
//     fontWeight: 'bold',
//   },
// };

// const containerStyle = {
//   ...presetStyles.div,
//   position: 'relative',
// };

// const imageStyle = {
//   display: DEFAULT_DISPLAY,
//   width: '100%',
//   height: 'auto',
// };

// const textOverlayStyle = {
//   ...presetStyles.strong,
//   position: 'absolute',
//   bottom: '10px', 
//   left: '50%',
//   transform: 'translateX(-50%)',
//   whiteSpace: 'nowrap',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   color: 'white',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//   padding: '5px', 
// };
