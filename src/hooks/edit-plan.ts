import { useMutation } from '@tanstack/react-query';

import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { editPlan } from '../api';
import { queryClient } from '../config';

const useEditPlan = (plan: any, onComplete: Function) => {
  const scheduleOptions = [
    { name: 'DAILY', value: 'DAILY' },
    { name: 'WEEKLY', value: 'WEEKLY' },
    { name: 'MONTHLY', value: 'MONTHLY' },
  ];

  const [form, setForm] = useState({
    id: plan._id,
    name: plan.name ?? '',
    schedule: plan.schedule || '',
    amount: plan.amount || '',
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
      onComplete();
    },
    onError(error) {
      toast.error(error?.response?.data?.data?.message ?? 'An error occured.\n Please try again!');
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await mutateAsync(form);
  };

  return {
    onSubmit,
    form,
    updateField,
    scheduleOptions,
    isLoading,
  };
};

export { useEditPlan };
