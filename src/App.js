import logo from './logo.svg';
import './App.css';
import Balances from './components/Balances'

function App() {

    const randomWalletAddress = "0xb7658AAC84dBe5924Badc9d780c36442dD46306e"
  return (
    <Balances address={randomWalletAddress} chainId={1}/>
  );
}

export default App;
