function MatchCard({ match, onBook }) {
  return (
    <div className="match-card">

      <div className="match-top">
        <span className="live-badge">● UPCOMING</span>
        <span>🏟️ {match.venue}</span>
      </div>

      <h3>{match.match_name}</h3>

      <div className="teams">
        <div className="team">
          <div className="team-logo">🏏</div>
          <strong>{match.team_a}</strong>
        </div>

        <span className="vs">VS</span>

        <div className="team">
          <div className="team-logo">🏏</div>
          <strong>{match.team_b}</strong>
        </div>
      </div>

      <div className="match-info">
        📅 {match.match_date}
      </div>

      <button
        className="book-btn"
        onClick={() => onBook(match)}
      >
        Book Ticket →
      </button>

    </div>
  )
}

export default MatchCard