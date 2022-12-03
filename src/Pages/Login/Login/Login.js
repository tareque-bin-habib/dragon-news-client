import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';



const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    alert('Yor email is not varified')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }


    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;