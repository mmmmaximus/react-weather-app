import React from 'react';

const Filter = ({func}) => {
  return (
    <div>
      find countries <input data-testid='Filter' onChange={func}/>
    </div>
  )
}

export default Filter
