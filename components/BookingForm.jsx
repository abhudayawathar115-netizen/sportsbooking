function BookingForm({
  selectedMatch,
  onClose,
  onSubmit
}) {

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)

    onSubmit({
      name: formData.get('name'),
      email: formData.get('email'),
      booking_date: formData.get('booking_date'),
      match_id: selectedMatch.id
    })
  }

  return (
    <div className="modal">

      <div className="booking-box">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>
          Book Your Ticket 🎟️
        </h2>

        <p>
          {selectedMatch.match_name}
        </p>

        <form onSubmit={handleSubmit}>

          <label>
            Name
          </label>

          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>
            Email
          </label>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>
            Booking Date
          </label>

          <input
            name="booking_date"
            type="date"
            required
          />

          <button
            className="confirm-btn"
            type="submit"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  )
}

export default BookingForm