import { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const GRAPH_API = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const GET_TOKEN_DAY_DATAS = {"query":"query getPrices($tokenId: ID) {\n  tokenDayDatas(orderBy: date, orderDirection: desc, where: {token: $tokenId}) {\n    date\n    id\n    priceUSD\n    token {\n      id\n      name\n      symbol\n    }\n  }\n}","operationName":"getPrices","extensions":{"headers":null}};

// ..."Ian Laphan fan token" and "generalize fix for rebass tokens" are weird symbol names
const GET_TOKENS = {"query":"{\n  tokens(first: 10, orderBy: tradeVolumeUSD, orderDirection: desc) {\n    id\n    symbol\n    name\n    tradeVolumeUSD\n    untrackedVolumeUSD\n  }\n}","variables":null,"extensions":{"headers":null}};

const states = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

export default function App() {
  const [status, setStatus] = useState(states.LOADING);
  const [tokens, setTokens] = useState([]);

  useEffect(function fetchTokenPrices(){
    main();
    async function main (){
      const tokensResponse = await fetch(GRAPH_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(GET_TOKENS),
      });
      const tokens = (await tokensResponse.json()).data.tokens;

      const getPrices = tokens.map((token)=>{
        return fetch(GRAPH_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...GET_TOKEN_DAY_DATAS,
            variables: {tokenId: token.id}
          }),
        })
        .then(response => response.json())
        .then(response => {
          return response.data.tokenDayDatas;
        })
        .catch((error)=>{
          // if prod, log error to bug monitoring tool
          console.error(error); // for dev only
          return null;
        });
      });

      const tokenPrices = await Promise.all(getPrices);

      setTokens(tokenPrices);
      setStatus(states.SUCCESS);
      console.log('prices', tokenPrices)
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Top 10 tokens at Uniswap.
        </h1>
        {status === states.SUCCESS && <TokensTable
          tokens={tokens}
        />}
      </header>
    </div>
  );
}


function TokensTable({tokens}){
  // ... I guess I'll use a table just so I can go fast?? 😂
  return (
    <table>
      <thead>
        <tr>
          <th>Token Symbol</th>
          <th>Price</th>
          <th>1H % Price Change</th>
          <th>1D % Price Change</th>
          <th>7D % Price Change</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(prices => {
          const mostRecentPrice = prices[0]
          const {id, symbol} = mostRecentPrice.token;
          const now = new Date();
          const isDataRecent = mostRecentPrice.date * 1000 - Number(now) <= DAY;
          
          if(isDataRecent) {
            // RK TODO: if I had more time, I would verify that indices 1 and 7 represent prices from 1 and 7 days before
            var price = Number(mostRecentPrice.priceUSD);
            var price_1d = prices[1]?.priceUSD ? Number(prices[1].priceUSD) : null;
            var price_7d = prices[7]?.priceUSD ? Number(prices[7].priceUSD) : null;

            var percent_1d = price_1d ? percentageChange(price_1d, price) : null;
            var percent_7d = price_7d ? percentageChange(price_7d, price) : null;
          }

          return (
            <tr key={id}>
              <td>{symbol}</td>
              <td>{price ? '$' + price.toFixed(2) : '-'}</td>
              <td>-</td>
              <td>{percent_1d}%</td>
              <td>{percent_7d}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function percentageChange(old, now){
  const percentageChange = (now - old) * 100 / old;
  return percentageChange.toFixed(2);
}