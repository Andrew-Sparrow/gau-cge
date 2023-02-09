import React, { useEffect, useState } from 'react';

import { StatementСontainer } from '../statement-container/statement-container';
import { Chat } from '../chat/chat';
import './main.scss';
import { getStatementsWithIsOpenStatus } from './utils';


function Main(props) {
  const [clickedIdStatement, setClickedIdStatement] = useState({id: null});
  const [clickedIdSection, setClickedIdSection] = useState(null);

  function onClickStatementHandler(id) {
    const clickedId = {id}
    setClickedIdStatement(clickedId);

  }

  function onClickSectionHandler(id) {
    setClickedIdSection(id);
  }

  // useEffect(() => {
  //   getStatementsWithIsOpenStatus(clickedIdStatement.id);
  // })

  return (
    <main className='main'>
      <ul className='main__list'>
        {getStatementsWithIsOpenStatus(clickedIdStatement.id).map((item) =>
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
