const { useEffect } = require("react");

const TextInput = ({ inputRef }) => {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>Save</button>
    </div>
  )
}

const Form = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}

export default Form;
