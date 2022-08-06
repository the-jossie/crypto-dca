import { FormEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import { authenticate } from '../../api';
import { Button, Input } from '../../components';
import { APP_NAME } from '../../config';
import { UserContext } from '../../contexts';
import { useSessionStorage } from '../../hooks/session';

const AuthenticateAccount = () => {
  const [, setToken] = useSessionStorage(APP_NAME);
  const { setUser } = useContext(UserContext);
  const [code, setCode] = useState('');

  const { isError, isLoading, isSuccess, error, mutateAsync } = useMutation(authenticate, {
    onSuccess(data) {
      const { message, user } = data.data;
      console.log(message, user);
      toast.success("Woah! It's you 🤑 \n" + message, {
        icon: false,
      });
      const { token } = user;
      setToken({ token, userData: user });
      if (user) {
        setUser(user);
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    onError(error) {
      toast.error(error?.response?.data?.data?.message ?? 'Account authentication failed');
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await mutateAsync({ code });
  };

  return (
    <div className="mt-3">
      <div>
        <h3 className="font-semibold text-2xl text-dark mb-8">Enter OTP</h3>
        <form className="space-y-6" onSubmit={onSubmit}>
          <Input label="OTP" value={code} onChange={(value: string) => setCode(value)} />
          <div className="flex items-center justify-center pt-14 space-x-6">
            <Button text="Done" type="submit" loading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export { AuthenticateAccount };
