import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [data, setData] = useState([])
    async function getData() {
        const res = await fetch("https://northwind.vercel.app/api/products")
        const api = await res.json()
        setData(api)
    }
    useEffect(() => {
      getData()
    }, [])
    
  return (
    <div><div className="cardwrapper">
        {data.map((x)=>
        <ul key={x.id}>
            <li>{x.name}</li>
            <li>{x.unitPrice}</li>
            <li>{x.quantityPerUnit}</li>
            <button><Link to={`/Details/${x.id}`}>Details ... </Link></button>
        </ul>
        
        
        )}
        </div></div>
  )
}

export default Products