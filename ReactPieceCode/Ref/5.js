import { useRef, useState } from 'react';

const Form = () => {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        Show/Hide
      </button>
      <button onClick={() => inputRef.current && inputRef.current.focus()}>Focus to text</button>
    </div>
  )
}

export default Form;
