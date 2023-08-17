function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex', // Flexbox를 사용하여 컨텐츠를 가운데 정렬
        flexDirection: 'column', // 세로 방향으로 정렬
        justifyContent: 'center', // 수직 가운데 정렬
        alignItems: 'center', // 수평 가운데 정렬
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Loading</h3>
      <img
        src={'public_assets/Loading.gif'}
        alt={'로딩'}
        style={{ display: 'block', margin: '0 auto', width: '20%' }}
      />
    </div>
  );
}

export default Loading;
