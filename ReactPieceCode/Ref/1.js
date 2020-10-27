import { useEffect, useRef } from 'react';

const TextInput = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>Save</button>
    </div>
  )
}

export default TextInput;
