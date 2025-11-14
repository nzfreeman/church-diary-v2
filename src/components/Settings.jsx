import React from "react";

export default function Settings({ setMembers, setExpenses }) {
  const resetAll = () => {
    if (window.confirm("모든 데이터를 초기화하시겠습니까?")) {
      localStorage.clear();
      setMembers([]);
      setExpenses([]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">⚙️ 설정</h2>
      <button onClick={resetAll} className="bg-red-300 px-3 py-1 rounded">모든 데이터 초기화</button>
      <p className="mt-2 text-gray-600">데이터는 브라우저에만 저장됩니다.</p>
    </div>
  );
}
