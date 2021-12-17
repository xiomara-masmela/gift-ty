import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Box} from '@mui/material';



export function Products(props){
    const event = props.event;
    const colour = props.colour;
    const likesString = props.likes.toString();
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const searchParams = new URLSearchParams();
        searchParams.set('colour', colour);
        searchParams.set('event', event);
        searchParams.set('keywords', likesString);  
        axios.get(`/api/products?${searchParams.toString()}`)
        .then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
        
        

        .catch((error)=> {
            if(error.response){
                console.log(error.response)
            }else {
                console.log(error)
            }
        })

    }, [likesString, event, colour])
        
        

    return (
        <Container >
            <p><span className="bold">Search Results</span> {colour} {event} {likesString}</p>
            <Box sx={{ display: 'flex', flexWrap:'wrap'}} className="product-container">
                    {
                        products && products.map((product, index)=> (
                            <div key={index} className="single-product"> 
                                <img width="300" src={product.image_url} alt={product.name}/>
                                <Box  className="product-information">
                                    <h4 >{product.name}</h4>
                                    <p>${product.price}</p>
                                </Box>
                                <h4>Categories</h4>
                                <ul className="cat-list">
                                    {
                                       product.keywords && product.keywords.map((keyword, index)=>(
                                           <li className="category">{keyword}</li>
                                       )
                                       )
                                    }
                                </ul>
                                <div className="box">
                                    <h4>Event:</h4><p>{product.event}</p>
                                </div>
                                <div className="box">
                                    <h4>Colour</h4><p>{product.colour}</p>
                                </div>
                                
                                
                            </div>
                            )
                        )
                    }
            </Box>
        </Container>
        
    )
}