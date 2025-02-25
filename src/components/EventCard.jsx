import './EventCard.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
function EventCard({ type, title, date, time, location, organizer, description, image, link }) {
  const handleRegister = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-content">
        <h2 className="event-title">{title}</h2>
        <div className="event-info">
          <div className="info-item">
            <span>📅</span>
            <span>{date}</span>
          </div>
          <div className="info-item">
            <span>⏰</span>
            <span>{time}</span>
          </div>
          <div className="info-item">
            <span>📍</span>
            <span>{location}</span>
          </div>
          <div className="info-item">
            <span>👥</span>
            <span>{organizer}</span>
          </div>
        </div>

        <p className="description">{description}</p>
        
        <button className="register-btn" onClick={handleRegister}>
          Register Now <span>↗</span>
        </button>
      </div>
    </div>
  )
}

EventCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default EventCard 