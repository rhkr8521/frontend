import './user.css';

// 로그인
function Signin() {
  return (
    <>
      <div className="container">
        <h1>로그인</h1>

        <form action="" method="post">
          <div className="input__block">
            <input type="ID" placeholder="ID" className="input" id="ID" />
          </div>
          <div className="input__block">
            <input
              type="password"
              placeholder="Password"
              className="input"
              id="password"
            />
          </div>
          <div className="input__block">
            <input
              type="password"
              placeholder="Repeat password"
              className="input repeat__password"
              id="repeat__password"
            />
          </div>
          <button className="signin__btn">로그인</button>
        </form>
      </div>
    </>
  );
}

export default Signin;

/*
<div className="container my-3" style={{ background: 'yellow' }}>
      <div className="my-3 border-bottom">
        <div>
          <h4>로그인</h4>
        </div>
      </div>
      <form method="post">
        <div className="mb-3">
          <label className="form-label">사용자ID</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">비밀번호</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">이메일</label>
          <input type="email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          로그인
        </button>
      </form>
      <div className="container">
        <button className="btn btn-secondary">회원가입</button>
        <a>아이디/비밀번호 찾기</a>
      </div>
    </div>
*/
