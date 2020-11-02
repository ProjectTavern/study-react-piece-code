import { useCallback, useState } from 'react';

const Parent = () => {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  const onChangeFruit = useCallback(fruit => {
    setSelectedFruit(fruit);
    sendLog({ type: "fruit changed", value: fruit });
  });

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit
        selected={selectedFruit}
        onChange={onChangeFruit}
      />
    </div>
  )
}

export default Parent;
