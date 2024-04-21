import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Userprofile = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <Helmet>
        <title>Ten Build - Profile Details</title>
      </Helmet>
      {user && (
        <div>
          <h2>User: {user.displayname}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
