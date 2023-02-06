import React from 'react';

import { statements } from '../../db/statements';
import { Statement } from '../statement/statement';
import './main.scss'

function Main(props) {
  return (
    <main className='main'>
      <ul>
        {statements.map(({statement}) =>
          <Statement
            key={statement.id}
            code={statement.number}
          />
        )}
      </ul>
    </main>
  );
}

export { Main };
