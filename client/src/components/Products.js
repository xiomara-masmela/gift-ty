import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Box} from '@mui/material';



export function Products(props){
    console.log(props.likes)
    const likesString = props.likes.toString();
    console.log(likesString)
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`/api/products/${likesString}`)
        .then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch((error)=> console.log(error))

    }, [likesString])
        
        

    return (
        <Container >
            
            <p>Search Results for {likesString}</p>
            <Box sx={{ display: 'flex'}}>
                    {
                        products && products.map((product, index)=> (
                            <div key={index}> 
                                <img width="100" src={product.image_url}/>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <ul>
                                    {
                                       product.keywords && product.keywords.map((keyword, index)=>(
                                           <li>{keyword}</li>
                                       )
                                       )
                                    }
                                </ul>
                                
                            </div>
                            )
                        )
                    }
            </Box>
        </Container>
        
    )
}