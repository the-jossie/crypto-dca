import { useState } from 'react';

import { AddPlanModal, Button, Search } from './';
import { AddIcon } from '../vectors';

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
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center justify-between mb-8">
        <h1 className="text-[32px] text-dark font-medium">{title}</h1>

        <div className="flex items-center space-x-4 lg:space-x-[3.25rem]">
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
interface IProps {
  handleSearch?: Function;
  showSearch?: boolean;
  showBtn?: boolean;
  title: string;
}

export { PageHeader };
