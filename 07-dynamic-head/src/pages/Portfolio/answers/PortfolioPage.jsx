import { Link } from 'react-router';

export function PortfolioPage() {
  return (
    <div className="page-content">
      <title>포트폴리오 - 내 프로젝트들</title>
      <meta
        name="description"
        content="저의 프로젝트들을 소개하는 포트폴리오 페이지입니다."
      />
      <meta property="og:title" content="포트폴리오 - 내 프로젝트들" />
      <meta
        property="og:description"
        content="React와 React Router로 만든 프로젝트들을 구경해보세요."
      />
      <meta property="og:image" content="/og-image.svg" />
      <meta property="og:image:alt" content="포트폴리오 대표 이미지" />

      <div className="page-header">
        <h1>포트폴리오</h1>
        <p>
          이 페이지의 헤드 정보를 확인하여, 오픈그래프 태그가 잘 적용되었는지
          확인해보세요.
        </p>
      </div>

      <Link to="/" className="back-link">
        홈 페이지로 이동
      </Link>
    </div>
  );
}
