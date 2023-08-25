import { useState } from 'react';
import './css/user.css';
import './css/button.css';
import './css/modify.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modify(props: any) {
  const [title, setTitle] = useState(props.data.title);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, setImage] = useState(props.data.img);
  const [content, setContent] = useState(props.data.content);

  console.log(title, image, content);
  return (
    <>
      <li>
        <div className="memo-title-container">
          <div>
            <input
              type="text"
              className="title-modify"
              placeholder="제목"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <label className="title-label"></label>
          </div>
          <div>2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            onChange={(e) => {
              setImage(e.target.files);
              console.log('upload');
              console.log(image);
            }}
          />
        </div>
        <textarea
          className="content-modify"
          placeholder="내용"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <div className="memo-button-container">
          <button className="btn green">저장</button>
        </div>
      </li>
      <hr className="rounded memo" />
    </>
  );
}

export default Modify;
