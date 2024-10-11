import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContactApi, getOneContactApi } from '../services/allApi';

function ContactCard() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const result = await getOneContactApi(id);
      if (result.status === 200) {
        setContact(result.data);
        console.log(result)
      } else {
        setError("Contact not Found");
      }
      setLoading(false);
    }
    fetchContact();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3 className='text-danger'>{error}</h3>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card" style={{ width: '20rem' }}>
          <div className="card-header">
            <h2>{contact?.name}</h2>
          </div>
          <div className="card-body">
            <img src={contact.photo} alt={`${contact?.name}'s photo} className="img-fluid mb-3" style={{ height: '350px', width: '350px' }`} />
            <p><strong>Phone:</strong> {contact?.phone}</p>
            <p><strong>Email:</strong> {contact?.email}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactCard