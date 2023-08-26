/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './css/category.css';
import Markers from './markers';

function Tags() {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() => {
    fetch('https://mapping.kro.kr:81/api/memo', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setAllPositions(data))
      .catch((error) => console.error(error));
  }, []);

  const [trashPositions, setTrashPositions] = useState([]);

  useEffect(() => {
    fetch('https://mapping.kro.kr:81/api/memo/tagsearch?tag=쓰레기통', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setTrashPositions(data))
      .catch((error) => console.error(error));
  }, []);

  const [toiletPositions, setToiletPositions] = useState([]);

  useEffect(() => {
    fetch('https://mapping.kro.kr:81/api/memo/tagsearch?tag=화장실', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setToiletPositions(data))
      .catch((error) => console.error(error));
  }, []);

  const [constructionPositions, setConstructionPositions] = useState([]);

  useEffect(() => {
    fetch('https://mapping.kro.kr:81/api/memo/tagsearch?tag=공사중', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setConstructionPositions(data))
      .catch((error) => console.error(error));
  }, []);

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
      {selectedCategory === 'all' && <Markers data={allPositions} />}
      {selectedCategory === 'trash' && <Markers data={trashPositions} />}
      {selectedCategory === 'toilet' && <Markers data={toiletPositions} />}
      {selectedCategory === 'construction' && (
        <Markers data={constructionPositions} />
      )}
      <div className="category">
        <ul>
          <li
            className="menu_selected"
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
