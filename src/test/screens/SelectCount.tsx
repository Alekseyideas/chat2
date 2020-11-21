import React from 'react';
import { Button } from '../components/ui';

const options = [
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '200', label: 'усі 200' },
];

interface SelectCountProps {
  onSubmit: (val: number) => void;
}

export const SelectCount: React.FC<SelectCountProps> = ({ onSubmit }) => {
  const [selected, setSelected] = React.useState<typeof options[0]>(options[0]);
  return (
    <div className='tda__selectCountScreen'>
      <p>Оберіть кількість запитань у тесті :</p>
      {/* <Select
        className='tda__select'
        options={options}
        defaultValue={options[0]}
        style={{ width: '300px' }}
        onChange={(label) => setSelected(label as typeof options[0])}
      /> */}
      <div className='tda__mt-2'>
        <Button onClick={() => onSubmit(+selected.value)} title='Почати' />
      </div>
    </div>
  );
};
