import React from 'react'
import {Row, Col, Form, Button, Input} from "antd"
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/action/userActions'


function Register() {

  const dispatch = useDispatch()

  function onFinish(values){
    dispatch(userRegister(values))
    console.log(values)
  }

  
  return (
    <div className='register'>
        
         <Row gutter={16}>
        <Col lg={14} md={14} className='imggif mt-5 p-4'>
          <img src='https://giffiles.alphacoders.com/174/17469.gif' />
        </Col>
        <Col lg={8} md={8} className='textLeft mt-4'>
          <Form layout='vertical' className='form p-5 mb-3'onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item name="username" label="User Name" >
              <Input placeholder="Username" required/>
            </Form.Item>

            <Form.Item name="email" label="Email">
              <Input placeholder="Enter email" required/>
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input.Password placeholder="Password" required/>
            </Form.Item>

            <Form.Item name="Confirm password" label="Confirm Password">
              <Input.Password placeholder="Confirm Password" required/>
            </Form.Item>

            <Button type="primary" htmlType="submit" className='fbtn'>Register</Button>
            <br />
            <br />
            <span>Already have an account?<Link to="/login" className='link'> Login</Link></span>
            </Form>
        </Col>
      </Row>
        
    </div>
  )
}

export default Register