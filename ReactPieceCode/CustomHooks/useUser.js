import { useState, useEffect } from 'react';

let getUserAPI;

const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserAPI(userId).then(data => setUser(data));
  }, [userId]);

  return user;
}

export default useUser;