import {React, useState, useEffect} from 'react';
import { FormLabel, FormControlLabel, Checkbox, FormControl, Container, TextField, FormGroup, Box, InputLabel, Select, MenuItem} from '@mui/material';
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
        
        
        setChecked({
                ...checked,
                [event.target.name]: event.target.checked
        });
        if(checked[event.target.name] === false){
                setLikes([ ...likes, event.target.name])
        }else {
                console.log(likes.indexOf(event.target.name))
                likes.splice(likes.indexOf(event.target.name), 1 )
                setLikes(likes)
        }
        // if (event.target.checked === true){
        //         setLikes([ ...likes, event.target.name])
        // }else {
        //         //setlikes 
        //         setLikes([ ...likes, event.target.name])
        // }
        // console.log(likes)
        console.log(checked)
        console.log(event.target.name)

   }
   const {outdoors, indoors, beauty, fashion, experiences, pets, technology, food} = checked;
  

    return (
        <>
        <Container maxWidth="sm">
            <Box sx={{m:8}}>
            <FormControl fullWidth  >
                <TextField  label="colour" variant="outlined" value={colour} onChange={handleColourChange} sx={{my:2}} />
                
                <FormControl fullWidth>
                  <InputLabel id="event-select">Event</InputLabel>
                   <Select
                        labelId="event-select"
                        value={event}
                        label="Event"
                        onChange={handleEvent}
                        >
                   <MenuItem value={"birthday"}>Birthday</MenuItem>
                   <MenuItem value={"anniversary"}>Anniversary</MenuItem>
                   <MenuItem value={"holiday"}>Holiday</MenuItem>
                   <MenuItem value={"work"}>Work Related</MenuItem>
                   </Select>
                </FormControl>
                
                <FormLabel color="secondary" component="legend" sx={{my:2}}>Likes</FormLabel >
                <FormGroup onChange={handleLikesChange}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    
                        <FormControlLabel
                                control={
                                <Checkbox checked={outdoors} color="secondary"  name="outdoors" />
                                }
                                label="Outdoors"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={indoors} color="secondary"  name="indoors" />
                                }
                                label="Indoors"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={beauty} color="secondary"  name="beauty" />
                                }
                                label="Beauty"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={fashion} color="secondary"  name="fashion" />
                                }
                                label="Fashion"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={experiences} color="secondary"  name="experiences" />
                                }
                                label="Experiences"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={pets} color="secondary"  name="pets" />
                                }
                                label="Pets"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={technology} color="secondary"  name="technology" />
                                }
                                label="Technology"
                        />
                        <FormControlLabel
                                control={
                                <Checkbox checked={food} color="secondary" name="food" />
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