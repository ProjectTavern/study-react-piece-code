import React from 'react';

const TextInput = React.forwardRef((props, ref) =>
  (<div>
    <input type="text" ref={ref} />
    <button>Save</button>
  </div>)
)

const Form = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}

export default Form;
