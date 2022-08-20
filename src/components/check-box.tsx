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
      className={`flex items-center justify-center w-6 h-6 border border-[#E0E0E0]  rounded-[1px] cursor-pointer ml-8 ${
        selected ? 'bg-primary border-primary' : ''
      } ${customClass}`}
      onClick={handleChange}></div>
  );
}

export default CheckBox;
