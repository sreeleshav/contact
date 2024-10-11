import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContactApi, deleteContactApi, updateContactApi } from '../services/allApi';
import { Modal, Form, Button, Card } from 'react-bootstrap';

function Update() {
  const [data, setData] = useState([]);
  const [del, setDel] = useState({});
  const [show, setShow] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    getData();
  }, [del]);

  const getData = async () => {
    const result = await getContactApi();
    if (result.status === 200) {
      setData(result.data);
    }
  };

  const deletecont = async (id) => {
    const result = await deleteContactApi(id);
    if (result.status === 200) {
      setDel(result);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = (contact) => {
    setCurrentContact(contact);
    setShow(true);
  };

  const handleUpdateContact = async () => {
    const result = await updateContactApi(currentContact.id, currentContact);
    if (result.status === 200) {
      getData();
      console.log("Contact Updated Successfully:", result.data);
      handleClose();
    }
  };

  const handleChange = (e) => {
    setCurrentContact({ ...currentContact, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='container-fluid mt-2 p-3' style={{ height: '100vh', width: 'auto' }}>
        <div className="col mt-3 mb-5">
          <h2>My Contacts</h2>
        </div>
        {data.length > 0 ? (
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {data.map(item => (
              <div key={item.id}>
                <Card className='bg-light'>
                  <Card.Img
                    variant="top img"
                    src={item.photo}
                    style={{ borderRadius: '5px', height: '350px' }}
                  />
                  <Card.Body className='mt-0'>
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                        Name: <span>{item.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Phone: <span>{item.phone}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Email: <span>{item.email}</span>
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <Link to="#" className='btn btn-info me-1 flex-grow-1' onClick={() => handleShow(item)}>
                      <i className="fa-solid fa-pen fa-lg" style={{ color: "#00060f" }} />
                    </Link>
                    <button className='btn btn-danger flex-grow-1' onClick={() => { deletecont(item.id) }}>
                      <i className="fa-solid fa-trash fa-lg" style={{ color: "#fff" }} />
                    </button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <h3 className='text-danger'>No Contacts</h3>
        )}
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentContact.name || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo Url</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                value={currentContact.photo || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={currentContact.phone || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentContact.email || ''}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateContact}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;
