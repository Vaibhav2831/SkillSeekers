import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import AdminNavbar from "../components/AdminNavBar"
import DeleteServiceManCard from "../components/DeleteServiceManCard"
import { URL } from "../config"

function ServiceManManagement() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [serviceMans, setServiceMans] = useState([])

  useEffect(() => {
    const url = `${URL}/serviceMan/getAll`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setServiceMans(result["data"])
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
            {serviceMans &&
              serviceMans.map((serviceMan) => {
                return (
                  <DeleteServiceManCard
                    key={serviceMan.id}
                    serviceMan={serviceMan}
                    serviceMans={serviceMans}
                    setServiceMans={setServiceMans}
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

export default ServiceManManagement
