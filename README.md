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
cd farcaster-meme-generator


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
2. Deployment

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
