import React, { useContext } from 'react';

const UserContext = React.createContext();
const user = { name: "Mike", age: 23 };

const ParentComponent = () => {
  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  )
}

const ChildComponent = () => {
  const user = useContext(UserContext);
  // ...
  return (
    <div>
      <p>name is {user.name}</p>
      <p>age is {user.age}</p>
    </div>
  )
}

export default ParentComponent;
