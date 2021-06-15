import React from 'react';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Filter = ({func}) => {
  return (
    <div className='filter'>
      <SearchIcon />
      <InputBase
        className='inputBase'
        placeholder='Search...'
        inputProps={{ 'data-testid': 'Filter' }}
        onChange={func}
      />
    </div>
  )
}

export default Filter
