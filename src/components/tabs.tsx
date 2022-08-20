import PropTypes from 'prop-types';

const Tabs = ({ activeTab = '', setActiveTab = () => {}, options = [] }: PropTypes) => {
  return (
    <div className="flex items-center space-x-4 border-b mb-4">
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
interface PropTypes {
  activeTab?: string;
  setActiveTab?: Function;
  options?: string[];
}

export { Tabs };
