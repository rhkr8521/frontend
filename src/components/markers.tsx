/* eslint-disable @typescript-eslint/no-explicit-any */
import Marker from './marker'; // 파일명 대소문자를 확인하여 수정

function Markers(props: any) {
  return (
    <>
      {props.data.map((item: any, index: any) => (
        <Marker
          key={index}
          data={{
            tag: item.tag,
            content: item.content,
            img: item.img,
            lat: item.lat,
            lng: item.lng,
            writer: item.writer,
            date: item.date,
          }}
        />
      ))}
    </>
  );
}

export default Markers;
