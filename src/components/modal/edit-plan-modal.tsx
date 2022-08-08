import PropTypes from 'prop-types';

import { useEditPlan } from '../../hooks/edit-plan';

import { Button, Dropdown, Input, Modal } from '..';

interface PropTypes {
  onClose: Function;
  plan: any;
}
const EditPlanModal = ({ onClose = () => {}, plan }: PropTypes) => {
  const { onSubmit, form, updateField, scheduleOptions, isLoading } = useEditPlan(plan, onClose);

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
