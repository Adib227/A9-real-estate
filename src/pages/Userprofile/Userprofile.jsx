import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';

const Userprofile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-1 lg:p-16 my-8">
      <Helmet>
        <title>Ten Build - Profile Details</title>
      </Helmet>
      {user && (
        <div>
          <label className="input input-bordered border-stone-600 flex items-center gap-2">
            <h2>User: {user.displayName}</h2>
            <input type="text" className="grow" placeholder=" " />
          </label>
          <label className="input input-bordered border-stone-600  flex items-center gap-2 my-8">
            <p>Email: {user.email}</p>
            <input type="text" className="grow" placeholder="" />
          </label>
          <label className="input input-bordered border-stone-600  flex items-center gap-2 my-8">
            <p>PhotoURL : {user.photoURL}</p>
            <input type="text" className="grow" placeholder="" />
          </label>
          <label className="input input-bordered border-stone-600  flex items-center gap-2">
            <p>UID: {user.uid}</p>
            <input type="text" className="grow" placeholder="" />
            {/* <span className="badge badge-info">Optional</span> */}
          </label>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
