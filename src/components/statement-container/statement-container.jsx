import React from 'react';
import PropTypes from 'prop-types';


import { Statement } from '../statement/statement';
import { SectionsContainer } from '../sections-container/sections-container';


function StatementСontainer(props) {
  const {
    item,
    onClickStatementHandler,
    onClickSectionHandler
  } = props;

  if (item.isOpen) {
    return (
      <div className='main__sublist'>
        <Statement
          id={item.statement.id}
          code={item.statement.number}
          unreadCount={item.statement.unreadCount}
          onClickStatementHandler={onClickStatementHandler}
        />
        <SectionsContainer
          sectionsId={item.statement.sectionsId}
          onClickSectionHandler={onClickSectionHandler}
        />
      </div>
    )
  } else {
    return (
      <Statement
        id={item.statement.id}
        code={item.statement.number}
        unreadCount={item.statement.unreadCount}
        onClickStatementHandler={onClickStatementHandler}
      />
    )
  }
};

StatementСontainer.propTypes = {
  item: PropTypes.object,
  onClickStatementHandler: PropTypes.func,
  onClickSectionHandler: PropTypes.func
};

export { StatementСontainer };
