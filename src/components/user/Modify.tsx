/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'react-modal';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../css/modal.css';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modify(props: any) {
  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: ' rgba(0, 0, 0, 0.4)',
      width: '100%',
      height: '100vh',
      zIndex: '20',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    content: {
      width: '240px',
      zIndex: '21',
      height: '355px',
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
  console.log(props.data);
  const [tag, setTag] = useState(props.data.tag);
  const [content, setContent] = useState(props.data.content);
  const [image, setImage] = useState(props.data.img);
  const [cookies] = useCookies(['accessToken']);

  const handleTagChange = (e: any) => {
    setTag(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

    if (file && !allowedExtensions.exec(file.name)) {
      alert('이미지 파일만 업로드 가능합니다 :(');
      e.target.value = ''; // 파일 선택을 리셋합니다.
    } else {
      setImage(file);
    }
  };
  console.log(image);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const ipData = await fetch('https://geolocation-db.com/json/');
    const locationip = await ipData.json();
    const formData = new FormData();
    formData.append('tag', tag);
    formData.append('content', content);
    formData.append('lat', props.data.lat);
    formData.append('lng', props.data.lng);
    formData.append('ip', locationip.IPv4);
    if (image) {
      formData.append('file', image);
    }
    try {
      const token = cookies.accessToken; // 쿠키에서 token 를 꺼내기
      await axios.post(
        `https://mapping.kro.kr:81/api/memo/update/${props.data.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert('메모가 성공적으로 수정되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('메모 수정에 실패했습니다.', error);
    }
  };

  return (
    <>
      <Modal
        isOpen={props.state}
        onRequestClose={props.close}
        style={customModalStyles}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal">
          <h2>메모 수정</h2>
          <form onSubmit={handleSubmit}>
            <p>
              태그:
              <select name="tag" value={tag} onChange={handleTagChange}>
                <option value="기타">기타</option>
                <option value="쓰레기통">쓰레기통</option>
                <option value="화장실">화장실</option>
                <option value="공사중">공사중</option>
                <option value="음식점">음식점</option>
                <option value="카페">카페</option>
              </select>
            </p>
            <p>
              내용:
              <input
                type="text"
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

export default Modify;
