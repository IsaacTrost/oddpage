import React from 'react';
import { useCountdown } from './hooks/useCountdown';

const Timer = ({ targetDate}) => {
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
              tenths={tenths}
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
        
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={tenths} type={'Tenths'} isDanger={false} />

        
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

export default Timer