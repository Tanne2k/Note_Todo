import React from "react";

// const NotFound = () => {
//   return <div>NotFound</div>;
// };

// export default NotFound;

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img
        src="/404 Not Found.png"
        alt="404 Not Found"
        className="object-contain w-auto h-64"
      />

      <h1 className="mt-6 text-4xl font-bold text-slate-800">404 Not Found</h1>

      <p className="mt-3 text-xl font-semibold text-slate-600">
        Bạn đang đi vào vùng cần địa!
      </p>

      <a
        href="/"
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md rounded-2xl bg-primary hover:bg-primary-dark"
      >
        Quay về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
