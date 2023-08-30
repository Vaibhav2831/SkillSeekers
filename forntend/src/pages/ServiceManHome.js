import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import PendingServiceApprovalCard from "../components/PendingServiceApprovalCard"
import ServiceManNavBar from "../components/ServiceManNavBar"

import { URL } from "../config"
import AddServiceMan from "./AddServiceMan"

function ServiceManHome() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const sessionServiceMan = sessionStorage["serviceMan"]
  const [serviceMan, setserviceMan] = useState(
    JSON.parse(sessionServiceMan ? sessionServiceMan : null)
  )

  const [pendingServiceBookings, setPendingServiceBookings] = useState([])

  useEffect(() => {
    const url1 = `${URL}/serviceMan/getByUserId/${user.id}`
    axios.get(url1).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        sessionStorage["serviceMan"] = JSON.stringify(result["data"])
        setserviceMan(result["data"])
        const url2 = `${URL}/serviceDetails/getForServiceManHome/${result["data"].id}`
        axios.get(url2).then((response) => {
          const result = response.data
          if (result["status"] === "success") {
            console.log(result["data"])
            setPendingServiceBookings(result["data"])
          } else toast.error(result["error"])
        })
      } else toast.error(result["error"])
    })
  }, [])
  return (
    <>
      {(user && user.role === "SERVICE_MAN" && serviceMan && (
        <div>
          <ServiceManNavBar />
          {pendingServiceBookings.map((serviceBooking) => {
            return (
              <PendingServiceApprovalCard
                key={serviceBooking}
                serviceBooking={serviceBooking}
              />
            )
          })}
          <div className="row m-3"></div>
        </div>
      )) ||
        (user && user.role === "SERVICE_MAN" && <AddServiceMan />) || (
          <div className="text-center text-secondary">
            Page not Available without Signin Please{" "}
            <Link to={"/"}>Signin here</Link>
          </div>
        )}
    </>
  )
}

export default ServiceManHome
