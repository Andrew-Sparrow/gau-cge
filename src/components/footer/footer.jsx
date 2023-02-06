import React from 'react';

import './footer.scss';


function Footer(props) {
  return (
    <div className="wrapper">
      <footer className='footer'>
        <h4 className='footer__title'>Produced by Andrew Pechersky <span>January 2023</span></h4>
        <a
          className="footer__link"
          target="_blank"
          href='https://github.com/Andrew-Sparrow'
          alt='Link to GitHub'
          rel="noopener noreferrer"
        >Profile on GitHub</a>
      </footer>
    </div>
  );
}

export { Footer };
