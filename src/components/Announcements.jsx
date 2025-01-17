import React from 'react';
import styles from '../style';


const Announcements = () => {
  return (
    <section id='announcements'className='flex-row flex-wrap sm:mt-20 mt-6 text-white'>
        <div>
            <p className={`${styles.heading2}`}>
                Announcements
            </p>
        </div>
        
          <div className="scrolling-lines text-white font-big">
            <div className='scroll-box'>
              <div className="line"> Editorial is out now! </div>
              <div className="line"> Prizes worth ₹60k up for grabs. </div>
              <div className="line"> Exciting news! We will soon be launching exclusive merchandise very soon. </div>
              <div className="line"> Participation certificate to all the participants. </div>
              <div className="line"> Editorial is out now! </div>
            </div>       
          </div>
    </section>
  );
};

export default Announcements;
