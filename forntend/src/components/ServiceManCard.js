import React, { useState } from "react"
import ServiceManBooking from "./ServiceManBooking"
import ServiceManModal from "./ServiceManModal"

function ServiceManCard(props) {
  const { serviceMan } = props
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [modalShow, setModalShow] = useState(false)
  const [bookServiceShow, setBookServiceShow] = useState(false)
  return (
    <div key={serviceMan.id} className="card m-3 shadow" style={{ width: 300 }}>
      <div className="card-body">
        <button className="btn m-0 p-0" onClick={() => setModalShow(true)}>
          <h5 className="card-title">{serviceMan.title}</h5>
        </button>
        <ServiceManModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          serviceMan={serviceMan}
        />
        <p className="card-text">{serviceMan.description}</p>
        {bookServiceShow && (
          <ServiceManBooking
            customerId={user.id}
            serviceManId={serviceMan.id}
          />
        )}
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            setBookServiceShow((prev) => !prev)
          }}
        >
          {!bookServiceShow ? "Add Discription" : "Close"}
        </button>
      </div>
    </div>
  )
}

export default ServiceManCard
