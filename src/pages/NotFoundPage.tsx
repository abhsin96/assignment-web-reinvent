import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
