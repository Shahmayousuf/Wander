import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
const SignUPform = () => {
  return (
    <div className='form'>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fontstyle'>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fontstyle'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SignUPform
