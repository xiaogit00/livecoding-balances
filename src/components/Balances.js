import axios from 'axios'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.min.css'
import { Table } from 'antd'
import { dummyData, columns } from '../utils/helper'

const Balances = ({address, chainId}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const apiKey = process.env.REACT_APP_COVALENT_API_KEY

  const getBalancesEndpoint = `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/`

  const auth = {
      auth: {
          username: apiKey
      }
  }

  useEffect(() => {
      axios
        .get(getBalancesEndpoint, auth)
        .then(res => {
            console.log("this is reached")
            setIsLoading(false)
            setData(res.data.data.items)
        })
  }, [])

  return (
      <Table columns={columns} dataSource={data} rowKey='contract_address' style={{width:"70%", margin:"20em"}}/>
  )
}


export default Balances;
