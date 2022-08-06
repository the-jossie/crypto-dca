import PropTypes from 'prop-types';
import { FormEvent, useState } from 'react';

import { Button, Input, Modal } from '..';
import { AttachmentIcon, TickIcon } from '../vectors';

interface PropTypes {
  close: Function;
  tableData: any;
  setTableData: Function;
}
const AddPlanModal = ({ close = () => {}, tableData = [], setTableData = () => {} }: PropTypes) => {
  const [form, setForm] = useState({
    siteName: '',
    admin: 'Buyer name',
    creation: '02/05/2021 5:29pm',
    _id: Math.random().toString(),
  });
  const updateField = (field: 'siteName', value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTableData([...tableData, form]);
    close();
  };
  return (
    <Modal close={close}>
      <div className="mt-3">
        <div>
          <h3 className="font-semibold text-2xl text-dark mb-8">Add New Site</h3>
          <form className="space-y-6" onSubmit={onSubmit}>
            <Input
              label="Site Name"
              value={form.siteName}
              onChange={(e: any) => updateField('siteName', e.target.value)}
            />
            <Input label="Description" />
            <div>
              <p className="text-dark text-opacity-[72%] mb-4">Upload your site logo</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AttachmentIcon />
                  <p className="text-dark text-opacity-[72%]">Required_File.png</p>
                </div>
                <TickIcon />
              </div>
            </div>
            <div className="flex items-center justify-between pt-14 space-x-6">
              <Button
                text="Cancel"
                size="small"
                customClasses="text-dark text-opacity-[52%] bg-grey2 border-none"
                onClick={close}
              />
              <Button text="Add New Site" size="small" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export { AddPlanModal };
