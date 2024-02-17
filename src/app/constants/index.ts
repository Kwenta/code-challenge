export const ETHEREUM_NODE_URL = 'ETHEREUM_NODE_URL'
export const CONTRACT_ABI = 'CONTRACT_ABI'
export const DEFAULT_LOCALE = 'en-US'
export const DEFAULT_CURRENCY = 'USD'
export interface PerpsMarket {
    id: number;
    name: string;
    marketSize: number;
    currentPrice: number;
    makerFee: number;
    takerFee: number;
}

export const MockMarketList: PerpsMarket[] = [
    {
        id: 1,
        name: "ETH-PERP",
        marketSize: 9000000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 1900
    },
    {
        id: 2,
        name: "BTC-PERP",
        marketSize: 1200000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 27000
    },
    {
        id: 3,
        name: "OP-PERP",
        marketSize: 2000000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 2
    },
    {
        id: 4,
        name: "BNB-PERP",
        marketSize: 1500000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 300
    },
    {
        id: 5,
        name: "XRP-PERP",
        marketSize: 1010000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 0.5
    },
    {
        id: 6,
        name: "ETH-PERP",
        marketSize: 1002000,
        makerFee: 0.02,
        takerFee: 0.06,
        currentPrice: 1900
    },
]
