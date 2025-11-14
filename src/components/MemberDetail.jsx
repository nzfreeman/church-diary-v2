import React from "react";
import { useParams, Link } from "react-router-dom";

export default function MemberDetail({ members }) {
  const { id } = useParams();
  const member = members.find(m => m.id === Number(id));
  if (!member) return <p>회원 정보를 찾을 수 없습니다.</p>;

  const addTransaction = () => {
    const date = prompt("날짜 (YYYY-MM-DD):");
    const amount = prompt("금액:");
    const note = prompt("비고:");
    member.transactions.push({ date, amount: Number(amount), note });
    localStorage.setItem("members", JSON.stringify(members));
    window.location.reload();
  };

  return (
    <div>
      <Link to="/members" className="text-blue-600 underline">← 회원 목록으로</Link>
      <h2 className="text-xl font-bold mt-4 mb-2">{member.name} 님의 입금 내역</h2>
      <button onClick={addTransaction} className="bg-rose-300 px-3 py-1 rounded mb-3">입금 추가</button>

      <table className="w-full border text-sm">
        <thead className="bg-rose-100">
          <tr><th>날짜</th><th>금액</th><th>비고</th></tr>
        </thead>
        <tbody>
          {member.transactions.map((t, i)=>(
            <tr key={i} className="border-t"><td>{t.date}</td><td>{t.amount.toLocaleString()}원</td><td>{t.note}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
