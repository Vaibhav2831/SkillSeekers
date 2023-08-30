import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import AdminNavbar from "../components/AdminNavBar"
import DeleteServiceDetailsCard from "../components/DeleteServiceDetailsCard"
import { URL } from "../config"

function ServiceDetailsManagement() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [serviceDetails, setServiceDetails] = useState([])

  useEffect(() => {
    const url = `${URL}/serviceDetails/getAll`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setServiceDetails(result["data"])
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
            {serviceDetails &&
              serviceDetails.map((serviceDetail) => {
                return (
                  <DeleteServiceDetailsCard
                    key={serviceDetail.id}
                    serviceDetail={serviceDetail}
                    serviceDetails={serviceDetails}
                    setServiceDetails={setServiceDetails}
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

export default ServiceDetailsManagement
