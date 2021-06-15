import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/contact/ContactIcons.css';

const ContactIcons = () => {
  return (
    <div>
      <div className='list-contact-icons'>
        <div className='list-contact'>
          <div className='borderDiv'>
            <FontAwesomeIcon
              className='contactIcon'
              icon={['fas', 'user']}
              // size='3x'
            />
          </div>

          <h4 className='iconLabel'>Name</h4>
          <p>
            <span className='iconLink'>Ty D'Angelo</span>
          </p>
        </div>
        <div className='list-contact'>
          <div className='borderDiv'>
            <FontAwesomeIcon
              className='contactIcon'
              icon={['fas', 'map-marker-alt']}
              // size='3x'
            />
          </div>

          <h4 className='iconLabel'>Location</h4>
          <p>
            <span className='iconLink'>Austin, TX</span>
          </p>
        </div>
        <div className='list-contact'>
          <div className='borderDiv'>
            <FontAwesomeIcon
              className='contactIcon'
              icon={['fas', 'envelope-open-text']}
              // size='3x'
            />
          </div>

          <h4 className='iconLabel'>Email</h4>

          <p>
            <span className='iconLink'>tydangelo18@gmail.com</span>
          </p>
        </div>
        <div className='list-contact'>
          <div className='borderDiv'>
            <FontAwesomeIcon
              className='contactIcon'
              icon={['fab', 'github']}
              // size='3x'
            />
          </div>

          <h4 className='iconLabel'>Github</h4>
          <p>
            <span className='iconLink'>View My Repos</span>
          </p>
        </div>
        <div className='list-contact'>
          <div className='borderDiv'>
            <FontAwesomeIcon
              className='contactIcon'
              icon={['fab', 'linkedin-in']}
              // size='3x'
            />
          </div>

          <h4 className='iconLabel'>LinkedIn</h4>
          <p>
            <span className='iconLink'>Connect With Me</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactIcons;
