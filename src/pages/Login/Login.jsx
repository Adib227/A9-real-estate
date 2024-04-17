import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const Login = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setRegisterError('');
    setSuccess('');

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User Logger In Successfully');

        updateProfile(result.user, {
          displayName: name,
          photoURL: 'https://example.com/jane-q-user/profile.jpg',
        })
          .then(() => {
            console.log('Profile Updated');
          })
          .catch();
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-12 rounded-lg">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New here? Please
                <Link className="text-green-600 ml-2" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
