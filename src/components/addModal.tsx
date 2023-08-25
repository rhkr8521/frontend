/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'react-modal';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './css/modal.css';
import axios from 'axios';

function AddModal(props: any) {
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
      minHeight: '47%',
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
  const [tag, setTag] = useState('기타');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [cookies] = useCookies(['accessToken']);
  //const [writer, setWriter] = useState('');
  //작성자는 따로 비동기 코드를 작성해서 저장한다

  const handleTagChange = (e: any) => {
    setTag(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tag', tag);
    formData.append('content', content);
    formData.append('lat', props.data.lat);
    formData.append('lng', props.data.lng);
    if (image) {
      formData.append('file', image);
    }

    try {
      const token = cookies.accessToken; // 쿠키에서 token 를 꺼내기
      await axios.post('http://mapping.kro.kr:8080/api/memo/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('메모가 성공적으로 생성되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('메모 생성에 실패했습니다.', error);
    }
    props.close(); //입력 창 닫기
    props.markerSign(); //마커 추가 활성화 버튼 끄기
    //window.location.reload();
  };

  return (
    <>
      <Modal
        isOpen={props.modalState}
        onRequestClose={props.close}
        style={customModalStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal">
          <h2>메모 작성</h2>
          <form onSubmit={handleSubmit}>
            <p>
              태그:
              <select name="tag" value={tag} onChange={handleTagChange}>
                <option value="기타">기타</option>
                <option value="쓰레기통">쓰레기통</option>
                <option value="화장실">화장실</option>
                <option value="공사중">공사중</option>
              </select>
            </p>
            <p>
              내용:
              <textarea
                name="content"
                value={content}
                onChange={handleContentChange}
              />
            </p>
            <p>
              이미지:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </p>
            <div className="buttons">
              <button type="submit" className="save-button">
                저장
              </button>
              <button onClick={props.close} className="close-button">
                닫기
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
export default AddModal;
