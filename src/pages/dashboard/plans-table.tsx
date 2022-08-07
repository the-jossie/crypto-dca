import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPlans } from '../../api';
import { EditPlanModal, Table } from '../../components';

const PlansTable = () => {
  const { isLoading, data } = useQuery(['plans'], fetchPlans);
  const formattedData = data?.plans?.map((plan: any) => ({
    ...plan,
    amount: `${plan?.market?.quote_unit.toUpperCase()} ${plan?.amount}`,
  }));

  const [selectedRow, setSelectedRow] = useState(null);
  type modalTypes = 'delete' | 'edit';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'edit',
    open: false,
  });
  const handleRowClick = (id: string, action: string) => {
    const selected = data?.plans?.find((data: any) => data._id === id);
    setSelectedRow(selected);

    if (action === 'edit') {
      setModal({ type: 'edit', open: true });
    }
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
      />
      {modal.type === 'edit' && modal.open && (
        <EditPlanModal onClose={() => setModal({ ...modal, open: false })} plan={selectedRow} />
      )}
    </>
  );
};

export { PlansTable };
