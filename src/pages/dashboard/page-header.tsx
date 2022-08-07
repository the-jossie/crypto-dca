import { useState } from 'react';

import { AddPlanModal, Button, Search } from '../../components';
import { AddIcon } from '../../components/vectors';

const PageHeader = () => {
  type modalTypes = 'add';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'add',
    open: false,
  });

  return (
    <>
      <div className="PageHeader">
        <h1>My DCA </h1>

        <div className="actions">
          <Search placeholder="Search..." />
          <Button
            text="Create New Plan"
            iconPosition="left"
            onClick={() => setModal({ type: 'add', open: true })}>
            <AddIcon />
          </Button>
        </div>
      </div>

      {modal.type === 'add' && modal.open && (
        <AddPlanModal onClose={() => setModal({ ...modal, open: false })} />
      )}
    </>
  );
};
export { PageHeader };
