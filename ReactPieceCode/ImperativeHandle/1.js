import React, { forwardRef, useState, useImperativeHandle, useRef } from 'react';

const Profile = (props, ref) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length
  }));

  return (
    <div>
      <p>name is {name}</p>
      <p>age is {age}</p>
    </div>
  )
}

export default forwardRef(Profile);

const Parent = () => {
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      profileRef.current.addAge(5);
    }
  }

  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  )
}

export default Parent;
