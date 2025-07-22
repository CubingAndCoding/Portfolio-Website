import React, { useState } from 'react';
import './Awards.css';

// Structured awards data for timeline UI
const awardsData = [
  {
    year: 2023,
    awards: [
      { month: 'Oct.', place: '🥇', event: 'Novice Computer Science UIL Programming', description: '1st Place Novice Computer Science UIL Programming' },
      { month: 'Dec.', place: '🥇', event: 'Novice Computer Science UIL Written', description: '1st Place Novice Computer Science UIL Written' },
      { month: 'Dec.', place: '🥈', event: 'Novice Computer Science UIL Programming', description: '2nd Place Novice Computer Science UIL Programming' },
    ],
  },
  {
    year: 2024,
    awards: [
      { month: 'Jan.', place: '🥉', event: 'Advanced Computer Science UIL Programming', description: '3rd Place Advanced Computer Science UIL Programming' },
      { month: 'Apr.', place: '🥇', event: 'Advanced Computer Science UIL Programming', description: '1st Place Advanced Computer Science UIL Programming' },
      { month: 'Apr.', place: '🥈', event: 'Advanced Computer Science UIL Written', description: '2nd Place Advanced Computer Science UIL Written' },
    ],
  },
  {
    year: 2025,
    awards: [
      { month: 'Mar.', place: '🥇', event: 'Cy-Fair District Computer Science UIL Programming', description: '1st Place Cy-Fair District Computer Science UIL Programming' },
      { month: 'Mar.', place: '🥇', event: 'Cy-Fair District Computer Science UIL Written', description: '1st Place Cy-Fair District Computer Science UIL Written' },
      { month: 'Mar.', place: '🥇', event: 'Regional (All ISDs combined in Houston Region) Computer Science UIL Programming', description: '1st Place Regional (All ISDs combined in Houston Region) Computer Science UIL Programming' },
      { month: 'Mar.', place: '🥇', event: 'Regional Computer Science UIL Written', description: '1st Place Regional Computer Science UIL Written' },
      { month: 'May', place: '🥈', event: 'Texas state Computer Science UIL Programming', description: '2nd Place Texas state Computer Science UIL Programming' },
    ],
  },
];

const monthOrder = [
  'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
];

const Awards: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(awardsData[0].year);
  const [active, setActive] = useState<{ month: string; idx: number } | null>(null);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setActive(null); // Clear active medal when switching years
  };

  const yearData = awardsData.find((y) => y.year === selectedYear)!;
  // Group awards by month
  const monthAwards: { [month: string]: typeof yearData.awards } = {};
  yearData.awards.forEach((award) => {
    if (!monthAwards[award.month]) monthAwards[award.month] = [];
    monthAwards[award.month].push(award);
  });

  // Find the range of months with awards
  const monthsWithAwards = monthOrder.filter((month) => monthAwards[month]);
  const firstIdx = monthsWithAwards.length > 0 ? monthOrder.indexOf(monthsWithAwards[0]) : 0;
  const lastIdx = monthsWithAwards.length > 0 ? monthOrder.indexOf(monthsWithAwards[monthsWithAwards.length - 1]) : monthOrder.length - 1;
  const visibleMonths = monthOrder.slice(firstIdx, lastIdx + 1);

  // Find the currently active award (if any)
  let activeAward: typeof yearData.awards[number] | null = null;
  if (active && monthAwards[active.month]) {
    activeAward = monthAwards[active.month][active.idx];
  }
  // Only show a default active award if the user hasn't interacted yet (active is null)
  const showDefault = active === null && monthsWithAwards.length > 0;
  if (showDefault) {
    const firstMonth = monthsWithAwards[0];
    activeAward = monthAwards[firstMonth][0];
  }

  // Responsive: vertical timeline for mobile
  const isMobile = window.innerWidth <= 700;

  return (
    <div className="page-container awards-page">
      <h1 className="center-heading">Awards</h1>
      {/* Year selector (to be further styled as a card/pill) */}
      <div className="awards-year-tabs">
        {awardsData.map((y) => (
          <button
            key={y.year}
            className={`awards-year-tab${selectedYear === y.year ? ' active' : ''}`}
            onClick={() => handleYearChange(y.year)}
          >
            {y.year}
          </button>
        ))}
      </div>
      {/* Timeline: horizontal for desktop, vertical for mobile */}
      {isMobile ? (
        <div className="awards-timeline-bar vertical">
          {visibleMonths.map((month) => (
            <div className="awards-timeline-month vertical" key={month}>
              <div className="awards-timeline-month-label">{month}</div>
              <div className="awards-timeline-medals">
                {monthAwards[month]?.map((award, i) => (
                  <div
                    key={i}
                    className={`awards-timeline-medal${
                      (active && active.month === month && active.idx === i) || (showDefault && month === monthsWithAwards[0] && i === 0)
                        ? ' active' : ''}`}
                    onMouseEnter={() => setActive({ month, idx: i })}
                    onFocus={() => setActive({ month, idx: i })}
                    tabIndex={0}
                  >
                    <span className="medal-emoji">{award.place}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="awards-timeline-scroll">
          <div className="awards-timeline-bar">
            {visibleMonths.map((month) => (
              <div className="awards-timeline-month" key={month}>
                <div className="awards-timeline-month-label">{month}</div>
                <div className="awards-timeline-medals">
                  {monthAwards[month]?.map((award, i) => (
                    <div
                      key={i}
                      className={`awards-timeline-medal${
                        (active && active.month === month && active.idx === i) || (showDefault && month === monthsWithAwards[0] && i === 0)
                          ? ' active' : ''}`}
                      onMouseEnter={() => setActive({ month, idx: i })}
                      onFocus={() => setActive({ month, idx: i })}
                      tabIndex={0}
                    >
                      <span className="medal-emoji">{award.place}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Persistent details card below timeline */}
      <div className="awards-details-section">
        {activeAward && (
          <div className="awards-timeline-card awards-details-card">
            <div className="awards-timeline-card-title">{activeAward.description}</div>
            <div className="awards-timeline-card-medal" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>{activeAward.place}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards; 