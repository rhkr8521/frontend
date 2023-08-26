import { SetStateAction, useState } from 'react';
import axios from 'axios';
import './css/user.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Signup(props: any) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkingPassword, setCheckingPassword] = useState('');
  const [message, setMessage] = useState('');
  const [blankMessage, setBlankMessage] = useState('');

  const onChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    checkingBlank();
  };
  const onChangeName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
    checkingBlank();
  };
  const onChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    checkingBlank();
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
    if (email && password && checkingPassword && name) {
      setBlankMessage('');
    } else {
      setBlankMessage('빈칸이 있습니다.');
    }
  };

  const closeSignup = () => {
    props.signup();
    props.close();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userEmail', email);
    formData.append('userPassword', password);
    formData.append('userPasswordcheck', checkingPassword);
    formData.append('userNickname', name);

    try {
      const result = await axios.post(
        'https://mapping.kro.kr:81/api/auth/signUp',
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(result);
      if (result.data.result) {
        alert('회원이 성공적으로 생성되었습니다. \n다시 로그인 해주세요.');
        window.location.reload();
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      console.error('회원 생성에 실패했습니다.', error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="signin-close-button"
        onClick={closeSignup}
      />
      <div className="container">
        <h1>회원가입</h1>

        <form action="" method="post">
          <div className="input__block">
            <input
              type="email"
              placeholder="이메일"
              className="input"
              id="email"
              onChange={onChangeEmail}
            />
          </div>
          <div className="input__block">
            <input
              type="text"
              placeholder="닉네임"
              className="input"
              id="name"
              maxLength={8}
              onChange={onChangeName}
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
          {email && name && password && checkingPassword ? (
            <button
              type="submit"
              className="signup__btn"
              onClick={handleSubmit}
            >
              회원가입
            </button>
          ) : (
            <button
              type="button"
              className="signup__btn"
              onClick={checkingBlank}
            >
              회원가입
            </button>
          )}
        </form>
        <div className="sign__link" onClick={props.signup}>
          로그인
        </div>
      </div>
    </>
  );
}

export default Signup;
