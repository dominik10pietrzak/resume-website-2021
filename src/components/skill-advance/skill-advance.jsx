import React, { useEffect } from 'react';
import './skill-advance.scss';

const SkillAdvance = ({ advance, skillName }) => {


    useEffect(() => {
        const stars = document.querySelectorAll(`#${skillName} .star`);

        for (let i = 0; i < Math.floor(advance); i++) {
            stars[i].classList.add('active');
        }

        if (advance % 1 === 0.5) {
            stars[Math.floor(advance)].classList.add('half-cut');
        }
    })

    return (
        <div className="skill-advance" id={skillName}>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
        </div>
    );
}

export default SkillAdvance;