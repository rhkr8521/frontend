import { SetStateAction, useState } from 'react';
import './user.css';

// 회원가입
function Signup() {
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkingPassword, setCheckingPassword] = useState('');
  const [message, setMessage] = useState('');
  const [blankMessage, setBlankMessage] = useState('');
  const onChangeId = (e: { target: { value: SetStateAction<string> } }) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeCheckingPassword = (e: { target: { value: any } }) => {
    const currentPassword = e.target.value;
    setCheckingPassword(currentPassword);
    if (password !== currentPassword) {
      setMessage('비밀번호가 다릅니다.');
    } else {
      setMessage('');
    }
    if (currentPassword === '') setMessage('');
  };
  const checkingBlank = () => {
    if (Id && password && checkingPassword) {
      setBlankMessage('');
    } else {
      setBlankMessage('빈칸이 있습니다.');
    }
  };
  return (
    <div className="container">
      <h1>회원가입</h1>

      <form action="" method="post">
        <div className="input__block">
          <input
            type="text"
            placeholder="아이디"
            className="input"
            id="ID"
            onChange={onChangeId}
          />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="비밀번호"
            className="input"
            id="PW"
            onChange={onChangePassword}
          />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="비밀번호 재입력"
            className="input"
            id="Repeat_PW"
            onChange={onChangeCheckingPassword}
          />
        </div>
        <div className={message ? 'message-active' : ''}>{message}</div>
        <div className={blankMessage ? 'message-active' : ''}>
          {blankMessage}
        </div>
        <button
          type={blankMessage ? 'button' : 'submit'}
          className="signup__btn"
          onClick={checkingBlank}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;
