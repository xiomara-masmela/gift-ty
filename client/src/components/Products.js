import {React, useEffect, useState} from 'react';
import axios from 'axios';



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
        <div>
            {
                products && products.map((product, index)=> {
                    <div key={index}> 
                        {product.name}
                        
                    </div>
                }
                )
            }
        </div>
    )
}