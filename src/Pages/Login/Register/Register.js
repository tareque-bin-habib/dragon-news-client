import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Register = () => {
    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, url, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setError('');
                handleupdateuserProfile(name, url)
                handleEmailvarification();
                alert('Please varify your email')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleEmailvarification = () => {
        varifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleupdateuserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="photo URL" name='photo' />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms And Condition</Link> </>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;