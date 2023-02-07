import React, { useState } from 'react';

import { statements } from '../../db/statements';
import { Statement } from '../statement/statement';
import './main.scss';


function getStatementsWithIsOpenStatus(clickedId = null) {
  const modifiedStatements = statements.map((item) => (
    { ...item, isOpen: item.statement.id === +clickedId ? true : false }
  ));

  return modifiedStatements;
}



function Main(props) {
  const [clickedId, setClickedId] = useState(null);

  function onClickHandler(id) {
    setClickedId(id);
  }

  function getElementsByCondition(item) {
    if (item.isOpen) {
      return (
        <div className='main__sublist'>
          <Statement
            id={item.statement.id}
            key={item.statement.id}
            code={item.statement.number}
            unreadCount={item.statement.unreadCount}
            onClickHandler={onClickHandler}
          />
          <p>section</p>
          <p>section</p>
        </div>
      )
    } else {
      return (
        <Statement
          id={item.statement.id}
          key={item.statement.id}
          code={item.statement.number}
          unreadCount={item.statement.unreadCount}
          onClickHandler={onClickHandler}
        />
      )
    }
  }

  return (
    <main className='main'>
      <ul className='main__list'>
        {getStatementsWithIsOpenStatus(clickedId).map((item) =>
        // <Statement
        //   id={item.statement.id}
        //   key={item.statement.id}
        //   code={item.statement.number}
        //   unreadCount={item.statement.unreadCount}
        //   onClickHandler={onClickHandler}
        // />
        (getElementsByCondition(item))
        )}
      </ul>
    </main>
  );
}

export { Main };
