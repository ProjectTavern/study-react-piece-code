const { useState, useDebugValue } = require("react")

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);
  useDebugValue(value ? 'on' : 'off');

  return [value, onToggle];
}

export default useToggle;
