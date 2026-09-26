import type { FinanceAccountState, FinanceLiabilityState } from "./jarvis-runtime";

// Blank starter snapshot for a new Jarvis operator.
// Personal finance data is populated only after this operator connects their own sources.
export const FINANCE_IMPORT = {
  accounts: [],
  liabilities: [],
  mode: "SYNCED_SNAPSHOT",
  source: "NOT CONNECTED",
  asOf: "1970-01-01T00:00:00.000Z",
  connectionCount: 0,
  transactionHistory: "NOT CONNECTED",
  recurringHistory: "NOT CONNECTED",
  note: "No financial accounts are connected yet.",
} satisfies {
  accounts: FinanceAccountState[];
  liabilities: FinanceLiabilityState[];
  mode: "SYNCED_SNAPSHOT";
  source: string;
  asOf: string;
  connectionCount: number;
  transactionHistory: string;
  recurringHistory: string;
  note: string;
};
