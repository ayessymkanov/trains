import React from 'react';

export default function Station({ x, y, lineColor, iscurrent, nextStation }) {
  const backgroundColor = iscurrent ? 'white' : lineColor;
  const borderColor = iscurrent ? 'black' : 'transparent';
  const { x: x2, y: y2 } = nextStation || {};
  const xs = Math.pow(x2 - x, 2);
  const ys = Math.pow(y2 - y, 2);
  const width = Math.sqrt(xs + ys);
  const angle = Math.atan2(y2 - y, x2 - x) * 180 / Math.PI;
  
  return (
    <div className="station" style={{ top: y, left: x }}>
      <div className="stationOverlay" style={{ backgroundColor, zIndex: 1000, borderColor }} />
      {nextStation && <div className="connect" style={{ width, top: '50%', left: '50%', transform: `rotateZ(${angle}deg)`, background: lineColor }} />}
    </div>
  );
}