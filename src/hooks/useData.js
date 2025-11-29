import React from 'react'
import { useEffect, useState } from 'react'
import  apiClient  from '../utils/api-client'

export const useData = (url) => {
  const [data, setData] = useState(null);
    const [erros,setErrors] = useState([]);
    const [isLoading, setIsloading] = useState(false);
  
    useEffect(()=>{
        setIsloading(true);
        apiClient.get(url).then(
          (res)=>{
              setData(res.data);
              setIsloading(false);
          }
        ).catch(
          (err)=>{
              setErrors(err.meassge);
              setIsloading(false);
          }
        )
    },[]);
    return {data,erros, isLoading};
}
