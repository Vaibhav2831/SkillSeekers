import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function DeleteServiceManCard({ serviceMan, serviceMans, setServiceMans }) {
  function deleteServiceMan() {
    const url = `${URL}/serviceMan/delete/${serviceMan.id}`
    axios.delete(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        setServiceMans(serviceMans.filter((s) => s.id != serviceMan.id))
      } else toast.error(result["error"])
    })
  }

  return (
    <div className="card m-2 shadow" style={{ width: "17rem" }}>
      <div className="card-body">
        <h5 className="card-title">{`${serviceMan.user.firstName} ${serviceMan.user.lastName}`}</h5>
        <p className="card-text m-0">{`Title: ${serviceMan.title}`}</p>
        <p className="card-text m-0">{`Description: ${serviceMan.description}`}</p>
        <p className="card-text m-0">{`Average cost: ${serviceMan.avgCost} ₹/service`}</p>
      </div>
      <button className="btn btn-danger m-2" onClick={deleteServiceMan}>
        Delete
      </button>
    </div>
  )
}

export default DeleteServiceManCard
