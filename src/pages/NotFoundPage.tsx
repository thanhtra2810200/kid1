import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-heading text-6xl font-extrabold text-ink-900">
        404
      </h1>
      <p className="mt-4 max-w-md font-body text-lg text-ink-600">
        Xin lỗi, trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Về trang chủ
      </Link>
    </div>
  );
}
