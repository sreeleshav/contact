import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='container-fluid p-5'>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <h1>My Contact</h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium veniam magni atque voluptates rerum pariatur laboriosam in vitae, ipsa, molestias quod officia provident porro iure tempore numquam? Nisi, dolores?</p>
            <div className='d-grid'>
              <Link to={'/update'} className='btn btn-success'>Go To Contacts</Link>
            </div>
            <div className='d-flex dlex-column justify-content-center'>
              <Link to={'/create'}><button className='btn'><i className="fa-solid fa-pen fa-lg" style={{ color: "#0860f7", }} /></button></Link>
              <Link to={'/delete'}><button className='btn'><i className="fa-solid fa-trash fa-lg" style={{color: "#f10914",}} /></button></Link>
              <Link to={'/read'}><button className='btn'><i className="fa-brands fa-readme fa-lg" style={{color: "#63E6BE",}} /></button></Link>
            </div>
          </Col>
          <Col>
            <img src="https://icons.veryicon.com/png/o/education-technology/ui-icon/contacts-77.png" className='img-fluid' alt="landing" />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Landing