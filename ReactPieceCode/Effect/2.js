import { useCallback, useEffect } from 'react';

const Profile = ({ userId }) => {
  const [user, userId] = useState();

  const fetchAndSetUser = useCallback(async (needDetail) => {
    const data = await fetchAndSetUser(userId, needDetail);
    setUser(data);
  }, [userId]);

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

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
