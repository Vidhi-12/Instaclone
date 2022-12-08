import React from 'react';
import { Link } from "react-router-dom";
// import post_view from '../PostView/Posts';

export default function landing_page() {
  return (
    <div className='landing-sec'>
      <section className='img-sec'>
        <img src={require('./land.jpg')} alt='pic' />
      </section>
      <section className='login-sec'>
        <h1>10x Team 04</h1>
        <Link to={"post_view"}><button>Enter</button></Link>
      </section>
    </div>
  )
}
