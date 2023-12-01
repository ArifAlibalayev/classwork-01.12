import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const [data, setData] = useState([])
    async function getData() {
        const res = await fetch(`https://northwind.vercel.app/api/products/${id}`)
        const api = await res.json()
        setData(api)
    }
    useEffect(() => {
      getData()
    }, [])


  return (
    <div className='cardwrapper'>
        <ul>
            <li>{data.name}</li>
            <li>{data.quantityPerUnit}</li>
            <li>{data.unitPrice}</li>
        </ul>
    </div>
  )
}

export default Details