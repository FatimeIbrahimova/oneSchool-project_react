import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [data,setData]=useState([])
  const getData=async()=>{
  const res= await axios.get("http://localhost:8080/users")
  setData(res.data)
  console.log(res.data);
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(data);

  const handleDelete=(id)=>{
    console.log(id);
    console.log("delete")
   axios.delete(`http://localhost:8080/users/${id}`)
   getData()
  }
  return (
    <div>
      {data&& data.map((user)=>(
        <div style={{display:"flex"}}>
          <Card sx={{border:"2px solid red",width:400}}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {user.firstName}
                    </Typography>
                    <Typography variant="body2">
                       {user.lastName}
                    </Typography>
                    <Typography variant="body2">
                       {user.subject}
                    </Typography>
                    <Typography variant="body2">
                       {user.email}
                    </Typography>
                    <Typography variant="body2">
                       {user.message}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" variant="contained" onClick={()=>handleDelete(user.id)}>Delete</Button>
                </CardActions>
            </Card>
        </div>
      ))}
    </div>
  )
}

export default Dashboard