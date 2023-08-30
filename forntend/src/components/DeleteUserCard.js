import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import { URL } from "../config"

function DeleteUserCard({ user, users, setUsers }) {
  function deleteUser() {
    const url = `${URL}/user/delete/${user.id}`
    axios.delete(url).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        setUsers(users.filter((u) => u.id != user.id))
      } else toast.error(result["error"])
    })
  }

  return (
    <div className="card m-2 shadow" style={{ width: "17rem" }}>
      <div className="card-body">
        <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
        <p className="card-text m-0">{`Email: ${user.email}`}</p>
        <p className="card-text m-0">{`Password: ${user.password}`}</p>
        <p className="card-text m-0">{`Role: ${user.role}`}</p>
        <p className="card-text m-0">{`Status: ${user.status}`}</p>
      </div>
      <button className="btn btn-danger m-2" onClick={deleteUser}>
        Delete
      </button>
    </div>
  )
}

export default DeleteUserCard
