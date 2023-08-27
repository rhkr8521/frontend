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
      height: '280px',
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
  const [cookies] = useCookies(['accessToken']);

  const handleTagChange = (e: any) => {
    setTag(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };
  console.log(tag, content);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = cookies.accessToken; // 쿠키에서 token 를 꺼내기
      await axios.get(
        `https://mapping.kro.kr:81/api/memo/update/${props.data.id}`,
        {
          params: {
            content: content,
            writer: props.data.writer,
            lat: props.data.lat,
            lng: props.data.lng,
            tag: tag,
          },
          headers: {
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
