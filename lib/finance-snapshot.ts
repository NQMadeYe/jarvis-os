import { FINANCE_IMPORT } from "./finance-import";
import { financeTotals } from "./finance-math";

export type FinanceDebt = { name: string; balance: number; apr: number | null; minimum: number | null; due: string | null; ownership: "PERSONAL" | "AUTHORIZED_USER"; limit: number | null };
export type FinanceGoalReadiness = { name: string; state: "RED" | "YELLOW" | "GREEN" | "SETUP"; progress: number | null; current: string; target: string; blocker: string };
export function getNextNetWorthMilestone(netWorth: number) {
  const step = netWorth < 100000 ? 5000 : 10000;
  const floor = Math.floor(Math.max(0, netWorth) / step) * step;
  return { floor, target: floor + step, step, progress: Math.max(0, Math.min(100, (netWorth - floor) / step * 100)) };
}
const totals = financeTotals(FINANCE_IMPORT.accounts);
export const NET_WORTH_MILESTONE = getNextNetWorthMilestone(totals.personalNetWorth);
export const FINANCE_SNAPSHOT = {
  ...totals, importedAt: FINANCE_IMPORT.asOf, source: FINANCE_IMPORT.source,
  connectionCount: FINANCE_IMPORT.connectionCount, accountCount: FINANCE_IMPORT.accounts.length,
  transactionHistory: FINANCE_IMPORT.transactionHistory, recurringHistory: FINANCE_IMPORT.recurringHistory,
  currentStage: totals.personalDebt > 0 ? "DEBT" : "STABILITY", nextStage: "STABILITY",
  nextNetWorthMilestone: NET_WORTH_MILESTONE.target, netWorthMilestoneStep: NET_WORTH_MILESTONE.step,
  note: FINANCE_IMPORT.note,
};
export const FINANCE_DEBTS: FinanceDebt[] = FINANCE_IMPORT.accounts.filter(a => a.type === "credit").map(a => {
  const liability = FINANCE_IMPORT.liabilities.find(l => l.accountKey === a.key);
  return { name: a.name, balance: a.current, apr: liability?.apr ?? null, minimum: liability?.minimum ?? null,
    due: liability?.due ?? null, ownership: a.ownership === "AUTHORIZED_USER" ? "AUTHORIZED_USER" : "PERSONAL", limit: a.limit };
});
export const FINANCE_ACCOUNT_PURPOSES = FINANCE_IMPORT.accounts.map(a => ({ institution: a.institution, role: a.role, detail: `${a.name} · $${a.current.toFixed(2)} reported balance` }));
export const FINANCE_GOALS: FinanceGoalReadiness[] = [];
export const FINANCE_STAGES = ["DEBT", "STABILITY", "RESERVES", "CREDIT", "CAPITAL", "INVESTING", "ASSETS"] as const;
