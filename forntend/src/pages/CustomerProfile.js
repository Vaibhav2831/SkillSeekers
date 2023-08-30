import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AddressModal from "../components/AddressModal"
import ChangePasswordModal from "../components/ChangePasswordModal"
import CustomerNavbar from "../components/CustomerNavBar"
import { URL } from "../config"

function CustomerProfile() {
  const sessionUser = sessionStorage["user"]
  const user = JSON.parse(sessionUser ? sessionUser : null)

  const [addresses, setAddresses] = useState([])

  const [addressModalShow, setAddressModalShow] = useState(false)
  const [changePasswordModalShow, setChangePasswordModalShow] = useState(false)

  useEffect(() => {
    const url = `${URL}/address/getByUserId/${user.id}`
    axios.get(url).then((response) => {
      const result = response.data
      setAddresses(result["data"])
    })
  }, [])

  return (
    <>
      {(user && user.role === "CUSTOMER" && (
        <div>
          <CustomerNavbar />
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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <label className="form-label m-1">Addresses:</label>
                <select
                  className="custom-select mb-2 m-1"
                  style={{ width: 200 }}
                >
                  {addresses &&
                    addresses.map((address) => {
                      return (
                        <>
                          <option key={address.id} value={address.id}>
                            {address.recipientsName}
                          </option>
                          <option disabled={true}>
                            {address.recipientsName}
                          </option>
                          <option disabled={true}>
                            {address.recipientsPhone}
                          </option>
                          <option disabled={true}>
                            {address.addressLine1}
                          </option>
                          <option disabled={true}>
                            {address.addressLine2}
                          </option>
                          <option disabled={true}>{address.city}</option>
                          <option disabled={true}>{address.postalCode}</option>
                          <option disabled={true}>{address.state}</option>
                          <option disabled={true}>{address.country}</option>
                        </>
                      )
                    })}
                </select>
                <div className="text-center">
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
                    className="btn btn-sm btn-danger m-1"
                    onClick={() => setAddressModalShow(true)}
                  >
                    Add Address
                  </button>
                  <AddressModal
                    show={addressModalShow}
                    onHide={() => setAddressModalShow(false)}
                  />
                  <button className="btn btn-sm btn-secondary m-1">
                    Add Avatar
                  </button>
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

export default CustomerProfile
