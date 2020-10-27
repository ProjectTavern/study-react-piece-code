import 'react';

const App = () => {
  return (
    <div>
      <div>상단 메뉴</div>
      <Profile username="mike" />
      <div>하단 메뉴</div>
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

const Greeting = ({ username }) => <p>{`${username}님 안녕하세요!`}</p>

export default App;
