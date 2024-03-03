import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () =>{
    // console.log(params);
    const {id,recipeName} = useParams();
    return (
        <center>
            <h1> Description for {id}</h1>
            <h2>{recipeName.toUpperCase()}</h2>

        </center>



    )

}
export default Details;