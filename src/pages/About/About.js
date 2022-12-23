import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="team">
        <div className="team-greeting">
          <h1>WE ARE TEAM ARCHI'S</h1>
          <p>
            A team of super cool people who have come together to impart the
            skills which have been absent around here. Wondering how? We are
            equipped with cool powers which are transferable!
          </p>
        </div>
        <div className="team-purpose">
          <h1>Why are we here</h1>
          <p>
            We want to change the way self-development is done. After all, we
            have some cool mentors to assist you in the development process! So,
            we decided to prepare the workforce of tomorrow with our traineeship
            program!
          </p>
        </div>
      </div>
    </div>
  );
}
