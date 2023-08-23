/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import './css/category.css';

function Tags() {
  // 쓰레기통 마커가 표시될 좌표 배열입니다
  const trashPositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
  ];

  // 화장실 마커가 표시될 좌표 배열입니다
  const toiletPositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ];

  // 공사중 마커가 표시될 좌표 배열입니다
  const constructionPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
  ];

  // 전체 마커가 표시될 좌표 배열입니다
  const allPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
    { lat: 37.49896834100913, lng: 127.02833986892401 },
    { lat: 37.49893267508434, lng: 127.02673400572665 },
    { lat: 37.49872543597439, lng: 127.02676785815386 },
    { lat: 37.49813096097184, lng: 127.02591949495914 },
    { lat: 37.497680616783086, lng: 127.02518427952202 },
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
    { lat: 37.498553760499505, lng: 127.02882598822454 },
    { lat: 37.497625593121384, lng: 127.02935713582038 },
    { lat: 37.49646391248451, lng: 127.02675574250912 },
    { lat: 37.49629291770947, lng: 127.02587362608637 },
    { lat: 37.49754540521486, lng: 127.02546694890695 },
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
    { lat: 37.49640072567703, lng: 127.02726459882308 },
    { lat: 37.49640098874988, lng: 127.02609983175294 },
    { lat: 37.49932849491523, lng: 127.02935780247945 },
    { lat: 37.49996818951873, lng: 127.02943721562295 },
  ];
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const allMenu: any = document.getElementById('allMenu');
    const trashMenu: any = document.getElementById('trashMenu');
    const toiletMenu: any = document.getElementById('toiletMenu');
    const constructionMenu: any = document.getElementById('constructionMenu');

    if (selectedCategory === 'all') {
      allMenu.className = 'menu_selected';
      trashMenu.className = 'not_selected';
      toiletMenu.className = 'not_selected';
      constructionMenu.className = 'not_selected';
    } else if (selectedCategory === 'trash') {
      allMenu.className = 'not_selected';
      trashMenu.className = 'menu_selected';
      toiletMenu.className = 'not_selected';
      constructionMenu.className = 'not_selected';
    } else if (selectedCategory === 'toilet') {
      allMenu.className = 'not_selected';
      trashMenu.className = 'not_selected';
      toiletMenu.className = 'menu_selected';
      constructionMenu.className = 'not_selected';
    } else if (selectedCategory === 'construction') {
      allMenu.className = 'not_selected';
      trashMenu.className = 'not_selected';
      toiletMenu.className = 'not_selected';
      constructionMenu.className = 'menu_selected';
    }
  }, [selectedCategory]);
  return (
    <>
      {selectedCategory === 'all' &&
        allPositions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      {selectedCategory === 'trash' &&
        trashPositions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      {selectedCategory === 'toilet' &&
        toiletPositions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      {selectedCategory === 'construction' &&
        constructionPositions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      <div className="category">
        <ul>
          <li
            id="allMenu"
            onClick={() => {
              setSelectedCategory('all');
            }}
          >
            모두
          </li>
          <li
            id="trashMenu"
            onClick={() => {
              setSelectedCategory('trash');
            }}
          >
            쓰레기통
          </li>
          <li
            id="toiletMenu"
            onClick={() => {
              setSelectedCategory('toilet');
            }}
          >
            화장실
          </li>
          <li
            id="constructionMenu"
            onClick={() => {
              setSelectedCategory('construction');
            }}
          >
            공사중
          </li>
        </ul>
      </div>
    </>
  );
}
export default Tags;
