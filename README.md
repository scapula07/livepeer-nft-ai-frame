# Livepeer Farcaster frame for miniting AI NFT Memes(Meme Generator)

This project is a Farcaster application built using Next.js, plain HTML, Farcaster frame meta tag, TypeScript, Vercel/og for generating meme images, and Coinbase onchainkit. The application allows users to create meme images using the text-to-image API of the Livepeer AI subnet and mint them as NFTs on the Arbitrum chain with an ERC-721 smart contract.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [References](#references)
- [License](#license)

## Features

- **Generate Meme Images**: Create meme images using text input and the text-to-image API from the Livepeer AI subnet.
- **Integration with Farcaster**: Share created memes directly on the Farcaster social network.
- **Onchainkit Integration**: Utilize onchainkit for frame metadata.
- **Mint NFTs**: Mint generated meme images as NFTs on the Arbitrum chain using an ERC-721 smart contract.
- **Responsive Design**: Works on both desktop and mobile devices.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Plain HTML Meta tags(Farcaster frame specifications)**: Meta tags for rendering frame images on Farcaster.
- **Vercel/og**: Used for generating open graph images dynamically.
- **onchainkit**: A toolkit for frame metadata.
- **Livepeer AI Subnet**: Utilized for generating images via its text-to-image API.
- **Arbitrum**: Layer 2 scaling solution for Ethereum, used for minting NFTs.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/farcaster-meme-generator.git

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```
2. Deployment- deploy on vercel or any platform that support nextjs
3. Configure environmental variables
```
     
   NEXT_PUBLIC_URL=https://ed50-2a09-bac5-4deb-1c82-00-2d7-10.ngrok-free.app
   CONTRACT_ADDRESS=0xc707E384871fF5c253dECe60DbaDDd6812f2bE8e
   CHAIN_ID=eip155:421614 // Arbitrum Eip id 
   MODEL_ID=SG161222/RealVisXL_V4.0_Lightning // AI model for text-image

```

License
This project is licensed under the MIT License. See the LICENSE file for details.


