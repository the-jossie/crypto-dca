import { ChangeEventHandler, ReactElement, useState } from 'react';

interface PropTypes {
  type?: 'text' | 'email' | 'password' | 'date';
  label?: string;
  value?: string | number;
  placeholder?: string;
  children?: ReactElement;
  childrenPosition?: 'left' | 'right';
  onChange?: Function;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  additionalInfo?: string;
  customClass?: string;
  autoCorrect?: boolean;
  full?: boolean;
  onMouseLeave?: Function;
  onBlur?: any;
  showVisisbilityIcon?: boolean;
  maxLength?: number | string;
}

const Input = ({
  type = 'text',
  label = 'Label',
  value,
  error = '',
  placeholder = '',
  onChange = () => {},
  onMouseLeave = () => {},
  required = true,
  disabled = false,
  additionalInfo = '',
  children,
  childrenPosition,
  full = true,
  customClass = '',
  maxLength,
  showVisisbilityIcon = true,
  onBlur = () => {},
}: PropTypes) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`grid ${disabled && 'opacity-60'} w-full md:w-auto ${
        full && 'w-full'
      } ${customClass}`}>
      <label className="mb-2 text-sm lg:text-base font-medium text-dark text-opacity-[72%]">
        {label}
      </label>
      {!children && (
        <>
          <div className="relative border-[#DDE2E5] border mt-auto">
            <input
              type={type === 'date' ? type : type === 'password' && visible ? 'text' : type}
              required={required}
              placeholder={placeholder}
              onChange={(e: any) => onChange(e.target.value)}
              onMouseLeave={(e: any) => onMouseLeave(e)}
              onBlur={onBlur}
              value={value}
              className={`${
                full ? 'w-full' : 'max-w-full lg:w-[18.5rem]'
              } outline-none h-10 lg:h-12 flex items-center pl-4 border rounded text-base font-normal ${
                error
                  ? 'border-red-400 focus:border-red-400 text-red-400 '
                  : ' border-[#DDE2E5] focus:border-[#138EFF]'
              } ${disabled && 'bg-opacity-60'} `}
              disabled={disabled}
              maxLength={Number(maxLength) || 524288}
            />
          </div>
          {(additionalInfo || error) && (
            <span
              className={`mt-2 text-xs ${additionalInfo && 'text-[#138EFF]'} ${
                error && 'text-[#EB0000]'
              } font-normal`}>
              {additionalInfo || error}
            </span>
          )}
        </>
      )}
      {children && (
        <>
          <div className="flex items-center border mw-[18.5rem] h-12 pl-4 rounded text-base font-normal pr-[1.15rem] relative">
            {childrenPosition === 'left' && children}
            <input
              type={type === 'password' && visible ? 'text' : type}
              required={required}
              placeholder={placeholder}
              value={value}
              className="flex-grow border-none outline-none focus:outline-none"
            />
            {childrenPosition === 'right' && children}
          </div>
          {(additionalInfo || error) && (
            <span
              className={`mt-2 text-xs ${additionalInfo && 'text-[#138EFF]'} ${
                error && 'text-[#EB0000]'
              } font-normal`}>
              {additionalInfo || error}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export { Input };
