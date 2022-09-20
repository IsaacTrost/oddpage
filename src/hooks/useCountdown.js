import {useEffect, useState} from 'react';

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 100);

        return () => clearInterval(interval);
    }, [countDownDate]);
    
    return getReturnValies(countDown);
};

const getReturnValues = (countDown) => {

    const days = math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = math.floor(
        (countDown % (1000 * 60 * 60 * 24)) /  1000 * 60 *60);
    const minutes = math.floor((countDown%(1000 * 60* 60))/(1000*60));
    const seconds = math.floor((countDown% (1000*60))/1000);
    const tenths = math.floor((countDown%1000)/100)
    return [days, hours, minutes, seconds, tenths];

};

export {useCountdown};