import './modal.scss';

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
      <div className="-mt-32 md:-mt-40 space-y-2">
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
          <div className="flex items-center justify-center mt-8 mb-4">
            Proudly powered by{' '}
            <a href="https://quidax.com" target="_blank" className="flex items-center">
              <img src="/images/quidax.webp" className="w-4 h-4 mx-1" /> quidax
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
