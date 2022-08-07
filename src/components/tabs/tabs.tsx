import './tabs.scss';

import PropTypes from 'prop-types';
import React from 'react';

interface PropTypes {
  activeTab?: string;
  setActiveTab?: Function;
  options?: string[];
}

const Tabs = ({ activeTab = '', setActiveTab = () => {}, options = [] }: PropTypes) => {
  return (
    <div className="Tabs">
      {options.map((option, index) => (
        <span
          key={`page_tab-${index}`}
          onClick={() => setActiveTab(option)}
          className={`pb-1 cursor-pointer ${
            activeTab === option
              ? 'font-medium text-primary border-b-primary border-b'
              : 'text-darkGrey'
          }`}>
          {option}
        </span>
      ))}
    </div>
  );
};
export { Tabs };
