function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ⚡ Match<span>Hub</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#matches">Matches</a>
        <a href="#booking">Bookings</a>
      </div>

      <button className="nav-btn">Book Now</button>
    </nav>
  )
}

export default Navbar
