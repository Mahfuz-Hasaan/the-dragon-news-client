import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div>
            <h2 className='font-bold py-2'>Q-Zone</h2>
            <div>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;