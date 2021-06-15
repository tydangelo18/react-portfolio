import React from 'react';
import '../styles/ProjectCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bol from '../utilities/bol.jpg';
import springboard from '../utilities/springboard.jpg';
import finch from '../utilities/finch.jpg';

const ProjectCards = () => {
  return (
    <div className='ProjectCards'>
      {
        // project one (bol)
      }
      <div className='cardDiv'>
        <div className='projectOne'>
          <div className='container' id='bolPic'>
            <img src={bol} alt='bol' className='image'></img>
            <img src={bol} alt='bol' className='altimage'></img>
            
          </div>
          <div className='projectContent'>
            <div className='projectTitle'>
              <h2>bol</h2>
            </div>
            <div className='projectDesc'>
              <p>
                A MERN stack application that tracks different bowling metrics
                for users to track improvement of their game.
              </p>
            </div>
            <div className='projectdividerDiv'>
              <hr className='projectDivider' />
            </div>
            <div className='projectStack'>
              <p>
                MongoDB, Express.js, React, Node.js, Mongoose, Redux, Chart.js.{' '}
              </p>
            </div>
            <div className='projectLinks'>
              <a href='https://calm-thicket-62947.herokuapp.com/' target='null'>
                <FontAwesomeIcon
                  className='linkBtn'
                  icon={['fas', 'link']}
                  size='2x'
                />
              </a>
              <a href='https://github.com/tydangelo18/bol' target='null'>
                <FontAwesomeIcon
                  className='githubBtn'
                  icon={['fab', 'github']}
                  size='2x'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        // project two (Springboard)
      }
      <div className='cardDiv'>
        <div className='projectOne'>
          <div className='container' id='bolPic'>
            <img src={springboard} alt='springboard' className='image'></img>
            <img src={springboard} alt='springboard' className='altimage'></img>
            
          </div>
          <div className='projectContent'>
            <div className='projectTitle'>
              <h2>Springboard</h2>
            </div>
            <div className='projectDesc'>
              <p>
                A front end application that allows users to search for
                entertainment and dining options in a particular U.S city.
              </p>
            </div>
            <div className='projectdividerDiv'>
              <hr className='projectDivider' />
            </div>
            <div className='projectStack'>
              <p>
                HTML, CSS, Javascript, JQuery, Zomato API, Ticketmaster API.
              </p>
            </div>
            <div className='projectLinks'>
              <a
                href='https://tydangelo18.github.io/springboard-app/'
                target='null'
              >
                <FontAwesomeIcon
                  className='linkBtn'
                  icon={['fas', 'link']}
                  size='2x'
                />
              </a>
              <a
                href='https://github.com/tydangelo18/springboard-app'
                target='null'
              >
                <FontAwesomeIcon
                  className='githubBtn'
                  icon={['fab', 'github']}
                  size='2x'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        // project three (Finch)
      }
      <div className='cardDiv'>
        <div className='projectOne'>
          <div className='container' id='bolPic'>
            <img src={finch} alt='finch' className='image'></img>
            <img src={finch} alt='altfinch' className='altimage'></img>
           
          </div>
          <div className='projectContent'>
            <div className='projectTitle'>
              <h2>Tweet Saver</h2>
            </div>
            <div className='projectDesc'>
              <p>
                A MERN stack application used to search for, save, and delete
                tweets by keyword using the Twitter API.
              </p>
            </div>
            <div className='projectdividerDiv'>
              <hr className='projectDivider' />
            </div>
            <div className='projectStack'>
              <p>MongoDB, Express.js, React, Node.js, Mongoose, Twitter API.</p>
            </div>
            <div className='projectLinks'>
              <a
                href='https://tydangelo18.github.io/springboard-app/'
                target='null'
              >
                <FontAwesomeIcon
                  className='linkBtn'
                  icon={['fas', 'link']}
                  size='2x'
                />
              </a>
              <a
                href='https://github.com/tydangelo18/springboard-app'
                target='null'
              >
                <FontAwesomeIcon
                  className='githubBtn'
                  icon={['fab', 'github']}
                  size='2x'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
