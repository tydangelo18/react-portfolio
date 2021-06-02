import React, { Component } from 'react';
import '../styles/ProjectCards.css';
import bol from '../utilities/bol.jpg';
import landing from '../utilities/landing.jpg';
import springboard from '../utilities/springboard.jpg';
import photography from '../utilities/photography.jpg';
import burger from '../utilities/burger.jpg';
import finch from '../utilities/finch.jpg';

class ProjectCards extends Component {
  render() {
    return (
      <div className='ProjectCards'>
        <div className='cardDiv'>
          <div className='topRow'>
            <div className='container' id='springboardCard'>
              <img src={bol} alt='bol' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://calm-thicket-62947.herokuapp.com/'
                  target='null'
                >
                  <div className='text'>bol</div>
                </a>
              </div>
            </div>
            <div className='container' id='passwordCard'>
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
            <div className='container' id='burgerCard'>
              <img src={finch} alt='Finch' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://hidden-savannah-51942.herokuapp.com'
                  target='null'
                >
                  <div className='text'>Finch</div>
                </a>
              </div>
            </div>
          </div>
          <div className='bottomRow'>
            <div className='container' id='plannerCard'>
              <img
                src={photography}
                alt='Cody J. Brown Photography'
                className='image'
              ></img>
              <div className='overlay'>
                <a
                  href='https://tydangelo18.github.io/codyportfolio/#/'
                  target='null'
                >
                  <div className='text'>Cody J. Brown Photography</div>
                </a>
              </div>
            </div>
            <div className='container' id='readmeCard'>
              <img src={landing} alt='Landing Page' className='image'></img>
              <div className='overlay'>
                <a
                  href='https://tydangelo18.github.io/landingpage/'
                  target='null'
                >
                  <div className='text'>Landing Page</div>
                </a>
              </div>
            </div>

            <div className='container' id='filterCard'>
              <img src={burger} alt='We Love Burgers' className='image'></img>
              <div className='overlay'>
                <a href='https://lit-thicket-35467.herokuapp.com' target='null'>
                  <div className='text'>We Love Burgers</div>
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
