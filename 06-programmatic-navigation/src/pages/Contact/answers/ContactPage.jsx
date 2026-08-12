import { useNavigate } from 'react-router';

export function ContactPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    alert('문의가 성공적으로 제출되었습니다!');
    navigate('/success', { replace: true });
  }

  return (
    <div className="container">
      <div className="card">
        <h2>문의하기</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">문의 내용</label>
            <textarea id="message" rows="4" />
          </div>
          <button type="submit" className="submit-button">
            제출
          </button>
        </form>
      </div>
    </div>
  );
}
