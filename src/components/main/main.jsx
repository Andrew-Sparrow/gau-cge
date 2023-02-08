import React, { useState } from 'react';

import { statements } from '../../db/statements';
import { StatementСontainer } from '../statement-container/statement-container';
import { Chat } from '../chat/chat';
import './main.scss';
import { getStatementsWithIsOpenStatus } from './utils';


function Main(props) {
  const [clickedIdStatement, setClickedIdStatement] = useState(null);
  const [clickedIdSection, setClickedIdSection] = useState(null);

  function onClickStatementHandler(id) {
    setClickedIdStatement(id);
  }

  function onClickSectionHandler(id) {
    setClickedIdSection(id);
  }

  return (
    <main className='main'>
      <ul className='main__list'>
        {getStatementsWithIsOpenStatus(clickedIdStatement, statements).map((item) =>
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
