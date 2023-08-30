import { Link } from "react-router-dom"

function ServiceManNavBar() {
  const user = JSON.parse(sessionStorage["user"])
  function logout() {
    sessionStorage.clear()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm bg-primary">
      <Link className="navbar-brand nav-link" to="/serviceManHome">
        <strong className="ms-2 ">Skill-Seekers | Service Man</strong>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="/serviceManHome"
              className="nav-link text-warning"
              aria-current="page"
            >
              <strong>{`Hello, ${user.firstName}`}</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to="/serviceManBookings"
            >
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to="/serviceManProfile"
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              aria-current="page"
              onClick={logout}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ServiceManNavBar
