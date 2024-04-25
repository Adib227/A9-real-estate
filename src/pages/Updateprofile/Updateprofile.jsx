import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';

const Updateprofile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Ten Build </title>
      </Helmet>
      {user && (
        <div className="p-4 lg:p-16 ">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center my-12">
            You can update you profile if you want.
          </h1>
          <div className="grid">
            <label className="mb-8 w-full input input-bordered border-stone-600 flex items-center gap-2">
              <h2>Name : </h2>
              <input type="text" placeholder="name" value="" />
            </label>
            <label className="mb-8 w-full input input-bordered border-stone-600 flex items-center gap-2">
              <h2>Email : </h2>
              <input type="text" placeholder="name" value="" />
            </label>
            <label className="mb-8 w-full input input-bordered border-stone-600 flex items-center gap-2">
              <h2>PhotoURL : </h2>
              <input type="text" placeholder="url" value="" />
            </label>
            <label>
              <input
                type="file"
                className="mb-8 file-input file-input-bordered file-input-primary w-full max-w-lg"
              />
            </label>
            <label>
              <button className="btn btn-info w-full">Save</button>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updateprofile;
