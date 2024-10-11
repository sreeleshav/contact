import React, { useEffect, useState } from 'react'
import { getContactApi } from '../services/allApi'
import { deleteContactApi } from '../services/allApi'

function Delete() {
  const [data, setData] = useState([])
  const [del, setDel] = useState({})

  useEffect(() => {
    getData()
  }, [del])

  const getData = async () => {
    const result = await getContactApi()
    if (result.status == 200) {
      setData(result.data)
    }
  }

  const deletecont = async (id) => {
    const result = await deleteContactApi(id)
    if (result.status == 200) {
      setDel(result)
    }
  }

  return (
    <>
      <div className='container mt-3' style={{ height: '100vh', width: '100vw' }}>
        <div className='row justify-content-between'>
          <h2>My Contact</h2>
        </div>
        <div className='container-fluid border shadow mt-4'>
          {data.length > 0 ? (
            <div className='row'>
              {data.map(item => (
                <div className='col-md-3 col-sm-6 mb-4 mt-4'>
                  <div className="d-flex" style={{ height: '100%', width: '100%' }}>
                    <div className="card" style={{ height: '100%', width: '100%' }}>
                      <div className="card-header">
                        <h2>{item?.name}</h2>
                      </div>
                      <div className="card-body d-grid" style={{ height: '100%', width: '100%' }}>
                        <img src={item.photo} alt={`${item?.name}'s photo} className="img-fluid" style={{ height: '250px', width: '100%' }`} />
                        <p><strong>Phone:</strong> {item?.phone}</p>
                        <p><strong>Email:</strong> {item?.email}</p>
                      </div>
                      <div className="card-footer">
                        <button className='btn btn-danger flex-grow-1' onClick={() => { deletecont(item.id) }}>
                          <i className="fa-solid fa-trash fa-lg" style={{ color: "#fff" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className='text-danger'>No Contacts</h3>
          )}
        </div>
      </div>
    </>
  )
}

export default Delete