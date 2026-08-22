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
