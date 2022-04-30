import { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

const GRAPH_API = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

const GET_TOKEN_DAY_DATAS = {};

const GET_TOKENS = {"query":"{\n  tokens(first: 10, orderBy: tradeVolumeUSD, orderDirection: desc) {\n    id\n    symbol\n    name\n    tradeVolumeUSD\n    untrackedVolumeUSD\n  }\n}","variables":null,"extensions":{"headers":null}};

const states = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

function App() {
  const [status, setStatus] = useState(states.LOADING);
  const [tokens, setTokens] = useState([]);

  useEffect(function fetchData() {
    fetch(GRAPH_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(GET_TOKENS),
    })
    .then(response => response.json())
    .then(response => {
      setTokens(response);
    })
    .catch((error)=>{
      // log error to bug monitoring tool
      console.error(error); // for dev only
      setStatus(states.ERROR);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Top 10 tokens at Uniswap.
        </h1>
        <p>{JSON.stringify(tokens)}</p>
        {/* <TokensTable
          tokens={tokens}
        /> */}
      </header>
    </div>
  );
}

export default App;
