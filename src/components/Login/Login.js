import { StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButtonInput2 } from './Login.styles';
import { useState } from 'react';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailKnown, setIsEmailKnown] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCheckEmail = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            const user = users.find((user) => user.email === email);
            if (user) {
                setIsEmailKnown(true);
            } else {
                window.location.href = '../register';
            }
        } else {
            window.location.href = '../register';
        }
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find((user) => user.email === email);
        if (user && user.password === password) {
            console.log('login successful');
            setIsPasswordCorrect(true);
            setEmail('');
            setPassword('');
            setIsAuthenticated(true);
            alert("Your login was successful")
            localStorage.setItem("loggedInEmail", email);
            window.location.href = '../';
        } else {
            alert('Wrong password, please try again');
            setIsPasswordCorrect(false);
        }
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
                    <StyledButtonInput2 onClick={handleCheckEmail}>Check Email</StyledButtonInput2>
                    {isEmailKnown && (
                        <>
                            <StyledInput
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <StyledButtonInput2 onClick={handleLogin}>Login</StyledButtonInput2>
                        </>
                    )} </StyledCard>
            </StyledBackground>
        </>
    );
};

export default Login;