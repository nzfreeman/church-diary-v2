import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Statistics({ members, expenses }) {
  const monthly = {};
  members.forEach(m=>{
    m.transactions.forEach(t=>{
      const mth = t.date?.slice(5,7) || "??";
      if (!monthly[mth]) monthly[mth] = { month: mth, income: 0, expense: 0 };
      monthly[mth].income += Number(t.amount);
    });
  });
  expenses.forEach(e=>{
    const mth = e.date?.slice(5,7) || "??";
    if (!monthly[mth]) monthly[mth] = { month: mth, income: 0, expense: 0 };
    monthly[mth].expense += Number(e.amount);
  });

  const chartData = Object.values(monthly);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 월별 통계</h2>
      <BarChart width={350} height={250} data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#82ca9d" name="입금" />
        <Bar dataKey="expense" fill="#ff9999" name="지출" />
      </BarChart>
    </div>
  );
}
