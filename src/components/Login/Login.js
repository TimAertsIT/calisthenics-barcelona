import { StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButtonInput2 } from './Login.styles';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Login = ({ setIsAuthenticated }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyCzoqCWg6-4eqavpZvzAB_xJeYwQ3cKGMQ",
        authDomain: "calisthenics-barcelona.firebaseapp.com",
        projectId: "calisthenics-barcelona",
        storageBucket: "calisthenics-barcelona.appspot.com",
        messagingSenderId: "804554220033",
        appId: "1:804554220033:web:7e6cc4e2670c88c9ba9600",
        measurementId: "G-1G0DJ4K587"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // The user is signed in!
                console.log('login successful');
                setIsPasswordCorrect(true);
                setEmail('');
                setPassword('');
                setIsAuthenticated(true);
                alert("Your login was successful")
                window.location.href = '../';
            })
            .catch((error) => {
                // Something went wrong. Inspect the error code and provide feedback as appropriate.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found') {
                    window.location.href = '../register';
                } else {
                    alert(`Error: ${errorCode} ${errorMessage}`);
                    setIsPasswordCorrect(false);
                }
            });
    };


    return (
        <>
            <StyledBackground>
                <StyledCard>
                    <StyledH1>Enter your email</StyledH1>
                    <StyledP>Login to your account. If your email is not recognized, you will be asked to register first. </StyledP>
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <StyledInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <StyledButtonInput2 onClick={handleLogin}>Login</StyledButtonInput2>
                </StyledCard>
            </StyledBackground>
        </>
    );
};

export default Login;