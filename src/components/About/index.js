import React from 'react';
import coverImage from '../../assets/images/oceanography-building.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a Texas ATM Graduate with a degree in Environmental Geosceinces. I'm 26 years old and currently seeking employment as a software developer!
        </p>
      </div>
    </section>
  );
}

export default About;
