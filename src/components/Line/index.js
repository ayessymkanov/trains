import React from 'react';
import Station from '../Station';

export default function Line({ stations, lineColor, current }) {
  const st = stations.map((station, index) => {
    const nextStation = (index !== stations.length - 1) ? stations[index+1] : null;
    return <Station key={index} x={station.x} y={station.y} lineColor={lineColor} iscurrent={index === current} nextStation={nextStation} />
  });
  return (
    <div className="line">
      {st}
    </div>
  );
}