import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Category = () => {
    const {name}=useParams()
    const [places,setPlaces]=useState([])
    useEffect(()=>{
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8000/api/v1/category/${name}`);
            setPlaces([...data])
        }
        getData()
    },[])
    console.log(places)
  return (
    <div>Category</div>
  )
}

export default Category