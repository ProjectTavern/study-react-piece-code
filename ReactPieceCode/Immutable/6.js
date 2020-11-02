import { useState } from 'react';

const SelectFruit = ({ selectdFruit, onChange }) => {
  const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <div>
      <Select
        options={FRUITS}
        selected={selectdFruit}
        onChange={onChange}
      />
    </div>
  )
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 500 },
  { name: "orange", price: 500 },
];

export default SelectFruit;
