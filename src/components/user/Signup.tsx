import './user.css';

// 회원가입
function Signup() {
  return (
    <div className="container">
      <h1>회원가입</h1>

      <form action="" method="post">
        <div className="input__block">
          <input type="text" placeholder="ID" className="input" id="ID" />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="Password"
            className="input"
            id="PW"
          />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="Repeat Password"
            className="input"
            id="Repeat_PW"
          />
        </div>
        <button type="submit" className="signup__btn">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;

/*
<div className="container">
      <h1>회원가입</h1>

      <ul className="links">
        <li>
          <a href="#" id="signin">
            SIGN UP
          </a>
        </li>
      </ul>

      <form action="" method="post">
        <div className="first-input input__block first-input__block">
          <input
            type="email"
            placeholder="Email"
            className="input"
            id="email"
          />
        </div>
        <div className="input__block">
          <input
            type="password"
            placeholder="Password"
            className="input"
            id="password"
          />
        </div>
        <div className="input__block repeat__password">
          <input
            type="password"
            placeholder="Repeat password"
            className="input repeat__password"
            id="repeat__password"
          />
        </div>
        <button className="signup__btn">회원가입</button>
      </form>
    </div>
*/

/*
<div className="container my-3" style={{ background: 'red' }}>
  <div className="my-3 border-bottom">
    <div>
      <h1>회원가입</h1>
    </div>
  </div>
  <form>
    <div className="mb-3">
      <label className="form-label">사용자ID</label>
      <input type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">비밀번호</label>
      <input type="password" className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">비밀번호 확인</label>
      <input type="password" className="form-control" />
    </div>
    <div className="mb-3">
      <label className="form-label">이메일</label>
      <input type="email" className="form-control" />
    </div>
    <button type="submit" className="signup__btn">
      회원가입
    </button>
  </form>
</div>
*/
