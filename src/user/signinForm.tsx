import './user.css';

function SigninForm() {
  return (
    <div className="container my-3">
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
          <button type="submit" className="btn btn-primary">로그인</button>
      </form>
      <div className="container">
        <button className="btn btn-secondary">회원가입</button>
        <a>아이디/비밀번호 찾기</a>
      </div>
  </div>
  );
}

export default SigninForm;
