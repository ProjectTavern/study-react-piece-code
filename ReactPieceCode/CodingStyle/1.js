import 'react';
import { useEffect, useState } from 'react';

const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserAPI(userId).then(data => setUser(data));
  }, [userId]);

  return { user };
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return { width };
}

const Profile = ({ userId }) => {
  const { user } = useUser(userId);
  const { width } = useWindowWidth();

  console.log(user, width);
}

export default Profile;
