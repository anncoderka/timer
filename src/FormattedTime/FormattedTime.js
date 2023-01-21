import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = millseconds => {
    let milliseconds = parseInt((millseconds % 1000))
    let seconds = parseInt((millseconds / 1000) % 60)
    let minutes = parseInt((millseconds / (1000 * 60)) % 60)
    let hours = parseInt((millseconds / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + String(milliseconds).padStart(3, '0');
   };

  return (
    <div className={styles.component}>
       {formatTime(time)}
    </div>
  );

};

export default FormattedTime;
