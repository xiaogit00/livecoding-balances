import defaultLogo from '../assets/default-logo.png'

const dummyData = [
    {
        "contract_decimals": 6,
        "contract_name": "Fake Coin",
        "contract_ticker_symbol": "FKC",
        "contract_address": "0xaFAKE991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "supports_erc": [
            "erc20"
        ],
        "logo_url": "https://res.cloudinary.com/dl4murstw/image/upload/v1659590465/default-logo_om9kbi.png",
        "last_transferred_at": "2022-10-13T04:45:11Z",
        "native_token": false,
        "type": "stablecoin",
        "balance": "100000000",
        "balance_24h": "549097",
        "quote_rate": 1.0005041,
        "quote_rate_24h": 1.0010376,
        "quote": 4467.9062,
        "quote_24h": 0.54966676,
        "nft_data": null
    },
    {
        "contract_decimals": 18,
        "contract_name": "Troll Coin",
        "contract_ticker_symbol": "DAI",
        "contract_address": "0xaFAKE991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "supports_erc": [
            "erc20"
        ],
        "logo_url": "https://res.cloudinary.com/dl4murstw/image/upload/v1659590465/default-logo_om9kbi.png",
        "last_transferred_at": "2021-07-26T06:48:28Z",
        "native_token": false,
        "type": "stablecoin",
        "balance": "118000000000000000000",
        "balance_24h": "118890072631196919922",
        "quote_rate": 1.0001241,
        "quote_rate_24h": 1.0002081,
        "quote": 118.90482,
        "quote_24h": 118.91482,
        "nft_data": null
    }
]

const handleImgError = (e) => {
  e.target.src = defaultLogo
}

const columns = [
  {
    title: '',
    dataIndex: 'logo_url',
    key: 'logo_url',
    render: text => <img src={text} onError={handleImgError} style={{width: '40px', height: '40px'}} />
  },
  {
    title: 'Name',
    dataIndex: 'contract_name',
    key: 'contract_name',
  },
  {
    title: 'Symbol',
    dataIndex: 'contract_ticker_symbol',
    key: 'contract_ticker_symbol',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
    sorter: (a, b) => a.balance - b.balance,
    render: (_, item) => (
      Number.isInteger(item.balance/10**item.contract_decimals) ? (item.balance/10**item.contract_decimals) : (item.balance/10**item.contract_decimals).toFixed(4)
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      {
        text: 'cryptocurrency',
        value: 'cryptocurrency',
      },
      {
        text: 'stablecoin',
        value: 'stablecoin',
      },
      {
        text: 'nft',
        value: 'nft',
      },
      {
        text: 'dust',
        value: 'dust',
      },
    ],
    onFilter: (value, item) => item.type.startsWith(value),
  },
  {
    title: 'Contract Address',
    dataIndex: 'contract_address',
    key: 'contract_address',
  },
]

export { dummyData, columns }
