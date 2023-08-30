import axios from "axios"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { toast } from "react-toastify"
import { URL } from "../config"

function ChangeServiceManDetailsModal(props) {
  const sessionServiceMan = sessionStorage["serviceMan"]
  const serviceMan = JSON.parse(sessionServiceMan ? sessionServiceMan : null)
  const { show, onHide } = props
  const [title, setTitle] = useState(serviceMan.title)
  const [description, setDescription] = useState(serviceMan.description)
  const [avgCost, setAvgCost] = useState(serviceMan.avgCost)

  function changeServiceManDetails() {
    const url = `${URL}/serviceMan/updateServiceMan/${serviceMan.id}`
    const body = {
      title,
      description,
      avgCost,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        sessionStorage["serviceMan"] = JSON.stringify(result["data"])
        toast.success("Details changed successfully")
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
          Edit details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <label className="form-label">title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="form-label">description</label>
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </div>
          <div>
            <label className="form-label">avgCost</label>
            <input
              type="text"
              id="avgCost"
              className="form-control"
              placeholder="avgCost"
              value={avgCost}
              onChange={(e) => {
                setAvgCost(e.target.value)
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={changeServiceManDetails}>Submit</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ChangeServiceManDetailsModal
