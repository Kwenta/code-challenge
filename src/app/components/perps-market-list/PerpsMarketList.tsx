// PerpsMarketList.tsx
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Contract, JsonRpcProvider } from 'ethers';
import { CONTRACT_ABI, ETHEREUM_NODE_URL, MockMarketList, PerpsMarket } from '../../constants';
import { ColumnConfig, Table } from '../table/Table';
import { currencyFormat } from '@/app/utils';


const PerpsMarketList: React.FC = () => {
  const [markets, setMarkets] = useState<PerpsMarket[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Connect to the Ethereum network
        const provider = new JsonRpcProvider(ETHEREUM_NODE_URL);

        // Instantiate the contract
        const contractAddress = '0x340B5d664834113735730Ad4aFb3760219Ad9112';
        const contract = new Contract(
          contractAddress,
          [CONTRACT_ABI],
          provider
        );

        // Retrieve list of perps markets
        const marketsList = (await contract.getMarkets()) as PerpsMarket[];

        setMarkets(marketsList);
      } catch (error: Error | unknown) {
        // error always occurs because of the ETHEREUM_NODE_URL,CONTRACT_ABI are not given,
        // return the mock list
        setMarkets(MockMarketList)
      }
    };

    fetchData();
  }, []);

  const sortedList = useMemo(() => {
    // Sort markets by size
    return markets.sort((a, b) => b.marketSize - a.marketSize);
  }, [markets])

  const NameRender = styled.span`
  font-weight: 700
  `


  const columns: ColumnConfig<PerpsMarket>[] = [
    { property: "name", header: "MARKET", render: (row) => <NameRender>{row['name']}</NameRender> },
    { property: "currentPrice", header: "PRICE", render: ({ currentPrice }) => currencyFormat(currentPrice) },
    { property: "marketSize", header: "MARKET SIZE", render: ({ marketSize }) => currencyFormat(marketSize) },
    { header: "MARKER/TAKER", render: ({ makerFee, takerFee }) => `${makerFee}%/${takerFee}%` },
  ]
  return (
    <Table data={markets} columns={columns} />
  );
};

export default PerpsMarketList;