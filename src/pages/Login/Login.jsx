import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const handleToast = () => {
    toast('Logged in successfully');
  };
  const handleToastOne = () => {
    toast('Signed Out');
  };
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setRegisterError('');
    setSuccess('');

    createUserWithEmailAndPassword(auth, email, password);
    e.preventDefault()
      .then(result => {
        console.log(result.user);
        setSuccess('User Logger In Successfully');

        // updateProfile(result.user, {
        //   photoURL: 'https://example.com/jane-q-user/profile.jpg',
        // })
        //   .then(() => {
        //     console.log('Profile Updated');
        //   })
        //   .catch();
      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null);
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Ten Build - Login</title>
      </Helmet>
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
                <button onClick={handleToast} className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                New here? Please
                <Link className="text-green-600 ml-2" to="/register">
                  Register
                </Link>
              </p>

              {}

              {user ? (
                <button
                  onClick={(handleSignOut, handleToastOne)}
                  className="btn btn-secondary"
                >
                  Sign Out
                </button>
              ) : (
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-secondary w-full"
                  >
                    Sign in with Google
                  </button>
                  <button
                    onClick={handleGithubSignIn}
                    className="btn btn-secondary w-full mt-4"
                  >
                    Github Login
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
