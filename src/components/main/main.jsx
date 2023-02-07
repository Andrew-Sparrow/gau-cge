import React, { useState } from 'react';

import { statements } from '../../db/statements';
import { Statement } from '../statement/statement';
import './main.scss';


function getStatementsWithIsOpenStatus(clickedId = null) {
  const modifiedStatements = statements.map((item) => (
    { ...item, isOpen: item.id === clickedId ? true : false }
  ));

  return modifiedStatements;
}

function Main(props) {
  const [clickedId, setClickedId] = useState(null);

  function onClickHandler(id) {
    setClickedId(id);
  }

  return (
    <main className='main'>
      <ul>
        {getStatementsWithIsOpenStatus(clickedId).map(({ statement }) =>
          <Statement
            id={statement.id}
            key={statement.id}
            code={statement.number}
            unreadCount={statement.unreadCount}
            onClickHandler={onClickHandler}
          />
        )}
      </ul>
    </main>
  );
}

export { Main };
