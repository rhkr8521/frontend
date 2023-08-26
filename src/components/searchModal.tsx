/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'react-modal';
import { useState } from 'react';
import Markers from './markers';
import axios from 'axios';
import './css/modal.css';

function SearchModal(props: any) {
  const [modal, setModal] = useState(true);
  const [data, setData] = useState();

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '11',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '80%',
      zIndex: '12',
      maxHeight: '28%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      justifyContent: 'center',
      overflow: 'auto',
    },
  };

  const [values, setValues] = useState();

  const handleChange = (e: any) => {
    setValues(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        'https://mapping.kro.kr:81/memo/content_search?content=' + values,
      );
      console.log(values, '검색');
      setData(response.data);
    } catch (error) {
      console.error('검색에 실패했습니다.', error);
    }
    setModal(false); //입력 창 닫기
  };

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={props.endBtn}
        style={customModalStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal">
          <h2>검색어 입력</h2>
          <form
            onSubmit={handleSubmit}
            method="get"
            encType="multipart/form-data"
          >
            <p>
              검색할 내용 :
              <input
                type="text"
                name="search"
                value={values || ''}
                onChange={handleChange}
              />
            </p>
            <div className="buttons">
              <button type="submit" className="save-button">
                검색
              </button>
              <button onClick={props.endBtn} className="close-button">
                닫기
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {data && <Markers data={data} />}
    </>
  );
}
export default SearchModal;
