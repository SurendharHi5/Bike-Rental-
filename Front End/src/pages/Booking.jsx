import React, { useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/action/bikesAction'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'antd'

function Booking() {
  const { id } = useParams();
  const {bikes} = useSelector(state =>state.bikesReducer)
  const {loading} = useSelector(state =>state.alertsReducer)
  const [bike, setBike] = useState({})
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllBikes())
    if(bikes.length > 0){
      setBike(bikes.find(b =>b._id == id))
    }
  }, [bikes])

  return (
    <Default>
      <Row>
        <Col lg={10}></Col>
      </Row>
      
    </Default>
  )
}

export default Booking