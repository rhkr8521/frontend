function SignupForm() {
    return (
      <div className="container my-3">
      <div className="my-3 border-bottom">
          <div>
              <h4>회원가입</h4>
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
          <button type="submit" className="btn btn-primary">회원가입</button>
      </form>
  </div>
    );
  }
  
  export default SignupForm;
  