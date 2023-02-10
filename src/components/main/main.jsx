import React, { useState } from 'react';

import { StatementСontainer } from '../statement-container/statement-container';
import { Chat } from '../chat/chat';
import './main.scss';
import {
  modifiedStatementsWithIsOpenStatus,
  setStatementsIsOpenStatus
} from './utils';


function Main(props) {
  const [statements, setStatements] = useState(modifiedStatementsWithIsOpenStatus())
  const [clickedIdSection, setClickedIdSection] = useState(null);

  function onClickStatementHandler(id) {
    setStatements(setStatementsIsOpenStatus(id));
    if (statements.find((item) => item.statement.id === +id)) {
      setClickedIdSection(null); // close messages
    }
  }

  function onClickSectionHandler(id) {
    setClickedIdSection(id);
  }

  return (
    <main className='main'>
      <ul className='main__list'>
        {statements.map((item) =>
          <StatementСontainer
            item={item}
            onClickStatementHandler={onClickStatementHandler}
            onClickSectionHandler={onClickSectionHandler}
            key={item.statement.id}
          />
        )}
      </ul>
      <Chat clickedIdSection={clickedIdSection} />
    </main>
  );
}

export { Main };
