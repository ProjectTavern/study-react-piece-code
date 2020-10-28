import { useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onClick = () => {
      setCount(count + 1);
    }

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, [count]);

  return <div>{count}</div>
}

export default MyComponent;
