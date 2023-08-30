import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { URL } from "../config"

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const signinUser = () => {
    const body = {
      email,
      password,
    }
    const url = `${URL}/user/signIn`
    axios.post(url, body).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        sessionStorage["user"] = JSON.stringify(result["data"])
        toast.success("welcome")
        if (result["data"].role === "CUSTOMER") navigate("/customerHome")
        else if (result["data"].role === "SERVICE_MAN")
          navigate("/serviceManHome")
        else if (result["data"].role === "ADMIN") navigate("/adminHome")
      } else {
        toast.error(result["error"])
      }
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
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="mx-auto bg-white rounded-2 shadow-5-strong p-5">
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <h4 className="text-center text-primary">Sign In</h4>
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="*********"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                  <div className="text-center mb-3">
                    Not yet Signed Up ? <Link to="/signup">Sign Up</Link> Here
                  </div>
                  <div className="row text-center">
                    <div className="col">
                      <button
                        className="btn btn-primary shadow"
                        onClick={signinUser}
                      >
                        Signin
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-danger shadow"
                        onClick={() => {
                          setEmail("")
                          setPassword("")
                        }}
                      >
                        Clear
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

export default Signin
