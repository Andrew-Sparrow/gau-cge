import React from 'react';

function Header(props) {
  return (
    <div>
      <h1 className='main__title'>Chat</h1>
      <a
        className="main__link"
        target="_blank"
        href='https://github.com/Andrew-Sparrow/gau-cge'
        alt='Link to GitHub'
        rel="noopener noreferrer"
      >Project on GitHub</a>
    </div>
  );
}

export { Header };
