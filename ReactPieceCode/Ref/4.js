import { useCallback, useState } from 'react';

const INITIAL_TEXT = 'Hello';

const Form = () => {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={event => setText(event.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>
        Show/Hide
      </button>
    </div>
  )
}

export default Form;
