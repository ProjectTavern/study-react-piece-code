import { } from 'react';

const SelectFruit = ({ selectdFruit, onChange }) => {
  return (
    <div>
      <Select
        options={[
          { name: "apple", price: 500 },
          { name: "banana", price: 500 },
          { name: "orange", price: 500 },
        ]}
        selected={selectdFruit}
        onChange={onChange}
      />
    </div>
  )
}

export default SelectFruit;
