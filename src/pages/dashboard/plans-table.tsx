import 'react-toggle/style.css';

import { EditPlanModal, Table } from '../../components';

import { usePlans } from '../../hooks/plans';
import { TransactionsTable } from './transactions-table';
import { capitalize } from '../../utils';

const PlansTable = ({ setShowTabs = () => {} }: { setShowTabs: Function }) => {
  const {
    isLoading,
    plans,
    handleRowClick,
    modal,
    setModal,
    selectedRow,
    showTransactions,
    setShowTransactions,
    handleSearch,
  } = usePlans({ setShowTabs });

  return (
    <>
      {showTransactions ? (
        <>
          <h1 className="font-medium text-xl mb-10">
            <span
              className="cursor-pointer text-primary font-bold text-2xl"
              onClick={() => {
                setShowTabs(true);
                setShowTransactions(false);
              }}>
              Plans
            </span>{' '}
            / <span className="text-xl">{capitalize(selectedRow?.name)}</span> /{' '}
            <span className="text-lg">Transactions</span>
          </h1>
          <TransactionsTable id={selectedRow?._id} />
        </>
      ) : (
        <>
          <Table
            name="plans"
            isLoading={isLoading}
            tableData={plans ?? []}
            clickRowAction={handleRowClick}
            rowActions={[
              {
                key: 'view',
                element: (
                  <button
                    type="button"
                    className="bg-[#ffffff] border border-dark  border-opacity-[50%] text-dark text-opacity-[50%] py-2 px-6 rounded">
                    View
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
          />
        </>
      )}
      {modal.type === 'edit' && modal.open && (
        <EditPlanModal onClose={() => setModal({ ...modal, open: false })} plan={selectedRow} />
      )}
    </>
  );
};

export { PlansTable };
