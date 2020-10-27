import React from 'react';

const UserContext = React.createContext('');

const App = () => {
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단 메뉴</div>
        <Profile username="mike" />
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </div>
  )
}

const Profile = ({ username }) => {
  return (
    <div>
      <Greeting username={username} />
    </div>
  )
}

const Greeting = ({ username }) => {
  return (
    <UserContext.Consumer>
      <p>{`${username}님 안녕하세요!`}</p>
    </UserContext.Consumer>
  )
}

export default App;
