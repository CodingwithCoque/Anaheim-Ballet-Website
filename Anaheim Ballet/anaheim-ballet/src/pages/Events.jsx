import { useState } from "react";
import "../styles/events.css";
import eventsHero from "../assets/images/events-hero.jpg";
import nutcracker from "../assets/images/events/nutcracker.jpg"
import events2 from "../assets/images/events/events2.jpg"


const eventsData = [
  {
    id: 1,
    day: 7,
    title: "Anaheim Tree Lighting Ceremony",
    date: "December 7, 2025",
    time: "6:00 PM - 6:30 PM",
    location: "Anaheim City Hall ",
    address: "2200 E Katella Ave, Anaheim, CA",
    image: events2,
    description:
      "Ring in the holidays with a Tree Lighting celebration, and you’ll be treated to a brief performance by some of your favorite AB Nutcracker characters! Visit Downtown Anaheim for holiday entertainment, food, and fun starting during the day. Guests will enjoy a variety of holiday happenings including dog costume contest, holiday crafts, unique shopping, pictures with Santa, culminating with the 6:00pm Tree Lighting Ceremony in front of City Hall.",
  },
  {
    id: 2,
    day: 11,
    title: "The Nutcracker",
    date: "December 11, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Don Laughlin's Riverside Resort",
    address: "1650 S. Casino Dr, Laughlin, NV 89029",
    image: nutcracker,
    description:
      "The holiday season comes to life in Anaheim Ballet's Nutcracker, the heartwarming tale of Clara and her Nutcracker Doll who changes her woeful winter into a fanciful feast in Candyland. The Nutcracker ballet is a cornerstone of seasonal family entertainment and tradition. Anaheim Ballet's full-length Nutcracker is the production you and your family must see, a story presented with heart as only AB can present it, more than dance... Experience the spectacle of a towering Christmas tree, waltzing flowers, battling toy soldiers and menacing mice. The enduring theme remains unchanged-good overcomes evil-but AB's staging of the family classic is constantly updated, which keeps the production fresh. Anaheim Ballet celebrates its 39th season of Nutcracker performances featuring staging and choreography by Sarma Lapenieks Rosenberg, Anaheim Ballet’s acclaimed Artistic Director.",
    ticketUrl: "https://www.riversideresort.com/event/the-nutcracker-ballet/"
  },
  {
    id: 3,
    day: 12,
    title: "The Nutcracker",
    date: "December 12, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Don Laughlin's Riverside Resort",
    address: "1650 S. Casino Dr, Laughlin, NV 89029",
    image: nutcracker,
    description:
      "The holiday season comes to life in Anaheim Ballet's Nutcracker, the heartwarming tale of Clara and her Nutcracker Doll who changes her woeful winter into a fanciful feast in Candyland. The Nutcracker ballet is a cornerstone of seasonal family entertainment and tradition. Anaheim Ballet's full-length Nutcracker is the production you and your family must see, a story presented with heart as only AB can present it, more than dance... Experience the spectacle of a towering Christmas tree, waltzing flowers, battling toy soldiers and menacing mice. The enduring theme remains unchanged-good overcomes evil-but AB's staging of the family classic is constantly updated, which keeps the production fresh. Anaheim Ballet celebrates its 39th season of Nutcracker performances featuring staging and choreography by Sarma Lapenieks Rosenberg, Anaheim Ballet’s acclaimed Artistic Director.",
    ticketUrl: "https://www.riversideresort.com/event/the-nutcracker-ballet/"
  },
  {
    id: 4,
    day: 13,
    title: "The Nutcracker",
    date: "December 13, 2025",
    time: ["3:00 PM - 5:00 PM ", " & ", " 7:00 PM - 9:00 PM"],
    location: "Don Laughlin's Riverside Resort",
    address: "1650 S. Casino Dr, Laughlin, NV 89029",
    image: nutcracker,
    description:
      "The holiday season comes to life in Anaheim Ballet's Nutcracker, the heartwarming tale of Clara and her Nutcracker Doll who changes her woeful winter into a fanciful feast in Candyland. The Nutcracker ballet is a cornerstone of seasonal family entertainment and tradition. Anaheim Ballet's full-length Nutcracker is the production you and your family must see, a story presented with heart as only AB can present it, more than dance... Experience the spectacle of a towering Christmas tree, waltzing flowers, battling toy soldiers and menacing mice. The enduring theme remains unchanged-good overcomes evil-but AB's staging of the family classic is constantly updated, which keeps the production fresh. Anaheim Ballet celebrates its 39th season of Nutcracker performances featuring staging and choreography by Sarma Lapenieks Rosenberg, Anaheim Ballet’s acclaimed Artistic Director.",
    ticketUrl: "https://www.riversideresort.com/event/the-nutcracker-ballet/"
  },
  {
    id: 5,
    day: 14,
    title: "The Nutcracker",
    date: "December 14, 2025",
    time: ["3:00 PM - 5:00 PM "],
    location: "Don Laughlin's Riverside Resort",
    address: "1650 S. Casino Dr, Laughlin, NV 89029",
    image: nutcracker,
    description:
      "The holiday season comes to life in Anaheim Ballet's Nutcracker, the heartwarming tale of Clara and her Nutcracker Doll who changes her woeful winter into a fanciful feast in Candyland. The Nutcracker ballet is a cornerstone of seasonal family entertainment and tradition. Anaheim Ballet's full-length Nutcracker is the production you and your family must see, a story presented with heart as only AB can present it, more than dance... Experience the spectacle of a towering Christmas tree, waltzing flowers, battling toy soldiers and menacing mice. The enduring theme remains unchanged-good overcomes evil-but AB's staging of the family classic is constantly updated, which keeps the production fresh. Anaheim Ballet celebrates its 39th season of Nutcracker performances featuring staging and choreography by Sarma Lapenieks Rosenberg, Anaheim Ballet’s acclaimed Artistic Director.",
    ticketUrl: "https://www.riversideresort.com/event/the-nutcracker-ballet/"
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(eventsData[0]);

  const daysInMonth = 31;
  const startDayOffset = 0; //Reminder that Jan starts on Thursday

  return (
    <div className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <img src={eventsHero} alt="Anaheim Ballet Performances" />
        <div className="events-hero-text">
          <h1>Upcoming Performances</h1>
          <p>Experience ballet on stage, in the community, and beyond</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="events-content">

        {/* CALENDAR */}
        <div className="events-calendar">
          <h2>December</h2>

          <div className="calendar-header">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="calendar-day empty"></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const event = eventsData.find(e => e.day === day);

              return (
                <div
                  key={day}
                  className={`calendar-day ${event ? "has-event" : ""}`}
                  onClick={() => event && setSelectedEvent(event)}
                >
                  <span>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* EVENT DETAILS */}
        <div className="event-details">
          <img src={selectedEvent.image} alt={selectedEvent.title} />

          <div className="event-info">
            <h2>{selectedEvent.title}</h2>
            <p className="event-meta">
              {selectedEvent.date} • {selectedEvent.time}
            </p>

            <p className="event-location">
              <strong>{selectedEvent.location}</strong><br />
              {selectedEvent.address}
            </p>

            <p className="event-description">
              {selectedEvent.description}
            </p>

            <a
              href={selectedEvent.ticketUrl}
              className="tickets-btn"
              target="_blank"
              rel="noreferrer"
            >
              Buy Tickets
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
