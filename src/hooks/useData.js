import React from 'react'
import { useEffect, useState } from 'react'
import  apiClient  from '../utils/api-client'

export const useData = (endpoint, configObject, dependencies) => {
  const [data, setData] = useState(null);
    const [erros,setErrors] = useState([]);
    const [isLoading, setIsloading] = useState(false);
  
    useEffect(()=>{
        setIsloading(true);
        apiClient.get(endpoint,configObject).then(
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
    },dependencies ? dependencies : []);
    return {data,erros, isLoading};
}
