import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function DeleteServiceDetailsCard({
  serviceDetail,
  serviceDetails,
  setServiceDetails,
}) {
  const serviceCostAvailable = serviceDetail.serviceCost !== 0

  function deleteServiceDetail() {
    const url = `${URL}/serviceDetails/delete/${serviceDetail.id}`
    axios.delete(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        setServiceDetails(
          serviceDetails.filter((s) => s.id != serviceDetail.id)
        )
      } else toast.error(result["error"])
    })
  }

  return (
    <div>
      <div className="card ms-3 me-3 mt-2 mb-2 shadow-sm">
        <div className="card-header row m-0">
          <div className="text-start col">
            {`${serviceDetail.serviceMan.title} | ${serviceDetail.serviceMan.user.firstName} ${serviceDetail.serviceMan.user.lastName}`}
          </div>
          <div className="text-end col">
            {serviceDetail.createdTimestamp.substring(0, 10)}
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{serviceDetail.status}</h5>
          <p className="m-1 card-text">
            Service address:
            {` ${serviceDetail.address.recipientsName}, ${serviceDetail.address.recipientsPhone}, ${serviceDetail.address.addressLine1}, ${serviceDetail.address.addressLine2}, ${serviceDetail.address.city}, ${serviceDetail.address.postalCode}, ${serviceDetail.address.state}, ${serviceDetail.address.country}`}
          </p>
          <p className="m-1 card-text text-success">
            Service Cost:{" "}
            {serviceCostAvailable
              ? serviceDetail.serviceCost
              : "No specified yet"}
          </p>
          <p className="m-1 card-text text-info">
            Average Cost: {serviceDetail.serviceMan.avgCost} ₹
          </p>
          <button className="btn btn-danger m-2" onClick={deleteServiceDetail}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteServiceDetailsCard
