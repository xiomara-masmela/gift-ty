import {React, useState, useEffect} from 'react';
import { FormLabel, FormControlLabel, Checkbox, FormControl, Container, TextField, FormGroup, Button, Box} from '@mui/material';
import axios from 'axios';
import {Products} from './Products';

export function InputData(){
   const [likes, setLikes]= useState([]);
   const [checked , setChecked] =useState({
       outdoors: false,
       indoors: false,
       beauty: false,
       fashion: false,
       experiences: false,
       pets: false,
       technology: false,
       food: false

   });

   const [age, setAge]= useState("");
   const [colour, setColour] = useState("");
   const [event, setEvent] = useState("");

   function handleAgeChange(event){
    
        console.log(event.target.value)
        setAge(event.target.value);
   }

   function handleColourChange(event){
    
       console.log(event.target.value)
       setColour(event.target.value);
   }


   function handleLikesChange(event){
    
        setLikes([ ...likes, event.target.name])
        console.log(likes)
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked
        });


   }
   const {outdoors, indoors, beauty, fashion, experiences, pets, technology, food} = checked;

    const [inputs, setInputs] = useState({});
   //Send data to db

   let likeString = '';
   function handleSubmit(event){
       event.preventDefault();
       
       console.log(likes)
       setInputs({
           ...inputs,
           "age": age, "colour": colour, "event": "birthday", "likes": likes
        });
       
       console.log(inputs);
       
    //    axios.post('/api/inputs', inputs)
    //     .then((res)=>{
    //         console.log(res.data);
    //     })
    


   }

    return (
        <>
        <Container maxWidth="sm">
            <Box sx={{m:8}}>
            <FormControl fullWidth  >
                <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={handleAgeChange} sx={{my:2}}/>
                <TextField id="outlined-basic" label="colour" variant="outlined" value={colour} onChange={handleColourChange} sx={{my:2}} />
                <FormLabel component="legend" sx={{my:2}}>Likes</FormLabel >
                
                <FormGroup onChange={handleLikesChange}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    
                        <FormControlLabel
                                control={
                                <Checkbox checked={outdoors}  name="outdoors" />
                                }
                                label="Outdoors"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={indoors}  name="indoors" />
                                }
                                label="Indoors"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={beauty}  name="beauty" />
                                }
                                label="Beauty"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={fashion}  name="fashion" />
                                }
                                label="Fashion"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={experiences}  name="experiences" />
                                }
                                label="Experiences"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={pets}  name="pets" />
                                }
                                label="Pets"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={technology}  name="technology" />
                                }
                                label="Technology"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={food}  name="food" />
                                }
                                label="Food"
                        />
                       

                
                </Box> 
                </FormGroup>
                <Button onClick={handleSubmit} variant="outlined" sx={{my:2}}>Submit</Button>
                
                
            </FormControl>

            </Box>
            

        </ Container>
        {/* <Products likes={likes} /> */}
            </>
            
            
            
            
        
    )
}