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
  );
};

export default HomePage;
