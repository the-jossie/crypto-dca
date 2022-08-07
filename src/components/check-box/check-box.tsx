import './check-box.scss';

import { useState } from 'react';

function CheckBox({
  value = false,
  onChange = () => {},
  customClass,
}: {
  value?: boolean;
  onChange?: Function;
  customClass?: string;
}) {
  const [selected, setSelected] = useState(value);

  const handleChange = () => {
    setSelected(!selected);
    onChange(selected);
  };

  return (
    <div
      className={`Checkbox ${selected ? 'active' : ''} ${customClass}`}
      onClick={handleChange}></div>
  );
}

export default CheckBox;
