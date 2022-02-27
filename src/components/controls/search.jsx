import { IoSearch } from 'react-icons/io5';
import { InputContainer, Input } from '../index';

import React from 'react';

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
