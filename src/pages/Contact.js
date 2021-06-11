import React from 'react';
import '../styles/contact/Contact.css';
import Navbar from '../components/Navbar';
import Heading from '../components/contact/Heading';
import SubHeading from '../components/contact/SubHeading';
import ContactIcons from '../components/contact/ContactIcons';

const About = () => {
  return (
    <div>
      <section>
        <header>
          <Navbar />
        </header>
        <div className='headingDiv'>
          <Heading />
          <SubHeading />
        </div>
      </section>

      <section>
        <ContactIcons />
      </section>
      <section>
        <div className='dividerDiv'>
          <hr className='contactDivider' />
        </div>
      </section>
    </div>
  );
};

export default About;
