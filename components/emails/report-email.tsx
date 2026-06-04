import {
  Html, Head, Body, Container, Heading, Text, Section,
  Row, Column, Hr, Preview,
} from "@react-email/components";

interface Props {
  businessName: string;
  netMonthlyIncome: number;
  totalRevenue: number;
  totalExpenses: number;
  breakEvenEnrollment: number;
  capacityUtilization: number;
  largestExpenseName: string;
  largestExpensePct: number;
  financialOverview: string;
  profitabilityStatus: string;
  enrollmentStatus: string;
  recommendations: { title: string; priority: string; description: string; impact: string }[];
  actionPlan: { phase: string; title: string; timeline: string; actions: string[] }[];
  expenseItems: { name: string; amount: number }[];
}

export function ReportEmail({
  businessName, netMonthlyIncome, totalRevenue, totalExpenses,
  breakEvenEnrollment, financialOverview, profitabilityStatus,
  enrollmentStatus, recommendations, actionPlan, expenseItems,
}: Props) {
  const isProfit = netMonthlyIncome >= 0;

  return (
    <Html>
      <Head />
      <Preview>{businessName} — Your AI Insight Report is ready</Preview>
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: 620, margin: "32px auto", backgroundColor: "#ffffff", borderRadius: 12, overflow: "hidden", border: "1px solid #e5e7eb" }}>

          {/* Header */}
          <Section style={{ backgroundColor: "#2B4BAA", padding: "32px 40px" }}>
            <Heading style={{ color: "#ffffff", fontSize: 22, margin: 0 }}>{businessName}</Heading>
            <Text style={{ color: "#bfdbfe", fontSize: 13, margin: "4px 0 0" }}>
              AI Insight Simulator Report · {new Date().toLocaleDateString()}
            </Text>
          </Section>

          <Section style={{ padding: "32px 40px 0" }}>
            <Heading as="h2" style={{ fontSize: 16, color: "#1f2937", marginBottom: 16 }}>Financial Snapshot</Heading>
            <Row>
              {[
                { label: "Net Monthly Income", value: `$${netMonthlyIncome.toLocaleString()}`, color: isProfit ? "#16a34a" : "#dc2626" },
                { label: "Total Revenue",       value: `$${totalRevenue.toLocaleString()}`,      color: "#1d4ed8" },
                { label: "Total Expenses",      value: `$${totalExpenses.toLocaleString()}`,     color: "#dc2626" },
                { label: "Break-Even",          value: `${breakEvenEnrollment} students`,        color: "#1d4ed8" },
              ].map((kpi) => (
                <Column key={kpi.label} style={{ width: "25%", paddingRight: 8 }}>
                  <Section style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 14px" }}>
                    <Text style={{ fontSize: 10, color: "#6b7280", margin: 0, textTransform: "uppercase" }}>{kpi.label}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: kpi.color, margin: "4px 0 0" }}>{kpi.value}</Text>
                  </Section>
                </Column>
              ))}
            </Row>
          </Section>

          <Section style={{ padding: "24px 40px 0" }}>
            <Heading as="h2" style={{ fontSize: 16, color: "#1f2937", marginBottom: 12 }}>Executive Summary</Heading>
            <Text style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: "0 0 8px" }}><strong>Financial Overview:</strong> {financialOverview}</Text>
            <Text style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: "0 0 8px" }}><strong>Profitability:</strong> {profitabilityStatus}</Text>
            <Text style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, margin: 0 }}><strong>Enrollment:</strong> {enrollmentStatus}</Text>
          </Section>

          <Section style={{ padding: "24px 40px 0" }}>
            <Heading as="h2" style={{ fontSize: 16, color: "#1f2937", marginBottom: 12 }}>Top Recommendations</Heading>
            {recommendations.slice(0, 4).map((r, i) => (
              <Section key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: "12px 16px", marginBottom: 8 }}>
                <Row>
                  <Column>
                    <Text style={{ fontSize: 13, fontWeight: 700, color: "#111827", margin: 0 }}>{r.title}</Text>
                    <Text style={{ fontSize: 12, color: "#6b7280", margin: "4px 0 0" }}>{r.description}</Text>
                    <Text style={{ fontSize: 11, color: "#3b82f6", margin: "4px 0 0" }}>Impact: {r.impact}</Text>
                  </Column>
                  <Column style={{ width: 64, textAlign: "right" }}>
                    <Text style={{
                      fontSize: 10, fontWeight: 700, display: "inline-block",
                      padding: "2px 8px", borderRadius: 9999,
                      backgroundColor: r.priority === "high" ? "#fee2e2" : r.priority === "medium" ? "#fef3c7" : "#dcfce7",
                      color: r.priority === "high" ? "#b91c1c" : r.priority === "medium" ? "#92400e" : "#166534",
                      margin: 0, textTransform: "capitalize",
                    }}>{r.priority}</Text>
                  </Column>
                </Row>
              </Section>
            ))}
          </Section>

          <Section style={{ padding: "24px 40px 0" }}>
            <Heading as="h2" style={{ fontSize: 16, color: "#1f2937", marginBottom: 12 }}>Action Plan</Heading>
            {actionPlan.map((p, i) => (
              <Section key={i} style={{ borderLeft: "4px solid #3b82f6", backgroundColor: "#eff6ff", borderRadius: "0 8px 8px 0", padding: "12px 16px", marginBottom: 8 }}>
                <Text style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", margin: 0 }}>{p.phase}: {p.title} <span style={{ fontWeight: 400, color: "#6b7280" }}>· {p.timeline}</span></Text>
                {p.actions.map((a, j) => (
                  <Text key={j} style={{ fontSize: 12, color: "#374151", margin: "4px 0 0" }}>• {a}</Text>
                ))}
              </Section>
            ))}
          </Section>

          <Section style={{ padding: "24px 40px 0" }}>
            <Heading as="h2" style={{ fontSize: 16, color: "#1f2937", marginBottom: 12 }}>Expense Breakdown</Heading>
            {expenseItems.map((e, i) => {
              const pct = totalExpenses > 0 ? ((e.amount / totalExpenses) * 100).toFixed(1) : "0";
              return (
                <Row key={i} style={{ borderBottom: "1px solid #f3f4f6", padding: "6px 0" }}>
                  <Column><Text style={{ fontSize: 13, color: "#374151", margin: 0 }}>{e.name}</Text></Column>
                  <Column style={{ textAlign: "right" }}><Text style={{ fontSize: 13, color: "#111827", fontWeight: 600, margin: 0 }}>${e.amount.toLocaleString()}</Text></Column>
                  <Column style={{ textAlign: "right", width: 60 }}><Text style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{pct}%</Text></Column>
                </Row>
              );
            })}
          </Section>

          <Hr style={{ margin: "32px 40px 0" }} />
          <Section style={{ padding: "16px 40px 32px" }}>
            <Text style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", margin: 0 }}>
              Sent by AI Insight Simulator · This report was generated automatically
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}