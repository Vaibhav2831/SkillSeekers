import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router"
import { URL } from "../config"

const Signup = () => {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("customer")

  const navigate = useNavigate()

  const signupUser = () => {
    const body = { firstName, lastName, email, password, role }
    const url = `${URL}/user/signUp`
    axios.post(url, body).then((response) => {
      const result = response.data
      if (result["status"] === "success") {
        sessionStorage["user"] = JSON.stringify(result["data"])
        toast.success("Sign up successful")
        if (result["data"].role === "CUSTOMER") navigate("/customerHome")
        else if (result["data"].role === "SERVICE_MAN")
          navigate("/serviceManHome")
      } else {
        toast.error(result["error"])
      }
    })
  }

  const passwordCheck = () => {
    const checkMessage = document.getElementById("passwordCheck")
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        checkMessage.style.color = "green"
        checkMessage.innerHTML = "Matched"
      } else {
        checkMessage.style.color = "red"
        checkMessage.innerHTML = "Not Matched"
      }
    }
  }

  const clearInput = () => {
    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div>
      <div>
        {/*Main Navigation*/}
        <header>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "#intro {background-image: url(Photo2.jpg);height: 105vh;background-repeat: no-repeat;background-size: cover;}/* Height for devices larger than 576px */@media (min-width: 992px) {#intro {margin-top: -58.59px;}}.navbar .nav-link {color: #fff !important;}",
            }}
          />
          {/* Background image */}
          <div id="intro" className="bg-image shadow-2-strong">
            <div
              className="mask d-flex align-items-center h-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-md-8">
                    <div className="bg-white rounded-3 shadow-5-strong p-5">
                      <h4 className="text-center text-primary">Sign Up</h4>
                      <div className="row text-center">
                        <div className="col form-check">
                          <label>Customer :</label>
                          <input
                            type="radio"
                            checked={role === "CUSTOMER"}
                            value="CUSTOMER"
                            onChange={(e) => setRole(e.target.value)}
                            onBlur={() => {
                              console.log("Role : " + role)
                            }}
                          />
                        </div>
                        <div className="col">
                          <label>Service Man : </label>
                          <input
                            type="radio"
                            checked={role === "SERVICE_MAN"}
                            value="SERVICE_MAN"
                            onChange={(e) => setRole(e.target.value)}
                            onBlur={() => {
                              console.log("Role : " + role)
                            }}
                          />
                        </div>
                      </div>

                      <div className="mb-2">
                        <label className="label-control">Firstname</label>
                        <input
                          id="firstName"
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => {
                            setFirstname(e.target.value)
                          }}
                        />
                      </div>

                      <div className="mb-2">
                        <label className="label-control">Lastname</label>
                        <input
                          id="lastName"
                          type="text"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => {
                            setLastname(e.target.value)
                          }}
                        />
                      </div>

                      <div className="mb-2">
                        <label className="label-control">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                        />
                      </div>

                      <div className="mb-2">
                        <label className="label-control">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value)
                          }}
                        />
                      </div>

                      <div className="mb-2">
                        <label className="label-control">
                          Confirm Password
                        </label>
                        <input
                          id="confirmPassword"
                          type="password"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value)
                          }}
                          onBlur={passwordCheck()}
                        />
                      </div>
                      <p id="passwordCheck"></p>
                      <div className="mb-1">
                        {"Already Signed up? "}
                        <Link to={"/"}>Signin</Link>
                        {" here"}
                      </div>
                      <div className="row text-center">
                        <div className="col">
                          <button
                            className="btn btn-primary shadow"
                            onClick={signupUser}
                          >
                            Signup
                          </button>
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-danger shadow"
                            onClick={clearInput}
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
          {/* Background image */}
        </header>
        {/*Main Navigation*/}
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
    </div>
  )
}

export default Signup
