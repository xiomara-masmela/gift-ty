import {React, useState, useEffect} from 'react';
import { FormLabel, FormControlLabel, Checkbox, FormControl, Container, TextField, FormGroup, Button, Box, InputLabel, Select, MenuItem} from '@mui/material';
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


   const [colour, setColour] = useState("");
   const [event, setEvent] = useState("");


   function handleEvent(event){
        console.log(event.target.value)
        setEvent(event.target.value);
   }

   function handleColourChange(event){
       setColour(event.target.value);
   }


   function handleLikesChange(event){
        setLikes([ ...likes, event.target.name])
        console.log(likes)
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked
        });
        console.log(event.target.name, event.target.checked)

   }
   const {outdoors, indoors, beauty, fashion, experiences, pets, technology, food} = checked;
  

    return (
        <>
        <Container maxWidth="sm">
            <Box sx={{m:8}}>
            <FormControl fullWidth  >
                <TextField id="outlined-basic" label="colour" variant="outlined" value={colour} onChange={handleColourChange} sx={{my:2}} />
                
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Event</InputLabel>
                   <Select
                        labelId="demo-simple-select-label"
                        value={event}
                        label="Event"
                        onChange={handleEvent}
                        >
                   <MenuItem value={"birthday"}>Birthday</MenuItem>
                   <MenuItem value={"anniversary"}>Anniversary</MenuItem>
                   <MenuItem value={"holiday"}>Holiday</MenuItem>
                   <MenuItem value={"baby"}>Baby Shower</MenuItem>
                   <MenuItem value={"work"}>Work Related</MenuItem>
                   </Select>
                </FormControl>
                
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
            </FormControl>

            </Box>
            

        </ Container>
        <Products likes={likes} event={event} colour={colour} />
        </>
            
            
            
            
        
    )
}