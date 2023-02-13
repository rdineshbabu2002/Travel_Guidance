import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
const Locations = () => {
    const {name}=useParams();
    const [places,setPlaces]=useState([])
    useEffect(()=>{
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8000/api/v1/locations/${name}`)
            setPlaces([...data])
        }
        getData();
    },[])
  return (
    <div>Locations
        {places.length}
    </div>
  )
}

export default Locations


