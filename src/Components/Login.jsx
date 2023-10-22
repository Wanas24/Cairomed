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
    <div className='loginPage justify-content-center align-items-center d-flex '>
      {/* 
      <div className="btmBorder mb-5"></div> */}
      <div className='container  '>
      <div className='row justify-content-center'>

      <div className=' col-sm-10'>


      <form className="form-control loginForm  " onSubmit={handleLogin}>
      <h2 className="text-center  mb-2">Login form</h2>
        <label htmlFor="">Email</label>
        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor=""className='mt-3'>Password</label>
        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p className="text-success">{successMsg}</p>
        <p className="text-danger">{errorMsg}</p>
        <button className="btn btn-success mt-3">Login</button>
      </form>
      </div>

      </div>
      </div>
    </div>
  );
};

export default Login;