import { ReactElement } from 'react';

const Button = ({
  text,
  iconPosition,
  children,
  loading = false,
  size = 'normal',
  disabled = false,
  customClasses = '',
  type = 'submit',
  onClick = () => {},
  outline = false,
  variant = 'primary',
}: PropTypes) => {
  const computedClasses = [
    'rounded-md lg:rounded-lg disabled:bg-[#ccc] focus:outline-none flex items-center justify-center px-2 lg:px-6 space-x-[1.25rem] text-white bg-primary',
  ];
  if (size === 'large') {
    computedClasses.push('font-bold h-12 lg:h-16');
  } else if (size === 'small') {
    computedClasses.push('font-medium h-10');
  } else {
    computedClasses.push('font-medium h-10 md:h-10 lg:h-12 text-xs md:text-sm w-52');
  }
  if (disabled) computedClasses.push('cursor-not-allowed');
  if (outline) {
    if (variant === 'primary') {
      computedClasses.push('!bg-[#ffffff] border border-[#F6B319] text-[#F6B319]');
    }
    if (variant === 'secondary') {
      computedClasses.push(
        '!bg-[#ffffff] border border-[#181818] border-opacity-[24%] text-[#181818] text-opacity-[24%]'
      );
    }
  }
  computedClasses.push(customClasses);

  return (
    <button
      type={type}
      onClick={(e) => onClick(e)}
      disabled={disabled || loading}
      className={`${computedClasses.join(' ')}`}>
      {children && iconPosition === 'left' && <span className="mr-[0.1rem]">{children}</span>}
      {text}
      {children && iconPosition === 'right' && <span>{children}</span>}
      {children && !iconPosition && <span>{children}</span>}
    </button>
  );
};
interface PropTypes {
  text?: string;
  iconPosition?: 'left' | 'right';
  children?: ReactElement | string;
  loading?: boolean;
  disabled?: boolean;
  size?: 'normal' | 'small' | 'large';
  customClasses?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'] | Function;
  outline?: boolean;
  variant?: 'primary' | 'secondary';
}

export { Button };
