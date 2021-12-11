import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Box} from '@mui/material';



export function Products(){

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get("/api/products")
        .then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
        .catch((error)=> console.log(error))

    }, []);
    


    return (
        <Container >
            <h4>Results</h4>
            <Box sx={{ display: 'flex'}}>
                    
                    {
                        products && products.map((product, index)=> (
                            <div key={index}> 
                                <img width="100" src={product.image_url}/>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                
                            </div>
                            )
                        )
                    }
            </Box>
        </Container>
        
    )
}