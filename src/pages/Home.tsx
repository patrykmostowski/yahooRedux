import React, { Fragment, useState } from 'react'
import axios from 'axios'

export function Home() {
  const [auctions, setAuctions] = useState([])

  let apiLink = 'https://yahoojp.herokuapp.com/gucci'

  const fetch = async () => {
    const res = await axios.get(`${apiLink}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, X-Requested-With',
      },
    })
    console.log(res)
    console.log(res.data)
    setAuctions(res.data)
  }
  return (
    <Fragment>
      <h1>Yahoo auctions japan</h1>
      <button onClick={fetch}>jaja</button>
      {console.log(fetch)}
      {auctions &&
        auctions.map((i, e) => (
          <div className="data" key={e}>
            {i}
          </div>
        ))}
    </Fragment>
  )
}
