import './Dropdown.scss';
import { generateId } from '../../utils';

const Dropdown = ({
  label = '',
  placeholder = 'Select',
  value,
  required = true,
  onChange = () => {},
  options = [],
  disabled = false,
  selectedOption,
}: PropTypes) => {
  const id = generateId();

  return (
    <div className="space-y-2 flex flex-col flex-grow  text-gray-600">
      {label && (
        <label htmlFor={id} className="text-sm lg:text-base font-medium">
          {label}
        </label>
      )}
      <div className="border-[#DDE2E5] border text-sm md:text-base px-3 bg-white">
        <select
          value={value}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 lg:h-12 border-none focus:outline-none w-full md:auto bg-white rounded-full"
          required={required}>
          <option value="" disabled>
            {placeholder || 'Select'}
          </option>
          {options.map((option: string | { name: string; value: string }, optionIndex: number) => (
            <option
              key={`${id}-option_${optionIndex}`}
              value={typeof option === 'string' ? option : option.value}>
              {typeof option === 'string' ? option : option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
interface PropTypes {
  label?: string;
  value: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  options?: string[] | { name: string; value: string }[];
  disabled?: boolean;
  selectedOption?: string;
}

export { Dropdown };
