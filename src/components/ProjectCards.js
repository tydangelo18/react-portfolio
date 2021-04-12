import React, { Component } from 'react';
import '../styles/ProjectCards.css';
import weather from '../utilities/weather.jpg';
import planner from '../utilities/planner.jpg';
import springboard from '../utilities/springboard.jpg';
import photography from '../utilities/photography.jpg';
import burger from '../utilities/burger.jpg';
import filter from '../utilities/filter.jpg';

class ProjectCards extends Component {
  render() {
    return (
      <div className='ProjectCards'>
        <div className='cardDiv'>
          <div className='topRow'>
            <div className='container' id='springboardCard'>
              <img src={springboard} alt='Springboard' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://tydangelo18.github.io/springboard-app/'
                  target='null'
                >
                  <div className='text'>Springboard</div>
                </a>
              </div>
            </div>
            <div className='container' id='passwordCard'>
              <img src={weather} alt='password' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://tydangelo18.github.io/weatherdashboard/'
                  target='null'
                >
                  <div className='text'>Weather Dashboard</div>
                </a>
              </div>
            </div>
            <div className='container' id='burgerCard'>
              <img src={burger} alt='Burger Logger' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://lit-thicket-35467.herokuapp.com/'
                  target='null'
                >
                  <div className='text'>Burger Logger</div>
                </a>
              </div>
            </div>
          </div>
          <div className='bottomRow'>
            <div className='container' id='plannerCard'>
              <img src={planner} alt='Web Organizer' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://floating-garden-26225.herokuapp.com/'
                  target='null'
                >
                  <div className='text'>Web Organizer</div>
                </a>
              </div>
            </div>
            <div className='container' id='readmeCard'>
              <img
                src={photography}
                alt='Cody J. Brown Photography'
                className='image'
              ></img>
              <div className='overlay'>
                <a
                  href='https://github.com/tydangelo18/codyportfolio'
                  target='null'
                >
                  <div className='text'>Cody J. Brown Photography</div>
                </a>
              </div>
            </div>

            <div className='container' id='filterCard'>
              <img src={filter} alt='Landing Page' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://tydangelo18.github.io/landingpage/'
                  target='null'
                >
                  <div className='text'>Landing Page</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
