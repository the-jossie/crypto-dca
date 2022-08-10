import './page-header.scss';
import { useState } from 'react';

import { AddPlanModal, Button, Search } from '../../components';
import { AddIcon } from '../../components/vectors';

interface IProps {
  handleSearch?: Function;
  showSearch?: boolean;
  showBtn?: boolean;
  title: string;
}

const PageHeader = ({
  handleSearch = () => {},
  showSearch = false,
  title,
  showBtn = false,
}: IProps) => {
  type modalTypes = 'add';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'add',
    open: false,
  });

  const [search, setSearch] = useState<string>('');

  const triggerSearch = (value = search) => {
    handleSearch(value);
  };

  return (
    <>
      <div className="PageHeader">
        <h1>{title}</h1>

        <div className="actions">
          {showSearch && (
            <Search
              value={search}
              onChange={(value: string) => {
                setSearch(value);
                triggerSearch(value);
              }}
              triggerSearch={triggerSearch}
              placeholder="Search..."
            />
          )}
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
