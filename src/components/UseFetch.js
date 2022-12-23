import {useState,useEffect} from 'react'

export const UseFetch= (url)=>{
    const [resultado,setResultado] = useState({cargando:true,data:null});

    useEffect(()=>{
        getDatos(url)
    },[url])

    async function getDatos(url){
        try{
        setResultado({cargando:true,data:null})
        const resp = await fetch(url)//Fetching data from main url that returns an array of 20 pokemon
        const data = await resp.json()
        setResultado({cargando:false,data})//The functions are done, so we assign false value to cargando and data is not null anymore
        }catch(e){
            console.log(e)
        }
    }
    return resultado;//Return 20 pokemon array fetched
}