import React from 'react';
import axios from 'axios'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit } = useForm()
    const navigate=useNavigate()
    const submit = data => {
        console.log(data)
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then((res) => { console.log(res.data.data.token) 
                localStorage.setItem("token",res.data.data.token)
                
            navigate("/")
            })
            .catch((error) => {
                if(error.response.status===404){
                    window.alert("Invalid credentials")
                }
                
            })
    }

    return (
        <div className='container w-100 ' >
            <div className='row mx-auto' style={{maxWidth: '25rem'}}>
                <div className='col-12 p-3 mt-4 mb-4 bgf'>
                    <h2>Welcome! Enter your email and password to continue</h2>
                    <div className='bg-light mt-2'>
                        <h4>Test Data</h4>
                        <p>mason@gmail.com</p>
                        <p>mason1234</p>
                    </div>
                <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password")} />
                </Form.Group>
               
                <Button variant="primary" type="submit" className='w-100'>
                    Submit
                </Button>
            </Form>
                </div>

            </div>


            
            


        </div>
    );
};

export default LogIn;