import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Box} from '@mui/material';



export function Products(props){
    console.log(props.likes, props.event, props.colour)
    const event = props.event;
    const colour = props.colour;
    const likesString = props.likes.toString();
    console.log(likesString)
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`/api/products/${likesString}/${event}/${colour}`)
        .then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch((error)=> console.log(error))

    }, [likesString])
        
        

    return (
        <Container >
            <p>Search Results for {likesString} {event} {colour}</p>
            <Box sx={{ display: 'flex', flexWrap:'wrap'}} className="product-container">
                    {
                        products && products.map((product, index)=> (
                            <div key={index} className="single-product"> 
                                <img width="300" src={product.image_url}/>
                                <Box sx={{display: 'flex'}}>
                                    <h4 >{product.name}</h4>
                                    <p>${product.price}</p>
                                </Box>
                                
                                <ul className="cat-list">
                                    {
                                       product.keywords && product.keywords.map((keyword, index)=>(
                                           <li className="category">{keyword}</li>
                                       )
                                       )
                                    }
                                </ul>
                                <p>{product.event}</p>
                                <p>{product.colour}</p>
                                
                            </div>
                            )
                        )
                    }
            </Box>
        </Container>
        
    )
}