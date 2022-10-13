import axios from 'axios'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.min.css'
import { Table } from 'antd'
import { dummyData, columns } from '../utils/helper'

const Balances = ({address, chainId}) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return (
      <Table columns={columns} dataSource={dummyData} rowKey='contract_address' style={{width:"70%", margin:"20em"}}/>
  )
}


export default Balances;
