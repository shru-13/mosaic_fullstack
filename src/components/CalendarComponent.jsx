import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import discuss from '../assets/bg.jpg';

const CalendarComponent = ({ events }) => {
  const [value, setValue] = useState(new Date());
  const [tooltip, setTooltip] = useState({ display: false, content: '', left: 0, top: 0 });

  const handleMouseEnter = (e, content) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({ 
      display: true, 
      content, 
      left: rect.left + window.scrollX, 
      top: rect.top + window.scrollY - 50 // Adjusted to position tooltip above the date
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ display: false, content: '', left: 0, top: 0 });
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventsOnDate = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
      if (eventsOnDate.length > 0) {
        return (
          <div
            className="event-indicator-container"
            onMouseEnter={(e) => handleMouseEnter(e, eventsOnDate.map(event => `${event.name}: ${event.description}`).join(' | '))}
            onMouseLeave={handleMouseLeave}
          >
            {eventsOnDate.map((event, index) => (
              <div key={index} className="event-indicator"></div>
            ))}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-content">
        <div className="left-section">
          <h1>Welcome to the Literature Club</h1>
        </div>
        <div className="calendar-container">
          <Calendar
            onChange={setValue}
            value={value}
            tileContent={tileContent}
          />
          {tooltip.display && (
            <div className="tooltip" style={{ left: tooltip.left, top: tooltip.top }}>
              {tooltip.content}
            </div>
          )}
        </div>
      </div>
      <div className="discussion-section">
        <h2>Discuss with us!</h2>
        <div className="image-container">
          <img src = {discuss} alt="Discussion" /> {/* Use the local image path here */}
        </div>
      </div>
      <style jsx>{`
        .calendar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          background: url('/study-7217599.jpg') no-repeat center center fixed;
          background-size: cover;
          padding: 80px;
        }
        .calendar-content {
          display: flex;
          align-items: center;
          margin-bottom: 40px; /* Space for the discussion section */
        }
        .left-section {
          width: 40%; /* Increased width */
          max-width: 550px; /* Adjusted max width */
          margin-right: 20px;
          background: transparent; /* Removed background color */
          border-radius: 10px;
          padding: 30px;
          color: #E2E2B6; /* Light text color */
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15rem; /* Increased text size */
          font-weight: bold; /* Made text bolder */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for chic look */
        }
        .calendar-container {
          width: 60%; /* Increased width */
          max-width: 600px; /* Adjusted max width */
          margin: auto;
          position: relative;
          background: transparent; /* Removed background color */
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Added shadow for chic look */
        }
        .react-calendar {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #dfe1e5;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .react-calendar__tile--now {
          background: #3d2b1f; /* Dark brown color */
          color: white;
        }
        .event-indicator-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .event-indicator {
          width: 10px; /* Slightly larger dots */
          height: 10px;
          background-color: #6EACDA; /* Dot color */
          border-radius: 50%;
          margin: 3px; /* Increased margin */
        }
        .tooltip {
          position: absolute;
          background-color: #021526;
          color: #E2E2B6;
          padding: 8px;
          border-radius: 4px;
          font-size: 14px;
          max-width: 250px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 1000;
        }
        .discussion-section {
          width: 100%;
          max-width: 1200px; /* Max width for the section */
          text-align: center;
          margin-top: 40px;
          padding: 20px;
        }
        .discussion-section h2 {
          font-size: 4rem; /* Large text size */
          font-weight: bold;
          color: #E2E2B6; /* Light text color */
          margin-bottom: 20px;
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-container img {
          width: 100%;
          max-width: 1000px; /* Max width for the image */
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CalendarComponent;