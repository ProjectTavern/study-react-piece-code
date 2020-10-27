import React, { useState } from 'react';

const UserContext = React.createContext({ username: "", helloCount: 0 });
const SetUserContext = React.createContext(() => { });

const App = () => {
  const [user, setUser] = useState({ username: "Mike", helloCount: 0 });

  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <Greeting />
    </div>
  )
}

const Greeting = () => {
  return (
    <SetUserContext.Consumer>
      {setUser => (
        <ThemeContext.Consumer>
          {theme => (
            <UserContext.Consumer>
              {({ username, helloCount }) => (
                <React.Fragment>
                  <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>
                    {username}님 안녕하세요
                  </p>
                  <p>인사 횟수: {helloCount}회</p>
                  <button onClick={() => setUser({ username, helloCount: helloCount + 1 })}>
                    인사하기
                  </button>
                </React.Fragment>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
      )}
    </SetUserContext.Consumer>
  )
}

export default App;
