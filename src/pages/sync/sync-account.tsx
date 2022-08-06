import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { sync } from '../../api';
import { Button, Input } from '../../components';

const SyncAccount = ({ setStage = () => {} }: PropTypes) => {
  const [secretKey, setSecretKey] = useState('');

  const { isError, isLoading, isSuccess, error, mutateAsync } = useMutation(sync, {
    cacheTime: Infinity,
    onSuccess() {
      toast.success('User account has been synced, check email for OTP.');
      setStage('AUTHENTICATE_ACCOUNT');
    },
    onError(error) {
      toast.error(error?.response?.data?.data?.message ?? 'Account sync failed');
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await mutateAsync({ secretKey });
  };

  return (
    <div className="mt-3">
      <div>
        <h3 className="font-semibold text-2xl text-dark mb-8">Sync Account</h3>
        <form className="space-y-6" onSubmit={onSubmit}>
          <Input
            label="Quidax Secret Key"
            value={secretKey}
            onChange={(value: string) => setSecretKey(value)}
          />
          <div className="flex items-center justify-center pt-14 space-x-6">
            <Button text="Sync" type="submit" loading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

interface PropTypes {
  setStage: Function;
}
export { SyncAccount };
