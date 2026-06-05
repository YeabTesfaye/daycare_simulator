# 🍼 AI Insight Simulator — Daycare Center Operations Platform

An AI-powered financial operations platform built for daycare center owners and operators. Input your real business data, run simulations, and receive GPT-4o-powered insights, staffing recommendations, and personalized action plans — all in a modern, production-ready Next.js dashboard.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-green?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Pages & Routes](#pages--routes)
- [Key Workflows](#key-workflows)
- [Email System](#email-system)
- [Deployment](#deployment)
- [Scripts](#scripts)

---

## Overview

The AI Insight Simulator helps daycare centers move from gut-feel decisions to data-driven operations. Owners enter their revenue sources, expense items, classroom data, and business goals. The platform computes financial metrics instantly and sends the data to OpenAI, which returns a structured executive summary, 5 prioritized recommendations, and a 3-phase action plan.

A standalone **Budget Simulation** tool lets owners model what-if scenarios — "what happens to profit if I raise tuition by $100 and enroll 5 more students?" — with live charts that update as they drag sliders, with no server round-trips required.

---

## Features

### 🔐 Authentication
- JWT-based auth (no NextAuth dependency)
- Login, register, logout
- Forgot password flow with email reset link (1-hour expiry, single-use tokens)
- Password strength indicator on registration

### 📊 Center Operations Simulator (3-Step Wizard)
- **Step 1 — Inputs:** Business name, revenue sources (dynamic rows), expense items, classroom data with staff ratios, operating hours/days, business goals
- **Step 2 — Insights:** AI-generated KPI dashboard — Net Monthly Income, Break-Even Enrollment, Largest Expense donut chart, Capacity Utilization gauge, Executive Summary, 5 prioritized recommendations, expense breakdown bar chart, PDF export
- **Step 3 — Next Steps:** Interactive checkbox action plan, live progress bar, performance rating (Excellent / Good / Needs Attention), Implementation Roadmap with 3 AI-generated phases

### 💰 Budget Simulation (Standalone)
- 8 interactive sliders: Student Count, Tuition Fee, Growth Rate, Staff Salaries, Facility Costs, Supplies, Administrative, Classroom Capacity
- Growth Period selector (Annually / Quarterly / Monthly) with correct compound math
- 4 live Recharts: Revenue & Expenses Trend (line), Expense Breakdown (pie), Profit Metrics (KPIs), Monthly Profit (bar)
- Save/load/delete named scenarios to database
- "Load from Simulation" button to pre-fill from real business data
- PDF export of all parameters and metrics
- Scenario switcher dropdown
- Industry benchmark warnings (staff cost ratio > 55%, over-capacity alerts)

### 👤 Profile Page
- Avatar with initials
- Gradient hero banner with simulation stats
- Inline name editing
- Recent simulations list with net income badges
- Quick links to all major sections

### ⚙️ Settings
- **Profile tab:** Update display name, read-only email display
- **Password tab:** Change password with 4-bar strength indicator, current password verification
- **Preferences tab:** Default growth rate & period (pre-fills Budget Simulation), currency (USD/EUR/GBP/CAD/AUD/ETB), fiscal year start, 4 notification toggles — all persisted to DB
- **Danger Zone:** Account deletion with typed confirmation, itemized list of what gets erased

### 📧 Email (Nodemailer + Gmail SMTP)
- Welcome email on registration (React Email template, daycare-themed)
- Password reset email with secure token link (React Email template)
- Fire-and-forget for welcome (registration never fails due to email)

### 🗂️ Dashboard Overview
- Simulation cards with status badges and net income
- Create new simulation shortcut
- 30-second cache with tag-based revalidation on mutations

### 🚫 Not Found Page
- Daycare-themed 404 with colorful alphabet block tiles spelling "404"
- Links back to dashboard and new simulation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Database | PostgreSQL (Neon serverless) |
| ORM | Prisma 7 (with `@prisma/adapter-pg` driver) |
| AI | OpenAI API (`gpt-4o-mini`) |
| Charts | Recharts 3 (no deprecated `Cell` component) |
| Email | Nodemailer + Gmail SMTP + `@react-email/render` |
| Auth | Custom JWT (`jose`) + `bcryptjs` |
| Forms | React `useTransition` + Server Actions |
| Deployment | Vercel + Neon PostgreSQL |

---

## Project Structure

```
daycare-simulator/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/
│   │       ├── page.tsx
│   │       └── reset-password-client.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── overview/page.tsx
│   │   ├── profile/page.tsx
│   │   ├── settings/page.tsx
│   │   ├── reports/page.tsx
│   │   ├── budget-simulation/
│   │   │   ├── page.tsx
│   │   │   └── budget-simulation-client.tsx
│   │   └── simulator/
│   │       ├── page.tsx                         ← Feature overview / landing
│   │       ├── new/page.tsx                     ← Create new simulation
│   │       └── [id]/
│   │           ├── inputs/page.tsx              ← Step 1
│   │           ├── insights/page.tsx            ← Step 2
│   │           └── next-steps/page.tsx          ← Step 3
│   ├── api/
│   │   └── ai/
│   │       └── generate-insights/route.ts       ← OpenAI integration
│   ├── not-found.tsx
│   ├── globals.css
│   └── layout.tsx
├── actions/
│   ├── auth.ts
│   ├── simulation.ts
│   ├── insights.ts
│   ├── settings.ts
│   └── budget-simulation.ts
├── components/
│   ├── auth/
│   │   └── login-form.tsx
│   ├── budget-simulation/
│   │   └── budget-simulation-client.tsx
│   ├── dashboard/
│   │   ├── sidebar.tsx
│   │   ├── topnav.tsx
│   │   └── simulation-card.tsx
│   ├── emails/
│   │   ├── welcome-email.tsx
│   │   └── reset-password-email.tsx
│   ├── profile/
│   │   └── profile-client.tsx
│   ├── settings/
│   │   └── settings-client.tsx
│   ├── simulator/
│   │   ├── wizard-header.tsx
│   │   ├── step-inputs/
│   │   │   ├── inputs-form.tsx
│   │   │   ├── revenue-sources.tsx
│   │   │   ├── expense-items.tsx
│   │   │   ├── classroom-section.tsx
│   │   │   ├── operating-details.tsx
│   │   │   └── business-goals.tsx
│   │   ├── step-insights/
│   │   │   ├── insights-dashboard.tsx
│   │   │   ├── kpi-cards.tsx
│   │   │   ├── executive-summary.tsx
│   │   │   ├── recommendation-cards.tsx
│   │   │   ├── expense-breakdown.tsx
│   │   │   └── capacity-gauge.tsx
│   │   └── step-next-steps/
│   │       └── next-steps-client.tsx
│   └── ui/                                      ← shadcn/ui components
├── lib/
│   ├── auth.ts
│   ├── email.ts
│   ├── openai.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── types/
│   └── index.ts
├── public/
│   └── images/
│       └── blocks.png
├── prisma.config.ts
├── middleware.ts
├── .env
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- A [Neon](https://neon.tech) PostgreSQL database
- An [OpenAI](https://platform.openai.com) API key
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) generated

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/daycare-simulator.git
cd daycare-simulator

# 2. Install dependencies
pnpm install

# 3. Approve build scripts (required for esbuild / tsx)
pnpm approve-builds
pnpm install

# 4. Copy environment variables
cp .env.example .env
# Fill in all values — see Environment Variables section below

# 5. Generate Prisma client
npx prisma generate

# 6. Run database migrations
npx prisma migrate dev --name init

# 7. Seed demo data
pnpm run seed

# 8. Start the development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo credentials** (after seeding):
```
Email:    demo@daycare.com
Password: password123
```

---

## Environment Variables

Create a `.env` file at the project root:

```bash
# ── Database ─────────────────────────────────────────────
# Pooled connection — used by the app at runtime
DATABASE_URL="postgresql://user:pass@ep-xxx-pooler.neon.tech/neondb?sslmode=require&uselibpqcompat=true"

# Direct connection — used by Prisma CLI for migrations
DIRECT_URL="postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require&uselibpqcompat=true"

# ── Auth ─────────────────────────────────────────────────
# Generate with: openssl rand -base64 32
JWT_SECRET="your-super-secret-jwt-key-at-least-32-chars"

# ── OpenAI ───────────────────────────────────────────────
OPENAI_API_KEY="sk-..."

# ── Email (Gmail SMTP) ───────────────────────────────────
# Your Gmail address
GMAIL_USER="yourgmail@gmail.com"
# 16-character App Password from Google Account > Security > App passwords
GMAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx"

# ── App URL ──────────────────────────────────────────────
NEXTAUTH_URL="http://localhost:3000"
```

> **Neon URL tip:** Your pooled URL contains `-pooler` in the hostname. Your direct URL is identical but without `-pooler`. Both are available in your Neon project dashboard under **Connection Details**.

---

## Database Setup

### Schema models

| Model | Purpose |
|---|---|
| `User` | Account credentials and profile |
| `Simulation` | A daycare simulation owned by a user |
| `RevenueSource` | Revenue line items per simulation |
| `ExpenseItem` | Expense line items per simulation |
| `Classroom` | Classroom data (capacity, enrolled, staff ratio) |
| `BusinessGoal` | Growth targets per simulation |
| `Insight` | AI-generated analysis stored as JSON |
| `PasswordResetToken` | Secure single-use tokens for password reset |
| `BudgetScenario` | Saved budget simulation parameter sets |
| `UserPreferences` | Per-user simulation defaults and notification settings |

### Useful commands

```bash
# Run all pending migrations
npx prisma migrate dev

# Open Prisma Studio (visual DB browser)
pnpm run db:studio

# Reset and re-seed the database
pnpm run db:reset

# Re-generate the Prisma client after schema changes
pnpm run db:generate
```

---

## Pages & Routes

| Route | Description | Auth |
|---|---|---|
| `/` | Redirects to `/overview` or `/login` | — |
| `/login` | Login form | Public |
| `/register` | Registration form | Public |
| `/forgot-password` | Request password reset email | Public |
| `/reset-password?token=...` | Set new password via email link | Public |
| `/overview` | Dashboard — simulation cards + create button | ✅ |
| `/simulator` | Feature overview page | ✅ |
| `/simulator/new` | Creates a new simulation, redirects to inputs | ✅ |
| `/simulator/[id]/inputs` | Step 1 — data entry form | ✅ |
| `/simulator/[id]/insights` | Step 2 — AI-generated KPI dashboard | ✅ |
| `/simulator/[id]/next-steps` | Step 3 — action plan + progress tracking | ✅ |
| `/budget-simulation` | Standalone scenario planning tool | ✅ |
| `/profile` | User profile with stats | ✅ |
| `/settings` | Account settings (profile/password/prefs/danger) | ✅ |
| `/reports` | List of completed simulations | ✅ |
| `*` | 404 — daycare-themed not found page | — |

---

## Key Workflows

### Generating AI Insights

1. User fills out the Step 1 form and clicks **Generate Insights**
2. `saveSimulationAction` persists all form data to the database
3. `generateInsightsAction` (Server Action) calls `POST /api/ai/generate-insights`
4. The API route:
   - Loads the full simulation from the database
   - Computes metrics locally: net income, break-even enrollment, capacity utilization, largest expense
   - Builds a structured prompt with real business numbers
   - Calls `gpt-4o-mini` with `response_format: { type: "json_object" }` to enforce structured output
   - Parses the JSON response (executive summary + 5 recommendations + 3-phase action plan)
   - Upserts the `Insight` row and marks simulation `COMPLETED`
5. User is redirected to `/simulator/[id]/insights`

### Budget Simulation math

```
Monthly Revenue    = studentCount × tuitionFee
Monthly Expenses   = staffSalaries + facilityCosts + supplies + administrative

Annual growth rate:
  if growthPeriod = "Annually"  → annualRate = growthRate / 100
  if growthPeriod = "Quarterly" → annualRate = growthRate / 100 × 4
  if growthPeriod = "Monthly"   → annualRate = growthRate / 100 × 12

Monthly growth factor (compound):
  monthlyRevGrowth = (1 + annualRate)^(1/12) - 1
  monthlyExpGrowth = (1 + annualRate × 0.3)^(1/12) - 1

Month i projection:
  revenue[i]  = baseRevenue  × (1 + monthlyRevGrowth)^i
  expenses[i] = baseExpenses × (1 + monthlyExpGrowth)^i
  profit[i]   = revenue[i] - expenses[i]

Break-even students = ceil(baseExpenses / tuitionFee)
Capacity utilization = (studentCount / classroomCapacity) × 100
```

---

## Email System

Emails are sent via **Nodemailer** using Gmail SMTP with an App Password. Two templates are built with **React Email** and rendered to HTML before sending.

| Email | Trigger | Template |
|---|---|---|
| Welcome | User registers | `components/emails/welcome-email.tsx` |
| Password Reset | Forgot password form submitted | `components/emails/reset-password-email.tsx` |

**Important notes:**
- The welcome email is **fire-and-forget** — a failure never blocks registration
- Reset tokens expire after **1 hour** and are single-use (marked `used: true` after redemption)
- Old unused tokens are deleted before a new one is created

To generate a Gmail App Password: Google Account → Security → 2-Step Verification → App passwords.

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set these environment variables in the Vercel dashboard (Settings → Environment Variables):

```
DATABASE_URL
DIRECT_URL
JWT_SECRET
OPENAI_API_KEY
GMAIL_USER
GMAIL_APP_PASSWORD
NEXTAUTH_URL        ← set to your production URL, e.g. https://daycare-sim.vercel.app
```

After deploying, run migrations against the production database:

```bash
npx prisma migrate deploy
```

---

## Scripts

```bash
pnpm run dev          # Start development server (Turbopack)
pnpm run build        # Production build
pnpm run start        # Start production server
pnpm run seed         # Seed demo data
pnpm run db:generate  # Regenerate Prisma client
pnpm run db:migrate   # Run pending migrations
pnpm run db:studio    # Open Prisma Studio
pnpm run db:reset     # Reset database and re-run migrations
```

---

## License

MIT — free to use, modify, and deploy for personal or commercial projects.