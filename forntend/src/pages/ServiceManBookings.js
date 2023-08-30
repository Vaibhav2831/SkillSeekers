import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import CustomerBookingCard from "../components/CustomerBookingCard"
import CustomerNavbar from "../components/CustomerNavBar"
import ServiceManBookingCard from "../components/ServiceManBookingCard"
import ServiceManNavBar from "../components/ServiceManNavBar"
import { URL } from "../config"

function ServiceManBookings() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const sessionServiceMan = sessionStorage["serviceMan"]
  const serviceMan = JSON.parse(sessionServiceMan ? sessionServiceMan : null)

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const url = `${URL}/serviceDetails/getForServiceManBookings/${serviceMan.id}`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setBookings(result["data"])
      } else {
        toast.error(result["error"])
      }
    })
  }, [])
  return (
    <>
      {(user && user.role === "SERVICE_MAN" && serviceMan && (
        <div>
          <ServiceManNavBar />
          {bookings.map((booking) => {
            return <ServiceManBookingCard key={booking} booking={booking} />
          })}
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

export default ServiceManBookings
