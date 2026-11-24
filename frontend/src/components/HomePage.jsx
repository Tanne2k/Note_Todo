// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       <h1 class="text-3xl font-bold underline">Hello world</h1>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";

import AddTask from "./AddTask";
import Header from "./Header";
import StateAndFilters from "./StateAndFilters";
import TaskList from "./TaskList";
import TaskListPagination from "./TaskListPagination";
import DateTimeFilter from "./DateTimeFilter";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#fff9f5] relative">
      {/* Warm Light Apricot & Coral */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* Đầu trang */}
          <Header />

          {/* Thêm công việc */}
          <AddTask />

          {/* Thống kê và bộ lọc */}
          <StateAndFilters />

          {/* Danh sách công việc */}
          <TaskList />

          {/* Phân trang và lọc theo ngày */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>

          {/* Chân trang */}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
