import axios from "axios"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { toast } from "react-toastify"
import { URL } from "../config"

function ChangePasswordModal(props) {
  const user = JSON.parse(sessionStorage["user"])
  const { show, onHide } = props

  const [newPassword, setNewPassword] = useState("")
  const [oldPassword, setOldPassword] = useState("")

  function changePassword() {
    const url = `${URL}/user/changePassword`
    const body = {
      userId: user.id,
      newPassword: newPassword,
      oldPassword: oldPassword,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        toast.success("Password changed successfully")
        onHide()
      } else toast.error(result["error"])
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <label className="form-label">Old Password</label>
            <input
              type="text"
              id="oldPassword"
              className="form-control"
              placeholder="**********"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="form-label">New Password</label>
            <input
              type="text"
              id="newPassword"
              className="form-control"
              placeholder="**********"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value)
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={changePassword}>Submit</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangePasswordModal
