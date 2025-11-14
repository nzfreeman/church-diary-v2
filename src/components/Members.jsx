import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import Expenses from "./components/Expenses";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";

export default function App() {
  const [members, setMembers] = useState(() => {
    const saved = localStorage.getItem("members");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [members, expenses]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-rose-200 p-4 text-center text-xl font-bold shadow">
        💒 여성선교회 다이어리 v2
      </header>
      <nav className="bg-rose-100 flex justify-around p-2 font-semibold">
        <Link to="/">🏠 홈</Link>
        <Link to="/members">👩 회원</Link>
        <Link to="/expenses">💰 지출</Link>
        <Link to="/stats">📊 통계</Link>
        <Link to="/settings">⚙️ 설정</Link>
      </nav>

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Dashboard members={members} expenses={expenses} />} />
          <Route path="/members" element={<Members members={members} setMembers={setMembers} />} />
          <Route path="/member/:id" element={<MemberDetail members={members} />} />
          <Route path="/expenses" element={<Expenses expenses={expenses} setExpenses={setExpenses} />} />
          <Route path="/stats" element={<Statistics members={members} expenses={expenses} />} />
          <Route path="/settings" element={<Settings setMembers={setMembers} setExpenses={setExpenses} />} />
        </Routes>
      </main>

      <footer className="bg-rose-100 text-center p-2 text-sm">
        © 2025 지구촌교회 여성선교회
      </footer>
    </div>
  );
}
