import React from 'react';
import { useCountdown } from './hooks/useCountdown';

const timer = ({ targetDate}) => {
    const [days, hours,minutes, seconds, tenths] = useCountdown(targetDate);
    //check if this works, could be a source of problems
    if(days<0){
        return <ExpiredNotice/>;
    } else {
        return (
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
        );
    }
};

const ExpiredNotice = () => {
    return (
      <div className="expired-notics">
          <span>You have run out of time!</span>
          <p>your final score was:</p>
      </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds, tenths }) => {
    return (
      <div className="show-counter">
        <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        >
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={tenths} type={'tenths'} isDanger={false} />

        </a>
      </div>
    );
  };

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default timer