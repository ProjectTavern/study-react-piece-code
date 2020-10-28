import { useEffect } from 'react';

const Profile = ({ userId }) => {
  const [user, userId] = useState();

  useEffect(() => {
    const fetchAndSetUser = async (needDetail) => {
      const data = await fetchAndSetUser(userId, needDetail);
      setUser(data);
    }

    fetchAndSetUser(false);
  }, [userId]);

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.cash}</p>
      <p>{user.createdAt}</p>
      <button onClick={() => fetchAndSetUser(true)}>More</button>
      <UserDetail user={user} />
    </div>
  )
}

export default Profile;
