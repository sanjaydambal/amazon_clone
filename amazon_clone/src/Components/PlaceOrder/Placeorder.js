import React from 'react';
import "./Placeorder.css";
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating';

function Placeorder(props) {
    return (
        <div>
            <Grid container spacing={2}>
  <Grid item xs={6}>
    <img className='placeholder_img' src='https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417554' alt='' height="500px"/>
  </Grid>
  <Grid item xs={4}>
    <div>Samsung S21 (256 GB) Blue</div>
    <div> <Rating name="read-only" value={4} style={{fontSize:'20px'}} readOnly /> </div>
  </Grid>
  <Grid item xs={4}>
    
  </Grid>
 
</Grid>
        </div>
    );
}

export default Placeorder;