import { useState } from 'react';
import { StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButton, StyledForm } from './Register.styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";



const Register = () => {
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


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // The user has been registered and is signed in!
                alert("You were successfully registered and will be brought to the login page");
                window.location.href = '../login';
            })
            .catch((error) => {
                // Something went wrong. Inspect the error code and provide feedback as appropriate.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorCode} ${errorMessage}`);
            });
    }

    return (
        <>
            <StyledBackground>
                <StyledCard>
                    <StyledH1>Create an account</StyledH1>
                    <StyledP>By creating an account you can keep track of your trainings. </StyledP>
                    <StyledForm onSubmit={handleSubmit}>
                        <label>
                            <StyledInput type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
                        </label>
                        <br />
                        <StyledButton type="submit" value="Submit">Submit</StyledButton>
                    </StyledForm>
                </StyledCard>
            </StyledBackground>
        </>
    );
}

export default Register;