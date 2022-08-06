import PropTypes from 'prop-types';
import { useState } from 'react';

import { AddPlanModal, Button, Search } from '../../components';
import { AddIcon } from '../../components/vectors';

interface PropTypes {
  setTableData: Function;
  tableData: any;
}
const PageHeader = ({ setTableData = () => {}, tableData = [] }: PropTypes) => {
  type modalTypes = 'add';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'add',
    open: false,
  });
  return (
    <>
      <div className="PageHeader">
        <h1>My Plans</h1>

        <div className="actions">
          <Search placeholder="Search for a site..." />
          <Button
            text="Add New Site"
            iconPosition="left"
            onClick={() => setModal({ type: 'add', open: true })}>
            <AddIcon />
          </Button>
        </div>
      </div>

      {modal.type === 'add' && modal.open && (
        <AddPlanModal
          {...{ tableData }}
          {...{ setTableData }}
          close={() => setModal({ ...modal, open: false })}
        />
      )}
    </>
  );
};
export { PageHeader };
