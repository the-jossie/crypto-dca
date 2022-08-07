import { useMutation } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { editPlan } from '../../api';
import { queryClient } from '../../config';

import { Button, Dropdown, Input, Modal } from '..';

interface PropTypes {
  onClose: Function;
  plan: any;
}
const EditPlanModal = ({ onClose = () => {}, plan }: PropTypes) => {
  const scheduleOptions = [
    { name: 'DAILY', value: 'DAILY' },
    { name: 'WEEKLY', value: 'WEEKLY' },
    { name: 'MONTHLY', value: 'MONTHLY' },
  ];

  const [form, setForm] = useState({
    id: plan._id,
    name: plan.name ?? '',
    schedule: plan.schedule || '',
  });
  const updateField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const { isLoading, mutateAsync } = useMutation(editPlan, {
    onSuccess() {
      toast.success('DCA Plan updated');
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
          <h3 className="font-semibold text-2xl text-dark mb-8">Edit DCA Plan</h3>
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input
              label="Plan Name"
              value={form.name}
              onChange={(value: string) => updateField('name', value)}
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
              <Button text="Edit" loading={isLoading} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export { EditPlanModal };
