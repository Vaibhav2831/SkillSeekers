import axios from "axios"
import React, { useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function ServiceManBookingCard(props) {
  const { booking } = props
  const completedFromServiceMan = booking.status === "SERVICE COMPLETED"

  const [status, setStatus] = useState("")
  const statusList = [
    "ON THE WAY",
    "REACHED THE DESTINATION",
    "WORKING ON SERVICE",
    "DOOR LOCKED",
    "SERVICE COMPLETED",
  ]

  function changeStatus() {
    if (status === "") {
      toast.error("Please select status")
      return
    }
    const url = `${URL}/serviceDetails/changeServiceStatus`
    const body = {
      serviceDetailsId: booking.id,
      status: status,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        toast.success("Service status changed !!!")
      } else toast.error(result["error"])
    })
  }

  return (
    <div className="card ms-3 me-3 mt-2 mb-2 shadow-sm">
      <div className="card-header row m-0">
        <div className="text-start col">
          {`${booking.id} | ${booking.customer.firstName} ${booking.customer.lastName}`}
        </div>
        <div className="text-end col">
          {booking.createdTimestamp.substring(0, 10)}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{booking.status}</h5>
        <p className="m-1 card-text">
          Customer address:
          {` ${booking.address.recipientsName}, ${booking.address.recipientsPhone}, ${booking.address.addressLine1}, ${booking.address.addressLine2}, ${booking.address.city}, ${booking.address.postalCode}, ${booking.address.state}, ${booking.address.country}`}
        </p>
        <p className="m-1 card-text text-success">
          Service Cost: {booking.serviceCost}
        </p>
        {!completedFromServiceMan && (
          <div>
            <div className="row">
              <div className="col text-end">
                <select
                  className="form-select mb-2 m-1"
                  onClick={(e) => setStatus(e.target.value)}
                >
                  {statusList.map((status) => {
                    return (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="col text-start">
                <button className="btn btn-warning" onClick={changeStatus}>
                  Submit
                </button>
              </div>
            </div>
            <p className="m-1 text-secondary" style={{ fontSize: "10px" }}>
              {`To change the service status click Submit`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceManBookingCard
