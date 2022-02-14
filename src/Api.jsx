import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
            setdata(response.data)
        })
    })
  return (
    <div>
        <h1>items</h1>
        {
            data.map((item,index)=>{
                return(
                    <div>
                        <h3>{index+1}</h3>
                        <h4>{item.title}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}
