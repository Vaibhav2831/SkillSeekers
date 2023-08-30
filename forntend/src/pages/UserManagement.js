import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import AdminNavbar from "../components/AdminNavBar"
import DeleteUserCard from "../components/DeleteUserCard"
import { URL } from "../config"

function UserManagement() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const url = `${URL}/user/getAll`
    axios.get(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        console.log(result["data"])
        setUsers(result["data"])
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
            {users &&
              users.map((user) => {
                return (
                  <DeleteUserCard
                    key={user.id}
                    user={user}
                    users={users}
                    setUsers={setUsers}
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

export default UserManagement
