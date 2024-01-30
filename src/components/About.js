import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
        <a href="https://github.com/liza">https://github.com/liza</a>
        <a href="https://www.linkedin.com/in/liza/">https://www.linkedin.com/in/liza/</a>
      {/* add your <Links /> component here */}
      <Links />
      <Links />
    </div>
  );
}

export default About;
