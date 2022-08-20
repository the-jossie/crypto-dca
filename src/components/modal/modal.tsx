import { CloseIcon } from '../../vectors';
import { ReactElement } from 'react';

const Modal = ({ close = () => {}, children, width, showCloseBtn = true }: PropTypes) => {
  return (
    <div className="fixed z-50 w-full h-full flex flex-col justify-center items-center inset-0 backdrop-blur-sm bg-dark bg-opacity-[52%]">
      <div className="-mt-10 space-y-2">
        {showCloseBtn && (
          <div onClick={() => close()} className="flex justify-end cursor-pointer">
            <CloseIcon />
          </div>
        )}
        <div
          className={`w-96 lg:w-[25rem] border shadow bg-white rounded z-50 ${
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
interface PropTypes {
  close: Function;
  text?: string;
  children?: ReactElement;
  width?: string;
  showCloseBtn?: boolean;
}

export { Modal };
