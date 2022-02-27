import React, { useState, useEffect } from 'react';
import { Search, CustomSelect, ControlWrapper } from './index';

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);

  return (
    <ControlWrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </ControlWrapper>
  );
};

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];
