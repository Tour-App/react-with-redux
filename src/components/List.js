import React from 'react';

function List({ elements }) {
  return (
    <ul>
      {elements.map((e) => <li key={e.id}>{e.name}</li>)}
    </ul>
  )
}

export default List;
