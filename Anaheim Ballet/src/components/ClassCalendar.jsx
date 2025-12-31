import { useState } from "react";
import JanuarySchedule from "../data/JanuarySchedule";
import "../styles/calendar.css";

const levels = [
  "Pre-Ballet 1",
  "Pre-Ballet 2",
  "Ballet 1",
  "Ballet 2",
  "Ballet 3",
  "Ballet 4",
  "Ballet 5",
  "Teen/Adult Beginning 1",
  "Teen/Adult Beginning 2",
  "Teen/Adult Intermediate",
  "STEP UP!"
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ClassCalendar() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const daysInJanuary = 31;
  const startDayOffset = 2; // Jan 1 = Wednesday (Mon = 0)

  // ✅ Get schedule for selected level safely
  const selectedSchedule =
    selectedLevel && JanuarySchedule[selectedLevel]
      ? JanuarySchedule[selectedLevel]
      : {};

  return (
    <section className="calendar-section">

      {/* LEVEL FILTER */}
      <h2 className="calendar-title">Select Class Level</h2>
      <div className="level-buttons">
        {levels.map((level) => (
          <button
            key={level}
            className={selectedLevel === level ? "active" : ""}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* MONTH TITLE */}
      <h2 className="calendar-title">January Class Schedule</h2>

      {/* DAY HEADERS */}
      <div className="month-grid headers">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="day-header">{d}</div>
        ))}
      </div>

      {/* MONTH GRID */}
      <div className="month-grid">
        {/* Empty cells before Jan 1 */}
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="day-cell empty"></div>
        ))}

        {/* Days 1–31 */}
        {Array.from({ length: daysInJanuary }).map((_, i) => {
          const dayNumber = i + 1;
          const weekday = daysOfWeek[(i + startDayOffset) % 7];
          const classes = selectedSchedule[weekday] || [];

          return (
            <div key={dayNumber} className="day-cell">
              <span className="day-number">{dayNumber}</span>

              {classes.length === 0 ? (
                <p className="no-class">No class</p>
              ) : (
                classes.map((time, idx) => (
                  <div key={idx} className="class-block">
                    <strong>{selectedLevel}</strong>
                    <span>{time}</span>
                  </div>
                ))
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
