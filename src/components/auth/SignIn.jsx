import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [emailRef, setEmailRef] = useState('')
    const [passwordRef, setPasswordRef] = useState('')

    const SignInHandler = async (event) => {
        event.preventDefault()

        if (emailRef === '' && passwordRef === '') {
            console.log('empty fields!!')
        }
        else {
            await signInWithEmailAndPassword(auth, emailRef, passwordRef)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });
        }
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={SignInHandler}>
                <h1>LogIn to your account</h1>
                <input type='email' placeholder='Email' id='email' onChange={(event) => setEmailRef(event.target.value)} />
                <input type='password' placeholder='Password' id='password' onChange={(event) => setPasswordRef(event.target.value)} />
                <button type='submit'>Log in</button>
                <p className="text-sm text-white text-center">
                    No account yet? {' '}
                    <NavLink to="/SignUp">
                        Sign up
                    </NavLink>
                </p>
            </form>
        </div>
    )
}

export default SignIn