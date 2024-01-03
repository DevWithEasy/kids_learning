import axios from "axios"
import apiurl from "./apiurl"

export const getData=async(data)=>{
    const {path,setData} = data
    try {
        const res = await axios.get(`${apiurl}/api/${path}`)
        if(res.data.success){
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error)
    }
}