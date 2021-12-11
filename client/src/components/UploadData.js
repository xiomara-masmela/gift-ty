import {React, useState, useEffect} from 'react';
import { Input, FormLabel, FormControlLabel, Checkbox, FormControl, Container, TextField, FormGroup, Button, Box} from '@mui/material';
import axios from 'axios';



//https://www.newline.co/@satansdeer/handling-file-fields-using-react-hook-form--93ebef46
export function UploadData(){

    const [file, setFile]= useState(undefined);
    const [data, setData]= useState({});
   
   function handleChange(event){
        setFile(event.target.files[0])
   }
   

   
   function handleSubmit(event){
       event.preventDefault();
        //    const data = new FormData();
       console.log(file);
       data.file = file;
        console.log(data)
       axios.post("/api/products", data)
       .then((res)=> console.log(res.status))  
   }

    return (
        <Container maxWidth="sm">
            <Box sx={{m:8}}>
            <h2>Upload Data</h2>
            <FormControl >
                <Input  type="file" name="data" onChange={handleChange}/>
                <Button variant="outlined" sx={{my:2}} onClick={handleSubmit} >Submit</Button> 
            </FormControl>
            </Box>
        </ Container>
    )
}

//src
//https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/