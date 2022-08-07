import 'react-toggle/style.css';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import Toggle from 'react-toggle';

import { fetchPlans, togglePlan } from '../../api';
import { EditPlanModal, Table } from '../../components';
import { queryClient } from '../../config';
import { toast } from 'react-toastify';

const PlansTable = () => {
  const { isLoading, data } = useQuery(['plans'], fetchPlans);
  const formattedData = data?.plans?.map((plan: any) => ({
    ...plan,
    amount: `${plan?.market?.quote_unit.toUpperCase()} ${plan?.amount}`,
    toggle: (
      <Toggle
        key={plan?._id}
        defaultChecked={plan?.isActive}
        onChange={async () => await mutateAsync({ id: plan._id, isActive: !plan.isActive })}
      />
    ),
  }));

  const [selectedRow, setSelectedRow] = useState(null);
  type modalTypes = 'delete' | 'edit';
  const [modal, setModal] = useState<{ type: modalTypes; open: boolean }>({
    type: 'edit',
    open: false,
  });

  const { mutateAsync } = useMutation(togglePlan, {
    onSuccess(data) {
      toast.success(data?.message);

      queryClient.invalidateQueries(['plans']);
    },
    onError(error) {
      toast.error(error?.response?.data?.data?.message ?? 'An error occured.\n Please try again!');
    },
  });

  const handleRowClick = async (id: string, action: string) => {
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
