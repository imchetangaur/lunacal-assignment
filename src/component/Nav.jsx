import "../index.css";

export const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex text-xs justify-around bg-gray-500 p-2 rounded-3xl xl:text-sm font-bold">
      <button
        className={`${
          activeTab === 0 ? "bg-gray-100 text-white" : "bg-gray-500"
        } px-4 py-2 xl:px-[24px] xl:py-[10px] rounded-2xl`}
        onClick={() => setActiveTab(0)}
      >
        About Me
      </button>
      <button
        className={`${
          activeTab === 1 ? "bg-gray-100 text-white" : "bg-gray-500"
        } px-4 py-2 xl:px-[24px] xl:py-[10px] rounded-2xl`}
        onClick={() => setActiveTab(1)}
      >
        Experiences
      </button>
      <button
        className={`${
          activeTab === 2 ? "bg-gray-100 text-white" : "bg-gray-500"
        } px-4 py-2 xl:px-[24px] xl:py-[10px] rounded-2xl`}
        onClick={() => setActiveTab(2)}
      >
        Recommended
      </button>
    </div>
  );
};
