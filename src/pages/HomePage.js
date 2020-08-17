import React from 'react';
import Hero from '../components/Hero'
import HomeButton from '../components/HomeButton';



function HomePage(props) {
    return(
        <div >
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
           
        <HomeButton/>
        </div>
        </div>
    );
}

export default HomePage;