import Memo from './Memos';
import './user.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function Mypage(props: any) {
  return (
    <div className="memo-container">
      <hr className="rounded" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <h2>나의 메모</h2>
        <button type="button" className="memo-close-button" />
      </div>
      <p className="my-page">ID</p>
      <p className="my-page-id">hi {props.Id}</p>
      <hr className="rounded" style={{ marginTop: 15 }} />

      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        <Memo />
      </ul>
    </div>
  );
}

export default Mypage;
