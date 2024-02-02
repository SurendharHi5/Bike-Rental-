import React, { useEffect } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBookings } from "../redux/action/bookingAction"
import { Col, Row } from 'antd'


function MyBookings() {

  const dispatch = useDispatch()
  const {bookings} = useSelector(state =>state.bookingsReducer)

  useEffect(()=>{
    dispatch(getAllBookings())
  },[])

  return (
    <Default>
        <h2 className='text-center mt-3'>My Bookings</h2>
        <Row justify="center">
          <Col lg={20} md={20} sm={22}>
            <Row>
              {bookings.map((booking) =>{
                return <Row>
                  <Col lg={7} md={7} sm={7}>
                    <b>Bike Name :{booking.car}</b>
                  </Col>
                  <Col lg={10} md={10} sm={10}>
                    
                  </Col>
                  <Col lg={7} md={7} sm={7}>
                    
                  </Col>
                </Row>
              })}
            </Row>
          </Col>
        </Row>
    </Default>
  )
}

export default MyBookings