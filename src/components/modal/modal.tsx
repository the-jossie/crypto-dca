import { CloseIcon } from '../vectors';
import { ReactElement } from 'react';

interface PropTypes {
  close: Function;
  text?: string;
  children?: ReactElement;
  width?: string;
  showCloseBtn?: boolean;
}

const Modal = ({ close = () => {}, children, width, showCloseBtn = true }: PropTypes) => {
  return (
    <div className="Modal">
      <div className="-mt-60 space-y-2">
        {showCloseBtn && (
          <div onClick={() => close()} className="flex justify-end cursor-pointer">
            <CloseIcon />
          </div>
        )}
        <div
          className={`inner border shadow bg-white rounded z-50 w-96 ${
            width ? width : 'w-[25rem]'
          }`}>
          <div className="p-8">{children && children}</div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
