import React from 'react';
import './header.scss'

const LINK_TO_GITHUB_PAGE_WITH_PROJECT = 'https://github.com/Andrew-Sparrow/gau-cge';

function Header(props) {
  return (
    <div className='header'>
      <h1 className='header__title'>Chat</h1>
      <a
        className="header__link"
        target="_blank"
        href={LINK_TO_GITHUB_PAGE_WITH_PROJECT}
        alt='Link to GitHub'
        rel="noopener noreferrer"
      >Project on GitHub</a>
    </div>
  );
}

export { Header };
