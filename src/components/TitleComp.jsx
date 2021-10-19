import React from 'react';

const TitleComp = ({title}) => {
    return (
        <div className="title-comp">
            <div className="bg-success line"></div>
            <h2 className="mx-5 heading-1">{title}</h2>
            <div className="bg-success line"></div>
        </div>
    );
};

export default TitleComp;
