import React from "react"
import { Link } from "react-router-dom"
import AdminNavbar from "../components/AdminNavBar"

function AdminHome() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)

  return (
    <>
      {(user && user.role === "ADMIN" && (
        <div>
          <AdminNavbar />
          <div className="text-center m-5">
            <Link
              to="/userManagement"
              className="btn btn-primary m-5 rounded-circle shadow text-white p-5"
            >
              User
            </Link>
            <Link
              to="/serviceManManagement"
              className="btn btn-danger m-5 rounded-circle shadow text-white p-5"
            >
              Service Man
            </Link>
            <Link
              to="/serviceDetailsManagement"
              className="btn btn-info m-5 rounded-circle shadow text-white p-5"
            >
              Service Detail
            </Link>
            <Link
              to="/addressManagement"
              className="btn btn-warning m-5 rounded-circle shadow text-white p-5"
            >
              Address
            </Link>
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

export default AdminHome
