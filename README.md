
# Intent-anoma


# Intent-anoma: Anoma Stable Intent Bridge (SIB)

## Overview

Intent-anoma is a prototype web application for the Anoma Stable Intent Bridge (SIB). SIB enables users to wrap multiple assets (BTC, ETH, USDC) into a single, stable, tokenized position called a Stable Intent Token (SIT). SITs are designed for stable payments, settlement, and cross-chain coordination, leveraging Anoma’s intent-centric architecture.

## Problem Statement

Managing multiple digital assets and executing cross-chain transactions is complex and error-prone. Traditional systems require manual coordination and asset-specific operations, making DeFi and DAO interactions cumbersome. There is a need for a unified, composable, and intent-driven solution that abstracts these complexities.

## Solution

SIB introduces a mechanism to wrap BTC, ETH, and USDC into a single stable token (SIT). Users interact with SITs by expressing payment and settlement intents, rather than raw transactions. SITs are redeemable for their underlying assets and can be used across chains, simplifying asset management and enabling composable DeFi workflows.

## Key Features

- **Asset Wrapping**: Lock BTC, ETH, and USDC to mint SIT, representing a composite stable value.
- **Intent-Centric Payments**: Make payments by declaring intents, abstracting away direct asset transfers.
- **Cross-Chain Coordination**: SIT leverages Anoma’s architecture for seamless cross-chain operations.
- **Redeemability**: SIT can be unwrapped to retrieve the original assets.
- **Composability**: Designed for integration with DeFi protocols, DAOs, and payment systems.

## Demo Website

[Live Demo](https://speedevs.github.io/Intent-anoma/)

## User Flow

1. **Asset Input**: Enter BTC, ETH, and USDC amounts. The app calculates their USD value in real-time.
2. **Mint SIT**: Click "Create SIT" to lock assets and mint SIT, reflected in your balance.
3. **Declare Intent**: Specify a recipient and cast a payment intent, simulating a transfer and updating SIT balance.
4. **Unwrap SIT**: Redeem SIT to retrieve underlying assets.

## Technical Architecture

- **Frontend**: HTML, CSS, JavaScript
- **UI/UX**: Responsive design, wallet integration, asset input fields, screen transitions
- **Logic**: JavaScript handles asset conversion, SIT minting, intent casting, and user feedback
- **Demo Rates**: Asset prices are mocked for demonstration

## How It Works

- **Asset Conversion**: USD value of assets is calculated instantly
- **SIT Minting**: SIT balance increases and confirmation is shown
- **Intent Casting**: Payment intent deducts SIT and simulates transfer
- **Unwrapping**: SIT can be redeemed for assets

## Benefits

- Simplifies multi-asset management
- Intent-based transactions reduce friction
- Cross-chain ready and composable

## Limitations

- Prototype only; rates and transactions are simulated
- No real blockchain or wallet integration

## Future Directions

- Integrate real asset prices and blockchain connectivity
- Implement secure wallet and cross-chain settlement
- Expand composability for advanced DeFi and DAO use cases





## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Enter asset amounts and mint SIT
4. Declare payment intents and simulate settlements

5. Unwrap SIT to redeem assets

## Screenshots

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://raw.githubusercontent.com/Speedevs/Intent-anoma/refs/heads/main/Screenshot_20250916_100009_Gallery.jpg)

