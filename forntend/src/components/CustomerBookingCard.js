import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function CustomerBookingCard(props) {
  const { booking } = props
  const approvedFromServiceMan = booking.status === "APPROVED FROM SERVICE MAN"
  const serviceCostAvailable = booking.serviceCost !== 0

  function approveFromCustomer() {
    const url = `${URL}/serviceDetails/changeServiceStatus`
    const body = {
      serviceDetailsId: booking.id,
      status: "PROCESSING THE SERVICE",
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        toast.success("Service approved successfully")
      } else toast.error(result["error"])
    })
  }

  return (
    <div className="card ms-3 me-3 mt-2 mb-2 shadow-sm">
      <div className="card-header row m-0">
        <div className="text-start col">
          {`${booking.serviceMan.title} | ${booking.serviceMan.user.firstName} ${booking.serviceMan.user.lastName}`}
        </div>
        <div className="text-end col">
          {booking.createdTimestamp.substring(0, 10)}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{booking.status}</h5>
        <p className="m-1 card-text">
          Service address:
          {` ${booking.address.recipientsName}, ${booking.address.recipientsPhone}, ${booking.address.addressLine1}, ${booking.address.addressLine2}, ${booking.address.city}, ${booking.address.postalCode}, ${booking.address.state}, ${booking.address.country}`}
        </p>
        <p className="m-1 card-text text-success">
          Service Cost:{" "}
          {serviceCostAvailable || approvedFromServiceMan
            ? booking.serviceCost
            : "No specified yet"}
        </p>
        <p className="m-1 card-text text-info">
          Average Cost: {booking.serviceMan.avgCost} ₹
        </p>
        {approvedFromServiceMan && (
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={approveFromCustomer}
            >
              Approve
            </button>
            <p className="m-1 text-secondary" style={{ fontSize: "10px" }}>
              {`To approve the service cost and proceed with Service Booking click Approve`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerBookingCard
