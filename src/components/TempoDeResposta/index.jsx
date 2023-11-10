import './TempoDeResposta.scss';
import { useEffect, useState, useRef } from 'react';
function TempoDeResposta({duration, onTimeUp}){
    const [counter, setCounter] = useState(0);
    const [progressBarLoad, setProgressBarLoad] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
           setCounter((cur) => cur + 1); 
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        setProgressBarLoad(100 * (counter / duration));
        if (counter === duration) {
            clearInterval(intervalRef.current);

            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }
    }, [counter])
    return (
        <div className="TempoDeResposta-container">
            <div 
            style={{
                width: `${progressBarLoad}%`,
                backgroundColor: `${
                    progressBarLoad < 40
                    ? 'lightgreen'
                    : progressBarLoad < 70
                    ? 'orange'
                    : 'red'
                }`
            }}
            
            className="progressBar"></div>
        </div>
    );
}
export default TempoDeResposta;