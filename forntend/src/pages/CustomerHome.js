import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import CustomerNavbar from "../components/CustomerNavBar"
import ServiceManCard from "../components/ServiceManCard"
import { URL } from "../config"

function CustomerHome() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [allServiceMan, setAllServiceMan] = useState([])

  useEffect(() => {
    const url = `${URL}/serviceMan/getAll`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setAllServiceMan(result["data"])
      } else {
        toast.error(result["error"])
      }
    })
  }, [])
  return (
    <>
      {(user && user.role === "CUSTOMER" && (
        <div>
          
          <CustomerNavbar />
          <div className="row m-3">
            {allServiceMan &&
              allServiceMan.map((serviceMan) => {
                return (
                  <ServiceManCard key={serviceMan.id} serviceMan={serviceMan} />
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

export default CustomerHome
