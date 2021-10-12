import React from "react";
import Links from "./Links"

function About(props) {

  const DisplayBio = () =>{
    if(!props.bio){
      return null
    } else {
      return <p>{props.bio}</p>
    }
  }

  return (
    <div id="about">
    <h2>About Me</h2>
      <DisplayBio />
      
      <p></p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      />
    </div>
  );
}

export default About;
