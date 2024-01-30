import React from 'react'
import { Button, Dropdown, Row, Col } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a className='a' href="/">
        Home
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a className='a' href="https://www.aliyun.com">
        Bookings
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a className='a' href="https://www.luohanacademy.com">
        Profile
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a className='a' onClick={() =>{
        localStorage.removeItem("user")
        window.location.href="/login"
      }}>
        Logout
      </a>
    ),
  }
];

function Default(props) {
  
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
        <div className='header bs1'>
          <Row gutter={16} justify="center">
            <Col lg={22} md={20} sm={20} xs={20}>
              <div className='d-flex justify-content-between'>
                  <h1>Bike Rental</h1>

                  <Dropdown menu={{items}}placement="bottom">
                    <Button className='mt-2' >
                   <i className="fa-solid fa-user"></i>
                    
                    </Button>
                  </Dropdown>
              </div>
            </Col>
          </Row>
            
        </div>

        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default Default