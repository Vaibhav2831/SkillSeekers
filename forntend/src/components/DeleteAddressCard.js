import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function DeleteAddressCard({ address, addresses, setAddresses }) {
  function deleteAddress() {
    const url = `${URL}/address/delete/${address.id}`
    axios.delete(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        setAddresses(addresses.filter((a) => a.id != address.id))
      } else toast.error(result["error"])
    })
  }

  return (
    <div className="card m-2 shadow" style={{ width: "17rem" }}>
      <div className="card-body">
        <h5 className="card-title">{address.recipientsName}</h5>
        <p className="card-text m-0">{`Recipients Name: ${address.recipientsName}`}</p>
        <p className="card-text m-0">{`Recipients Phone: ${address.recipientsPhone}`}</p>
        <p className="card-text m-0">{`Address Line1: ${address.addressLine1}`}</p>
        <p className="card-text m-0">{`Address Line2: ${address.addressLine2}`}</p>
        <p className="card-text m-0">{`City: ${address.city}`}</p>
        <p className="card-text m-0">{`Postal Code: ${address.postalCode}`}</p>
        <p className="card-text m-0">{`State: ${address.state}`}</p>
        <p className="card-text m-0">{`Country: ${address.country}`}</p>
      </div>
      <button className="btn btn-danger m-2" onClick={deleteAddress}>
        Delete
      </button>
    </div>
  )
}

export default DeleteAddressCard
