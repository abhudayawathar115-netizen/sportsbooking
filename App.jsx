import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

import Navbar from './components/Navbar'
import MatchCard from './components/MatchCard'
import BookingForm from './components/BookingForm'

function App() {
  const [matches, setMatches] = useState([])
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMatches()
  }, [])

  async function fetchMatches() {
    const { data, error } = await supabase
      .from('Matches')
      .select('*')
      .order('match_date', { ascending: true })

    if (error) {
      console.error('Error fetching matches:', error)
    } else {
      setMatches(data)
    }

    setLoading(false)
  }

  async function createBooking(booking) {
    const { error } = await supabase
      .from('Bookings')
      .insert([booking])

    if (error) {
      console.error('Booking error:', error)
      alert('Booking failed ❌')
    } else {
      alert('Booking successful! 🎉')
      setSelectedMatch(null)
    }
  }

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">
            ⚡ LIVE SPORTS EXPERIENCE
          </span>

          <h1>
            Experience The
            <span> Game.</span>
          </h1>

          <p>
            Discover upcoming matches, choose your favorite
            team and book your tickets in seconds.
          </p>

          <a href="#matches" className="hero-btn">
            Explore Matches →
          </a>
        </div>

        <div className="hero-ball">
          ⚽
        </div>
      </section>

      {/* MATCHES SECTION */}
      <section className="matches-section" id="matches">
        <div className="section-heading">
          <div>
            <span className="small-title">
              DON'T MISS OUT
            </span>

            <h2>Upcoming Matches</h2>
          </div>

          <span className="match-count">
            {matches.length} Matches
          </span>
        </div>

        {loading ? (
          <div className="loading">
            Loading matches...
          </div>
        ) : matches.length === 0 ? (
          <div className="loading">
            No matches available.
          </div>
        ) : (
          <div className="match-grid">
            {matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBook={setSelectedMatch}
              />
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        <h2>⚡ MatchHub</h2>

        <p>
          Your gateway to unforgettable sports experiences.
        </p>

        <p className="copyright">
          © 2026 MatchHub. All rights reserved.
        </p>
      </footer>

      {/* BOOKING FORM */}
      {selectedMatch && (
        <BookingForm
          selectedMatch={selectedMatch}
          onClose={() => setSelectedMatch(null)}
          onSubmit={createBooking}
        />
      )}
    </div>
  )
}

export default App