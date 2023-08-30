import axios from "axios"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { toast } from "react-toastify"
import { URL } from "../config"

function AddressModal(props) {
  const user = JSON.parse(sessionStorage["user"])
  const { show, onHide } = props

  const [recipientsName, setRecipientsName] = useState()
  const [recipientsPhone, setRecipientsPhone] = useState()
  const [addressLine1, setAddressLine1] = useState()
  const [addressLine2, setAddressLine2] = useState()
  const [city, setCity] = useState()
  const [postalCode, setPostalCode] = useState()
  const [state, setState] = useState()
  const [country, setCountry] = useState()

  function addAddress() {
    const url = `${URL}/address/addOrUpdateAddress`
    const body = {
      userId: user.id,
      recipientsName: recipientsName,
      recipientsPhone: recipientsPhone,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      postalCode: postalCode,
      state: state,
      country: country,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        toast.success("Address added successfully")
        onHide()
      } else toast.error(result["error"])
    })
  }

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
          Add Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="row">
            <div className="col">
              <label className="form-label">Recipients Name</label>
              <input
                type="text"
                id="recipientsName"
                className="form-control"
                placeholder="recipientsName"
                value={recipientsName}
                onChange={(e) => {
                  setRecipientsName(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <label className="form-label">Recipients Phone</label>
              <input
                type="number"
                id="recipientsPhone"
                className="form-control"
                placeholder="recipientsPhone"
                value={recipientsPhone}
                onChange={(e) => {
                  setRecipientsPhone(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                className="form-control"
                placeholder="addressLine1"
                value={addressLine1}
                onChange={(e) => {
                  setAddressLine1(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <label className="form-label">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                className="form-control"
                placeholder="addressLine2"
                value={addressLine2}
                onChange={(e) => {
                  setAddressLine2(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">City</label>
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <label className="form-label">Postal Code</label>
              <input
                type="number"
                id="postalCode"
                className="form-control"
                placeholder="postalCode"
                value={postalCode}
                onChange={(e) => {
                  setPostalCode(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">State</label>
              <input
                type="text"
                id="state"
                className="form-control"
                placeholder="state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <label className="form-label">Country</label>
              <input
                type="text"
                id="country"
                className="form-control"
                placeholder="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addAddress}>Submit</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddressModal
