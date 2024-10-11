import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addContactApi } from '../services/allApi';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [show, setShow] = useState(true);
    const navigate = useNavigate()


    const [add, setAdd] = useState({
        name: "", photo: "", phone: "", email: ""
    })

    const handleAdd = async () => {
        console.log(add)
        const { name, photo, phone, email  } = add
        if (!name ||  !photo || !phone || !email) {
            toast.warning("Please fill all the fields")
        }
        else {
            const result = await addContactApi(add)
            console.log(result)
            if (result.status == 201) {
                toast.success("Success!!!")
                setAdd({
                    name: "", photo: "", phone: "", email: ""
                })
                handleClose()
                navigate("/")
            }
            else {
                toast.error("Uploading Failed!!!")
                console.log(result)
            }
        }
    }

    const handleClose = () => {
        setShow(false);
        navigate("/")
    }
    const handleShow  = () => setShow(true);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingtitle" label="Full Name" className="mb-3">
                        <Form.Control type="text" onChange={(e) => { setAdd({ ...add, name: e.target.value }) }} placeholder="Full Name" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingimg" label="Photo URL" className="mb-3">
                        <Form.Control type="text" onChange={(e) => { setAdd({ ...add, photo: e.target.value }) }} placeholder="Photo URL" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingnumber" label="Phone Number" className='mb-3'>
                        <Form.Control type="text" onChange={(e) => { setAdd({ ...add, phone: e.target.value }) }} placeholder="+91 XXXXXXXXXX" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingemail" label="Email ID">
                        <Form.Control type="text" onChange={(e) => { setAdd({ ...add, email: e.target.value }) }} placeholder="name@gmail.com" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Create