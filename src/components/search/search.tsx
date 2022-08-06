import './search.scss';

import PropTypes from 'prop-types';
import React from 'react';

import { SearchIcon } from '../vectors';

interface PropTypes {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: Function;
  customClass?: string;
  focusState?: boolean;
  triggerSearch?: (search: string) => void;
}

function Search({
  placeholder,
  value,
  label,
  onChange = () => {},
  triggerSearch = () => {},
}: PropTypes) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    triggerSearch(value ?? '');
  };

  return (
    <>
      {label && <label className="mb-2 font-bold text-base op">{label}</label>}
      <form
        className={`SearchInput flex items-center  px-4 py-3 rounded text-sm font-normal bg-grey3 pr-12`}
        onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (e.target.value === '') triggerSearch(value ?? '');
            onChange(e.target.value);
          }}
          className="border-none outline-none focus:outline-none flex-grow w-full pl-2 md:w-max bg-transparent"
        />
      </form>
    </>
  );
}
export { Search };
