import { useMutation, useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { createPlan, fetchMarkets } from '../../api';
import { queryClient } from '../../config';

import { Button, Dropdown, Input, Modal } from '..';

interface PropTypes {
  onClose: Function;
}
const AddPlanModal = ({ onClose = () => {} }: PropTypes) => {
  const { data } = useQuery(['markets'], fetchMarkets);
  const marketOptions = data?.map((market: any) => ({
    value: market.name,
    name: market.name,
  }));

  const scheduleOptions = [
    { name: 'DAILY', value: 'DAILY' },
    { name: 'WEEKLY', value: 'WEEKLY' },
    { name: 'MONTHLY', value: 'MONTHLY' },
  ];

  const [form, setForm] = useState({
    name: '',
    market: '',
    amount: '',
    schedule: '',
  });
  const updateField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const { isLoading, mutateAsync } = useMutation(createPlan, {
    onSuccess(data) {
      toast.success(data?.msg);
      queryClient.invalidateQueries(['plans']);
      onClose();
    },
    onError(error) {
      toast.error(error?.response?.data?.data?.message ?? 'An error occured.\n Please try again!');
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await mutateAsync(form);
  };

  return (
    <Modal close={onClose}>
      <div className="mt-3">
        <div>
          <h3 className="font-semibold text-2xl text-dark mb-8">Create DCA Plan</h3>
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input
              label="Plan Name"
              value={form.name}
              onChange={(value: string) => updateField('name', value)}
            />
            <Dropdown
              label="Market"
              options={marketOptions}
              onChange={(value: string) => updateField('market', value)}
              value={form.market}
            />

            <Input
              label="Amount"
              value={form.amount}
              onChange={(value: string) => updateField('amount', value)}
            />

            <Dropdown
              options={scheduleOptions}
              label="Schedule"
              value={form.schedule}
              onChange={(value: string) => updateField('schedule', value)}
            />

            <div className="flex items-center justify-between pt-14 space-x-6">
              <Button
                text="Cancel"
                customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
                type="button"
                onClick={onClose}
              />
              <Button text="Create" loading={isLoading} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export { AddPlanModal };
