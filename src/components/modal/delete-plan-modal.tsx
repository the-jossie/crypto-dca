import PropTypes from 'prop-types';
import React from 'react';

import { Button, Modal } from '..';
import { BinIcon } from '../vectors';

interface PropTypes {
  site: any;
  close: Function;
  onClick: Function;
}
const DeletePlanModal = ({ close = () => {}, onClick = () => {}, site }: PropTypes) => {
  return (
    <Modal width="w-96" close={close} showCloseBtn={false}>
      <div>
        <div className="flex items-start space-x-6">
          <div className="flex items-center justify-center p-5 bg-red-500 bg-opacity-30 rounded-full">
            <BinIcon />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-dark">Delete Site</h3>
            <p className="text-dark text-opacity-[72%]">
              Are you sure you want to delete this site? Once deleted, you cannot undo this action.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end mt-14 space-x-6">
          <Button
            text="Cancel"
            size="small"
            customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
            onClick={close}
          />
          <Button
            text="Delete Site"
            size="small"
            customClasses="bg-danger"
            onClick={(e) => onClick(site._id)}
          />
        </div>
      </div>
    </Modal>
  );
};
export { DeletePlanModal };
