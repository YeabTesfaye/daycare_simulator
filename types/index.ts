export interface RevenueSourceInput {
  id?: string;
  name: string;
  amount: number;
  tag?: string;
}

export interface ExpenseItemInput {
  id?: string;
  name: string;
  amount: number;
  tag?: string;
}

export interface ClassroomInput {
  id?: string;
  name: string;
  capacity: number;
  staffRatio: number;
  enrolled: number;
}

export interface BusinessGoalInput {
  id?: string;
  name: string;
  targetValue: number;
  unit: string;
}

export interface SimulationFormData {
  businessName: string;
  operatingHours: number;
  operatingDays: number;
  revenueSources: RevenueSourceInput[];
  expenseItems: ExpenseItemInput[];
  classrooms: ClassroomInput[];
  businessGoals: BusinessGoalInput[];
}

export interface InsightData {
  netMonthlyIncome: number;
  breakEvenEnrollment: number;
  capacityUtilization: number;
  largestExpenseName: string;
  largestExpensePct: number;
  executiveSummary: {
    financialOverview: string;
    profitabilityStatus: string;
    enrollmentStatus: string;
    recommendations: string[];
  };
  recommendations: {
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    impact: string;
  }[];
  actionPlan: {
    phase: string;
    title: string;
    actions: string[];
    timeline: string;
  }[];
}


export interface TrendDataPoint {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface ExpenseDataPoint {
  name: string;
  value: number;
  pct: number;
  color: string;
}

export interface MonthlyProfitDataPoint {
  month: string;
  profit: number;
}

export interface ProfitMetrics {
  profitPerStudent: number;
  capacityUtilization: number;
  monthlyNetProfit: number;
}