import {
  Bitcoin,
  Ethereum,
  Binance,
  Solana,
  Shiba,
  bitco,
  ether,
  binanx,
  sol,
  activity,
} from "../assets"

export const cards = [
  {
    icon: Bitcoin,
    name: "Bitcoin (BTC)",
    rate: [
      {
        amount: "$31,812.80",
        percentage: "+10%",
      },
    ],
    label1: "Price",
    amount: "$60,000",
    label2: "tvl",
    pairs: [
      {
        name: "solana",
        icon: sol,
      },
      {
        name: "ethereum",
        icon: ether,
      },
      {
        name: "binance",
        icon: binanx,
      },
    ],
    label3: "popular pairs",
  },
  {
    icon: Solana,
    name: "Solana (SOL)",
    rate: [
      {
        amount: "$32.83",
        percentage: "-12.32%",
      },
    ],
    label1: "Price",
    amount: "$60,000",
    label2: "tvl",
    pairs: [
      {
        name: "bitcoin",
        icon: bitco,
      },
      {
        name: "ethereum",
        icon: ether,
      },
      {
        name: "binance",
        icon: binanx,
      },
    ],
    label3: "popular pairs",
  },
  {
    icon: Ethereum,
    name: "Ethereum (ETH)",
    rate: [
      {
        amount: "$1,466.45",
        percentage: "-11.93%",
      },
    ],
    label1: "Price",
    amount: "$60,000",
    label2: "tvl",
    pairs: [
      {
        name: "solana",
        icon: sol,
      },
      {
        name: "bitcoin",
        icon: bitco,
      },
      {
        name: "binance",
        icon: binanx,
      },
    ],
    label3: "popular pairs",
  },
  {
    icon: Binance,
    name: "Binance USD (BUSD)",
    rate: [
      {
        amount: "$1.00",
        percentage: "+0.26%",
      },
    ],
    label1: "Price",
    amount: "$60,000",
    label2: "tvl",
    pairs: [
      {
        name: "solana",
        icon: sol,
      },
      {
        name: "ethereum",
        icon: ether,
      },
      {
        name: "binance",
        icon: binanx,
      },
    ],
    label3: "popular pairs",
  },
  {
    icon: Shiba,
    name: "Shiba Inu (SHIB)",
    rate: [
      {
        amount: "$0.00000001948",
        percentage: "-8.1%",
      },
    ],
    label1: "Price",
    amount: "$60,000",
    label2: "tvl",
    pairs: [
      {
        name: "solana",
        icon: sol,
      },
      {
        name: "ethereum",
        icon: ether,
      },
      {
        name: "binance",
        icon: binanx,
      },
    ],
    label3: "popular pairs",
  },
]
