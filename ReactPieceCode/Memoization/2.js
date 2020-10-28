import React, { useCallback, useState } from 'react';
import { saveToServer } from './api';
import UserEdit from './UserEdit';

const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const onSave = useCallback(() => saveToServer(name, age), [name, age]);

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <UserEdit
        onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
    </div>
  )
}

export default Profile;
