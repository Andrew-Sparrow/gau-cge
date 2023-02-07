import React, { useState } from 'react';

import { statements } from '../../db/statements';
import { StatementСontainer } from '../statement-container/statement-container';
import { Chat } from '../chat/chat';
import './main.scss';


function getStatementsWithIsOpenStatus(clickedId = null) {
  const modifiedStatements = statements.map((item) => {
    return ({ ...item, isOpen: item.statement.id === +clickedId ? true : false });
  });

  return modifiedStatements;
}

function Main(props) {
  const [clickedId, setClickedId] = useState(null);

  function onClickHandler(id) {
    setClickedId(id);
  }

  return (
    <main className='main'>
      <ul className='main__list'>
        {getStatementsWithIsOpenStatus(clickedId).map((item) =>
          <StatementСontainer
            item={item}
            onClickHandler={onClickHandler}
            key={item.statement.id}
          />
        )}
      </ul>
      <Chat />
    </main>
  );
}

export { Main };
