import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPlans } from '../../api';
import { DeletePlanModal, EditPlanModal, Table } from '../../components';

const PlansTable = () => {
  const { isLoading, data } = useQuery(['plans'], fetchPlans);
  const formattedData = data?.plans?.map((plan: any) => ({
    ...plan,
    amount: `${plan?.market?.quote_unit.toUpperCase()} ${plan?.amount}`,
  }));

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedSites, setSelectedSites] = useState<any[]>([]);
  type modalTypes = 'delete' | 'edit';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'edit',
    open: false,
  });
  const handleRowClick = (id: string, action: string) => {
    const selected = data?.plans?.find((data: any) => data._id === id);
    setSelectedRow(selected);
    if (action === 'delete') {
      setModal({ type: 'delete', open: true });
    }
    if (action === 'edit') {
      setModal({ type: 'edit', open: true });
    }
  };

  const handleDelete = (id: string) => {
    setModal({ ...modal, open: false });
  };
  return (
    <>
      <Table
        name="plans"
        isLoading={isLoading}
        tableData={formattedData ?? []}
        clickRowAction={handleRowClick}
        rowActions={[
          {
            key: 'delete',
            element: (
              <button
                type="button"
                className="bg-[#ffffff] border border-dark border-opacity-[24%] text-dark text-opacity-[24%] py-2 px-6 rounded">
                Delete
              </button>
            ),
          },
          {
            key: 'edit',
            element: (
              <button
                type="button"
                className="bg-[#ffffff] border border-primary text-primary py-2 px-6 rounded">
                Edit
              </button>
            ),
          },
        ]}
        id="My-Plans"
        selected={selectedSites}
        onSelect={(selectedIds: any) => setSelectedSites(selectedIds)}
      />
      {modal.type === 'delete' && modal.open && (
        <DeletePlanModal
          site={selectedRow}
          close={() => setModal({ ...modal, open: false })}
          onClick={(id: string) => handleDelete(id)}
        />
      )}
      {modal.type === 'edit' && modal.open && (
        <EditPlanModal
          site={selectedRow}
          close={() => setModal({ ...modal, open: false })}
          tableData={[]}
        />
      )}
    </>
  );
};

export { PlansTable };
