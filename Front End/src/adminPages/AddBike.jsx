import React from 'react'
import Default from '../components/Default'
import {Row, Col, Form, Button, Input} from "antd"
import { useDispatch, useSelector } from 'react-redux'
import { addBike } from '../redux/action/bikesAction'
import Spinner from '../Spinner'


function AddBike() {
  const {loading} = useSelector(state =>state.alertsReducer)
  const dispatch  = useDispatch()
 

  function addForm(values){
    values.bookedTimeSlots = []
    dispatch(addBike(values))
    console.log(values)
  }
  return (
        <Default>
         {loading && (<Spinner />)}
          <Row justify="center">
            <Col lg={15} md={15} sm={15}>
            <Form layout='vertical' className='bs1 addForm p-5' onFinish={addForm}>
            <h1>Add Bike</h1>
            <hr />
            <br />
            <Form.Item name="name" label="Bike Name" >
              <Input placeholder="Bike Name" required/>
            </Form.Item>
            <Form.Item name="image" label="Image" >
              <Input placeholder="Image_url" required/>
            </Form.Item>
            <Form.Item name="capacity" label="Capacity" >
              <Input placeholder="Capacity" required/>
            </Form.Item>
            <Form.Item name="rentPerHour" label="Rent Per Hour" >
              <Input placeholder="Rent Per Hour" required/>
            </Form.Item>
            <Button type="primary" htmlType="submit" className='fbtn'>Add Bike</Button>
              
          </Form>
            </Col>
          </Row>
        </Default>
  )
}

export default AddBike