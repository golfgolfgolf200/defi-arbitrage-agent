# @warppay402/defi-arbitrage-agent

> Fetches cross-DEX arbitrage spreads, token metrics, and liquidity pool analytics on Base Mainnet via x402 USDC micropayments.

## Overview

Automated DeFi intelligence plugin for querying liquidity pool depth, token prices, and cross-DEX price differences on Base Mainnet. Built using `@warppay402/sdk` with autonomous x402 payment execution.

## Features

**Cross-DEX Spreads:** Track arbitrage opportunities across decentralized exchanges[cite: 6, 7].
**Liquidity Analytics:** Fetch pool depth and pair pricing[cite: 6, 7].
**x402 Micropayments:** Automatic payment settlement via Base Mainnet USDC ($0.20 USDC per call).

## Installation

```bash
openclaw plugins install clawhub:@warppay402/defi-arbitrage-agent
```

## Environment Setup

Add your customer agent private key to your `.env` file:

```env
CUSTOMER_PRIVATE_KEY=0xYourPrivateKeyHere
```

## Usage Example

```javascript
import { WarpPayClient } from "@warppay402/sdk";

async function analyzeArbitrage(address) {
  const privateKey = process.env.CUSTOMER_PRIVATE_KEY || process.env.WALLETPK;
  if (!privateKey) {
    console.error("Error: CUSTOMER_PRIVATE_KEY or WALLETPK required.");
    process.exit(1);
  }

  const client = new WarpPayClient({ privateKey });
  try {
    const result = await client.baseAnalytics(address);
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("x402 Execution Error:", err.message);
  }
}

analyzeArbitrage("0x556c77792642E8ff95eC930FFb8D46a76579126E");
```

## Specifications

- **Cost:** $0.20 USDC per execution
- **Network:** Base Mainnet (chain ID: 8453)
- **Gateway Endpoint:** <https://api.warppay402.com/api/v1/tools/base-analytics>
