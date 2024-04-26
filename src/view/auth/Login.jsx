import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className="mt-5">
      <Row className='justify-content-center'>
        <Col md={4}>
      <Card>
        <CardBody>
          <h3 className="text-center mb-4">Sign in to your account</h3>
          <Form onSubmit={handleLogin}>
            <FormGroup className="mb-3">
              <Label for="email" className="mb-1">Email Address</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="password" className="mb-1">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Link to="#" className="mb-3 d-block text-decoration-none">Forgot your password?</Link>
            <Button type="submit" color="primary" className="w-100">Sign In</Button>
          </Form>
        </CardBody>
      </Card>

        </Col>
      </Row>
    </Container>
  );
}

export default Login;
