import React, { useEffect } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBikes } from '../redux/action/bikesAction'
import { Button, Row, Col } from 'antd';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

function Home() {
  const {bikes} = useSelector(state =>state.bikesReducer)
  const {loading} = useSelector(state =>state.alertsReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllBikes())
  }, [])

  return (
    <Default>
          {loading == true && (<Spinner />)}
      <div className='home'>
      <Row justify="center" gutter={20} className='mt-5'>
        {bikes.map((bike,i)=>{
           return <Col lg={5} md={7} sm={10} xs={16} key={i}>
                      <div className='bike p-2 bs1'>
                        <img src={bike.image} className='bikeimg' />

                          <div className='bikeContent'>
                            <div className='align-items-center'> 
                                <b>{bike.name}</b>
                                <p><b>{bike.rentPerHour}</b> Rent Per Hour /-</p>
                            </div>
                            <div>
                              <button className='bt1 mt-3'>
                                <Link to={`/booking/${bike._id}`}>
                                  Book Now 
                                </Link>
                               </button>
                            </div>
                          </div>
                          
                      </div>

                      {/* <Card className='bike p-2 bs1' >
                          <Card.Img  src={bike.image} className='bikeimg'  />
                          <Card.Body className='bikeContent'>
                            <div>
                            <Card.Title>{bike.name}</Card.Title>
                            </div>
                            <Card.Text>
                            {bike.rentPerHour} Rent Per Hour /-
                            </Card.Text>
                            <Button variant="primary" className='bt1 mt-3'>Book Now</Button>
                          </Card.Body>
                        </Card> */}

                  </Col>
        })}
      </Row>
      </div>

    </Default>
  )
}

export default Home