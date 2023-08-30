import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { URL } from "../config"

function AddServiceMan() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [avgCost, setAvgCost] = useState("")

  function addServiceMan() {
    const url = `${URL}/serviceMan/addServiceMan`
    const body = {
      title,
      description,
      avgCost,
      userId: user.id,
    }
    console.log(body)
    axios.post(url, body).then((response) => {
      const result = response.data
      console.log(result)
      if (result["status"] === "success") {
        sessionStorage["serviceMan"] = JSON.stringify(result["data"])
        toast.success("Details changed successfully")
        window.location.reload()
      } else toast.error(result["error"])
    })
  }
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "#intro {background-image: url(Photo2.jpg);height: 105vh;background-repeat: no-repeat;background-size: cover;}/* Height for devices larger than 576px */@media (min-width: 992px) {#intro {margin-top: -58.59px;}}.navbar .nav-link {color: #fff !important;}",
        }}
      />
      <div id="intro" className="bg-image shadow-2-strong">
        <div
          className="mask d-flex align-items-center h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="mx-auto bg-white  rounded-2 shadow-5-strong p-5">
                  <div>
                    <div className="mb-1">
                      <h4 className="text-center">Service man details</h4>
                      <label className="form-label m-0">Title</label>
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
                    <div className="mb-1">
                      <label className="form-label m-0">Description</label>
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
                    <div className="mb-1">
                      <label className="form-label m-0">Average Cost</label>
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
                  <div className="row text-center">
                    <div className="col">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={addServiceMan}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer*/}
      <div className="navbar navbar-dark bg-black fixed-bottom">
        {/* Copyright */}
        <div className="mx-auto text-white text-center">
          © 2023 Copyright:
          <Link className="text-white" to="/">
            SkillSeekers
          </Link>
        </div>
        {/* Copyright */}
      </div>
      {/*Footer*/}
    </div>
  )
}

export default AddServiceMan
