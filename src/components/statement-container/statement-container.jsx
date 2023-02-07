import React from 'react';

import { Statement } from '../statement/statement';
import { SectionsContainer } from '../sections-container/sections-container';


function StatementСontainer(props) {
  const {
    item,
    onClickHandler
  } = props;

  if (item.isOpen) {
    return (
      <div className='main__sublist'>
        <Statement
          id={item.statement.id}
          code={item.statement.number}
          unreadCount={item.statement.unreadCount}
          onClickHandler={onClickHandler}
        />
        <SectionsContainer sectionsId={item.statement.sectionsId} />
      </div>
    )
  } else {
    return (
      <Statement
        id={item.statement.id}
        code={item.statement.number}
        unreadCount={item.statement.unreadCount}
        onClickHandler={onClickHandler}
      />
    )
  }
}

export { StatementСontainer };