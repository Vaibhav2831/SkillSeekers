import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AddressModal from "../components/AddressModal"
import ChangePasswordModal from "../components/ChangePasswordModal"
import ChangeServiceManDetailsModal from "../components/ChangeServiceManDetailsModal"
import ServiceManNavBar from "../components/ServiceManNavBar"

function ServiceManProfile() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const sessionServiceMan = sessionStorage["serviceMan"]
  const serviceMan = JSON.parse(sessionServiceMan ? sessionServiceMan : null)

  const [changeServiceManDetails, setChangeServiceManDetails] = useState(false)
  const [changePasswordModalShow, setChangePasswordModalShow] = useState(false)

  return (
    <>
      {(user && user.role === "SERVICE_MAN" && serviceMan && (
        <div>
          <ServiceManNavBar />
          <div>
            <div className="card shadow mx-auto m-5" style={{ width: 400 }}>
              <img
                className="card-img-top"
                src="Profile.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
                <p className="card-text">{user.email}</p>
                <h5 className="card-title text-center text-primary">
                  Service man details
                </h5>
                <p className="card-text m-0">{`Title: ${serviceMan.title}`}</p>
                <p className="card-text m-0">{`Description: ${serviceMan.description}`}</p>
                <p className="card-text m-0">{`Average cost: ${serviceMan.avgCost} ₹/service`}</p>
                <div className="text-center mt-1">
                  <button
                    className="btn btn-sm btn-success m-1"
                    onClick={() => setChangePasswordModalShow(true)}
                  >
                    Change Password
                  </button>
                  <ChangePasswordModal
                    show={changePasswordModalShow}
                    onHide={() => setChangePasswordModalShow(false)}
                  />
                  <button
                    className="btn btn-sm btn-dark m-1"
                    onClick={() => setChangeServiceManDetails(true)}
                  >
                    Edit Details
                  </button>
                  <ChangeServiceManDetailsModal
                    show={changeServiceManDetails}
                    onHide={() => setChangeServiceManDetails(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )) || (
        <div className="text-center text-primary">
          Page not Available without Signin Please{" "}
          <Link to={"/"}>Signin here</Link>
        </div>
      )}
    </>
  )
}

export default ServiceManProfile
