import React from 'react'
import { useEffect, useState } from 'react'
import  apiClient  from '../utils/api-client'

export const useData = (url) => {
  const [data, setData] = useState(null);
    const [erros,setErrors] = useState([]);
  
    useEffect(()=>{
        apiClient.get(url).then(
          (res)=>{
              setData(res.data);
              console.log(res.data);
          }
        ).catch(
          (err)=>{
              setErrors(err.meassge);
          }
        )
    },[]);
    return {data,erros};
}
