import './css/user.css';
import './css/button.css';
import Modify from './Modify';

function Memo() {
  const data = {
    title: '안녕하세요.',
    content: '반갑습니다.',
    img: 'https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c9f17e489affba0627eb1eb39695f93dd',
  };
  return (
    <>
      <Modify data={data} />
      <li>
        <div className="memo-title-container">
          <div className="memo-title">메모제목</div>
          <div>2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <img
            className="memo-img"
            src="https://item.kakaocdn.net/do/b563e153db82fde06e1423472ccf192c9f17e489affba0627eb1eb39695f93dd"
          />
          <div className="memo-content">테스트 데이터입니다.</div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red">삭제</button>
        </div>
      </li>
      <hr className="rounded memo" />
      <li>
        <div className="memo-title-container">
          <div className="memo-title">난쟁이가 쏘아올린 작은 공</div>
          <div className="memo-date">2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <img
            className="memo-img"
            src="https://image.yes24.com/Goods/141729/XL"
          />
          <div>
            《난쟁이가 쏘아올린 작은 공》은 주인공 난쟁이네 가족을 통해 1970년대
            대한민국 도시 빈민층의 삶을 통해 좌절과 애환을 다룬 조세희의 연작
            소설이다. 줄여서 《난쏘공》이라 칭하기도 한다. 1975년에 발표한 작품
            〈칼날〉을 시작으로 1978년 〈에필로그〉까지 12편으로 완성되었다.
            1978년 6월 5일에 책으로 출간된 이 소설은 1979년 제 13회 동인문학상을
            수상하였다. 극단 세실에 의해 1979년에 채윤일의 연출로 처음 무대에
            올려졌고, 1981년에는 이원세 감독의 영화로도 만들어졌다.
          </div>
        </div>
      </li>
      <div className="memo-button-container">
        <button className="btn">수정</button>
        <button className="btn red">삭제</button>
      </div>
      <hr className="rounded memo" />
      <li>
        <div className="memo-title-container">
          <div className="memo-title">난쟁이가 쏘아올린 작은 공</div>
          <div className="memo-date">2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <img
            className="memo-img"
            src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDhfMjI2/MDAxNTE4MDY0MDQxNjc1.X6VjMGWoiuwH1RUmsLAjGALRp_5A2d7Q4ilojFzPl04g.EXzmjqkpOqO8qYC5eglDnTKgRFBbx5gewBe5lYFlhJYg.PNG.steal10/1.png?type=w800"
          />
          <div>
            《난쟁이가 쏘아올린 작은 공》은 주인공 난쟁이네 가족을 통해 1970년대
            대한민국 도시 빈민층의 삶을 통해 좌절과 애환을 다룬 조세희의 연작
            소설이다. 줄여서 《난쏘공》이라 칭하기도 한다. 1975년에 발표한 작품
            〈칼날〉을 시작으로 1978년 〈에필로그〉까지 12편으로 완성되었다.
            1978년 6월 5일에 책으로 출간된 이 소설은 1979년 제 13회 동인문학상을
            수상하였다. 극단 세실에 의해 1979년에 채윤일의 연출로 처음 무대에
            올려졌고, 1981년에는 이원세 감독의 영화로도 만들어졌다.
          </div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red">삭제</button>
        </div>
      </li>
      <hr className="rounded memo" />
      <li>
        <div className="memo-title-container">
          <div className="memo-title">메모제목</div>
          <div>2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <div className="memo-content">
            《난쟁이가 쏘아올린 작은 공》은 주인공 난쟁이네 가족을 통해 1970년대
            대한민국 도시 빈민층의 삶을 통해 좌절과 애환을 다룬 조세희의 연작
            소설이다. 줄여서 《난쏘공》이라 칭하기도 한다. 1975년에 발표한 작품
            〈칼날〉을 시작으로 1978년 〈에필로그〉까지 12편으로 완성되었다.
            1978년 6월 5일에 책으로 출간된 이 소설은 1979년 제 13회 동인문학상을
            수상하였다. 극단 세실에 의해 1979년에 채윤일의 연출로 처음 무대에
            올려졌고, 1981년에는 이원세 감독의 영화로도 만들어졌다.
          </div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red">삭제</button>
        </div>
      </li>
      <hr className="rounded memo" />
      <li>
        <div className="memo-title-container">
          <div className="memo-title">난쟁이가 쏘아올린 작은 공</div>
          <div className="memo-date">2023-08-23</div>
        </div>
        <div className="memo-content-container">
          <img
            className="memo-img"
            src="https://cdn.imweb.me/upload/S20210807d1f68b7a970c2/7170113c6a983.jpg"
          />
          <div>《난쟁이가 쏘아올린 작은 공》</div>
        </div>
        <div className="memo-button-container">
          <button className="btn">수정</button>
          <button className="btn red">삭제</button>
        </div>
      </li>
      <hr className="rounded memo" />
    </>
  );
}

export default Memo;
