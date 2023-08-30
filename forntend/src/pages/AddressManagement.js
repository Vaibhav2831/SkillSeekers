import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import AdminNavbar from "../components/AdminNavBar"
import DeleteAddressCard from "../components/DeleteAddressCard"
import DeleteUserCard from "../components/DeleteUserCard"
import { URL } from "../config"

function AddressManagement() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    const url = `${URL}/address/getAll`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setAddresses(result["data"])
      } else {
        toast.error(result["error"])
      }
    })
  }, [])
  return (
    <>
      {(user && user.role === "ADMIN" && (
        <div>
          <AdminNavbar />
          <div className="row m-3">
            {addresses &&
              addresses.map((address) => {
                return (
                  <DeleteAddressCard
                    key={address.id}
                    address={address}
                    addresses={addresses}
                    setAddresses={setAddresses}
                  />
                )
              })}
          </div>
        </div>
      )) || (
        <div className="text-center text-secondary">
          Page not Available without Signin Please{" "}
          <Link to={"/"}>Signin here</Link>
        </div>
      )}
    </>
  )
}

export default AddressManagement
