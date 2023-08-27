import './css/user.css';
import './css/button.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
//import Modify from './Modify';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function Memo(props: any) {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken; // 쿠키에서 token 를 꺼내기

  const handleDelete = async () => {
    const token = accessToken;
    const memoId = props.data.id;

    const result = confirm('메모를 삭제 하시겠습니까?');
    if (result) {
      try {
        const response = await axios.get(
          `https://mapping.kro.kr:81/api/memo/delete?id=${memoId}`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 200) {
          alert('메모가 성공적으로 삭제되었습니다');
          window.location.reload();
        } else {
          alert('메모 삭제 실패');
        }
      } catch (error) {
        console.error('메모 삭제 에러', error);
      }
    }
  };
  return (
    <>
      {/* <Modify data={props.data} /> */}
      <li>
        <div className="memo-title-container">
          <div className="memo-title">{props.data.tag}</div>
          <div>{props.data.date}</div>
        </div>
        <div className="memo-content-container">
          {props.data.img != 'null' && (
            <img className="memo-img" src={props.data.img} />
          )}
          <div className="memo-content">{props.data.content}</div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </li>
      <hr className="rounded memo" />
    </>
  );
}

export default Memo;
