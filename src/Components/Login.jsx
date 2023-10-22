import { useState } from 'react';
import { auth } from '../Config/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSuccessMsg('Logged in successfully');
        navigate('/Admin'); // Navigate after successful login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorMsg(errorMessage);
      });
  }

  return (
    <>
      <h2 className="text-center mt-7">Login form</h2>
      <div className="btmBorder mb-5"></div>
      <form className="form-control container mt-3" onSubmit={handleLogin}>
        <label htmlFor="">Email</label>
        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="">Password</label>
        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p className="text-success">{successMsg}</p>
        <p className="text-danger">{errorMsg}</p>
        <button className="btn btn-success mt-3">Login</button>
      </form>
    </>
  );
};

export default Login;