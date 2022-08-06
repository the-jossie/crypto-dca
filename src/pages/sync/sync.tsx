import { useState } from 'react';
import { Modal } from '../../components';
import { AuthenticateAccount } from './authenticate-account';
import { SyncAccount } from './sync-account';

const SyncPage = () => {
  const [stage, setStage] = useState<string>('SYNC_ACCOUNT');
  const CurrentStage = stages[stage];

  return (
    <Modal close={close} showCloseBtn={false}>
      <CurrentStage setStage={setStage} />
    </Modal>
  );
};

const stages = {
  SYNC_ACCOUNT: SyncAccount,
  AUTHENTICATE_ACCOUNT: AuthenticateAccount,
};

export { SyncPage };
