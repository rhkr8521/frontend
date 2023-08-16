import React from 'react';
import Marker from './marker'; // 파일명 대소문자를 확인하여 수정
import markerData from '../test.json';

function Markers() {
  return (
    <>
      {markerData.map((item, index) => (
        <Marker
          key={index}
          data={{
            tag: item.tag,
            content: item.content,
            img: item.img,
            lat: item.lat,
            lng: item.lng,
            writer: item.writer,
          }}
        />
      ))}
    </>
  );
}

export default Markers;
