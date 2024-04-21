import React, { useState } from 'react';

const Updateprofile = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <Helmet>
        <title>Ten Build </title>
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

export default Updateprofile;
