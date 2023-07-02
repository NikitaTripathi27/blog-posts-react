import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config/config"
import axios from "axios"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import './BlogPost.css'
const BlogPost = () => {

    const params = useParams()
    const [details ,setdetails] = useState({})
    const postDetails =async (id) =>{
        const res = await axios.get(`${config.endpoint}/blog/id/${id}`)
        console.log(res.data)
        setdetails(res.data);
    }

    useEffect(()=>{
        postDetails(params.id)
    },[params.id])
    
    return ( 
    <>
        <Stack className='post-details'>
            <h2 className="btn-title">{details.title}</h2>
        
        <h2 className="btn-author">Author: {details.author}</h2>
        <p>
           {details.content}
        </p>
       
        </Stack>
       
    </> 
    );
}
 
export default BlogPost;