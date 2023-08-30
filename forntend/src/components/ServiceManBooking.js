import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function ServiceManBooking(props) {
  const { customerId, serviceManId } = props
  const [description, setDescription] = useState("")
  const [addresses, setAddresses] = useState([])
  const [customerAddressId, setCustomerAddressId] = useState(0)

  function bookService() {
    if (customerAddressId === 0) {
      toast.error("Select/Add address")
      return
    }
    const url = `${URL}/serviceDetails/bookService`
    const body = {
      serviceDescription: description,
      customerId: customerId,
      customerAddressId: customerAddressId,
      serviceManId: serviceManId,
    }
    axios.post(url, body).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        toast.success("Booking Successful")
        setDescription("")
      }
    })
  }

  useEffect(() => {
    const url = `${URL}/address/getByUserId/${customerId}`
    axios.get(url).then((response) => {
      const result = response.data
      setAddresses(result["data"])
    })
  }, [])
  return (
    <div className="border border-warning rounded-2 p-2 m-2">
      <label className="form-label">Enter Description: </label>
      <textarea
        id="description"
        className="form-control mb-2"
        placeholder="Describe the requirements..."
        rows="3"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <label className="form-label m-1">Select Address:</label>
      <select
        className="custom-select mb-2 m-1"
        style={{ width: 200 }}
        onClick={(e) => setCustomerAddressId(e.target.value)}
      >
        {addresses &&
          addresses.map((address) => {
            return (
              <>
                <option key={address.id} value={address.id}>
                  {address.recipientsName}
                </option>
                <option disabled={true}>{address.recipientsName}</option>
                <option disabled={true}>{address.recipientsPhone}</option>
                <option disabled={true}>{address.addressLine1}</option>
                <option disabled={true}>{address.addressLine2}</option>
                <option disabled={true}>{address.city}</option>
                <option disabled={true}>{address.postalCode}</option>
                <option disabled={true}>{address.state}</option>
                <option disabled={true}>{address.country}</option>
              </>
            )
          })}
      </select>
      <div className="btn btn-sm btn-warning" onClick={bookService}>
        Submit
      </div>
    </div>
  )
}

export default ServiceManBooking
