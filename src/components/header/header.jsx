import React from 'react';
import './header.scss'

function Header(props) {
  return (
    <div className='header'>
      <h1 className='header__title'>Chat</h1>
      <a
        className="header__link"
        target="_blank"
        href='https://github.com/Andrew-Sparrow/gau-cge'
        alt='Link to GitHub'
        rel="noopener noreferrer"
      >Project on GitHub</a>
    </div>
  );
}

export { Header };
