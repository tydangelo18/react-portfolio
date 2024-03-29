import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Icons from '../components/Icons';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <section className='homeSection'>
        <header>
          <Navbar />
        </header>
        <div className='content'>
          <div className='info'>
            <h2>
              Ty D'Angelo <br />
              <span>Full Stack Developer</span>
            </h2>
            <p>
              Full Stack Developer with a background in financial accounting. I
              completed the Full Stack Web Development Boot Camp at the
              University of Texas at Austin in October 2020. I enjoy problem
              solving while also utilizing my creativity. My skills include
              Javascript, React, Redux, Node.js, Git, HTML, and CSS.{' '}
            </p>
            {
              // This will be a <Link /> to my Resume
            }
            <a
              href='https://docs.google.com/document/d/1AkzlB9kHWuJ3AqMC1kHFsWLysljnbeYmSTvM2lIGb5M/edit?usp=sharing'
              className='info-btn'
              target='null'
            >
              View CV
            </a>
          </div>
        </div>
        <div className='iconsdividerDiv'>
          <hr className='iconsDivider' />
        </div>
        <div className='media-icons'>
          <Icons />
        </div>
      </section>
    </div>
  );
};

export default Home;
