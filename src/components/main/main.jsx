import React, { useState } from 'react';

import { StatementСontainer } from '../statement-container/statement-container';
import { Chat } from '../chat/chat';
import './main.scss';
import {
  modifiedStatementsWithIsOpenStatus,
  changeStatementsIsOpenStatus,
  changeUnreadCountStatements,
  findOpenStatementId,
  changeUnreadCountSections
} from './utils';


function Main(props) {
  const [statements, setStatements] = useState(modifiedStatementsWithIsOpenStatus())
  const [clickedSectionId, setClickedSectionId] = useState(null);

  function onClickStatementHandler(id) {
    setStatements(changeStatementsIsOpenStatus(id));
    setClickedSectionId(null); // close messages
  }

  function onClickSectionHandler(sectionId) {
    const openStatementId = findOpenStatementId();
    setClickedSectionId(sectionId);
    setStatements(changeUnreadCountStatements(openStatementId, sectionId));
    changeUnreadCountSections(sectionId);
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
      {clickedSectionId &&
        <Chat clickedIdSection={clickedSectionId} />
      }
    </main>
  );
}

export { Main };
