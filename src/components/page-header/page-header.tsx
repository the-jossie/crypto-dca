import './page-header.scss';
import { useState } from 'react';

import { AddPlanModal, Button, Search } from '../../components';
import { AddIcon } from '../../components/vectors';

interface IProps {
  title: string;
  showSearch?: boolean;
  showBtn?: boolean;
}

const PageHeader = ({ showSearch = false, title, showBtn = false }: IProps) => {
  type modalTypes = 'add';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'add',
    open: false,
  });

  return (
    <>
      <div className="PageHeader">
        <h1>{title}</h1>

        <div className="actions">
          {showSearch && <Search placeholder="Search..." />}
          {showBtn && (
            <Button
              text="Create New Plan"
              iconPosition="left"
              onClick={() => setModal({ type: 'add', open: true })}>
              <AddIcon />
            </Button>
          )}
        </div>
      </div>

      {modal.type === 'add' && modal.open && (
        <AddPlanModal onClose={() => setModal({ ...modal, open: false })} />
      )}
    </>
  );
};
export { PageHeader };
