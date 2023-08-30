import axios from "axios"
import React, { useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function PendingServiceApprovalCard(props) {
  const [serviceCost, setServiceCost] = useState(0)
  const { serviceBooking } = props

  function acceptWithServiceCost() {
    if (serviceCost <= 0) {
      toast.error("Please provide Service Cost")
      return
    }
    const url = `${URL}/serviceDetails/approveWithServiceCost`
    const body = {
      serviceDetailsId: serviceBooking.id,
      serviceCost: serviceCost,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        toast.success(
          `Service for ${serviceBooking.customer.firstName} accepted successfully`
        )
        window.location.reload()
      } else toast.error(result["error"])
    })
  }
  return (
    <div>
      <div className="card ms-3 me-3 mt-2 mb-2 shadow-sm">
        <div className="card-header row m-0">
          <div className="text-start col">
            Booking {serviceBooking.id} Available
          </div>
          <div className="text-end col">
            {serviceBooking.createdTimestamp.substring(0, 10)}
          </div>
        </div>
        <div className="card-body row">
          <div className="col">
            <h5 className="card-title">
              Description : {serviceBooking.serviceDescription}
            </h5>
            <p className="card-text text-secondary">
              Status : {serviceBooking.status}
            </p>
          </div>
          <div className="col-sm-2 text-center">
            <div className="row mb-1">
              <label className="form-label m-0 text-success">
                Service Cost
              </label>
              <input
                type="number"
                id="serviceCost"
                className="form-control text-success"
                placeholder="in rupee ₹"
                value={serviceCost}
                onChange={(e) => {
                  setServiceCost(e.target.value)
                }}
              />
            </div>
            <div className="row">
              <button
                onClick={acceptWithServiceCost}
                className="btn btn-warning"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingServiceApprovalCard
