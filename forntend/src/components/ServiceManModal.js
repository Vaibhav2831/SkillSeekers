import React from "react"
import { Button, Modal } from "react-bootstrap"
import ServiceManBooking from "./ServiceManBooking"

function ServiceManModal(props) {
  const user = JSON.parse(sessionStorage["user"])
  const { show, onHide, serviceMan } = props
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {serviceMan.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {serviceMan.user.firstName} {serviceMan.user.lastName}
        </h4>
        <p>{serviceMan.description}</p>
        <h5>{serviceMan.avgCost} ₹</h5>
        <ServiceManBooking customerId={user.id} serviceManId={serviceMan.id} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ServiceManModal
