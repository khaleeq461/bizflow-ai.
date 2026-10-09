export interface DemoCashFlowPoint {
  dayLabel: string;
  historicalCash?: number;
  expectedInflows: number;
  expectedOutflows: number;
  projectedBalance: number;
  note?: string;
}

export interface DemoAgentDetail {
  id: string;
  name: string;
  status: 'Active' | 'Monitoring' | 'Ready';
  statusColor: string;
  tagline: string;
  monitors: string[];
  detected: string;
  recommendedAction: string;
  lastRun: string;
}

export interface DemoReconciliationItem {
  id: string;
  counterparty: string;
  bankAmount: number;
  bankDate: string;
  matchedInvoiceNo: string;
  invoiceAmount: number;
  status: 'Reconciled' | 'Mismatch Detected' | 'Pending Verification';
  variance?: number;
  varianceReason?: string;
}

export interface DemoReceivableInvoice {
  id: string;
  customer: string;
  invoiceNumber: string;
  amountPKR: number;
  dueDate: string;
  status: 'Overdue' | 'Due Soon' | 'Paid';
  aiRecommendation: string;
  whatsappMessage: string;
}

export const DEMO_AGENTS: DemoAgentDetail[] = [
  {
    id: 'cashflow',
    name: 'CashFlow Agent',
    status: 'Active',
    statusColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    tagline: 'Rolling Liquidity & Runway Simulator',
    monitors: [
      'Multi-bank cleared balances (MBL, HBL, Bank Alfalah)',
      '14-to-90 day forward invoice payment schedules',
      'Recurring payroll, tax withholding, and utility obligations'
    ],
    detected: 'Identified a projected liquidity dip down to PKR 480K on Day 11 due to scheduled supplier payout (PKR 145K) outpacing uncollected receivables.',
    recommendedAction: 'Accelerate collection of Invoice #INV-401 (PKR 110,000) from Indus Logistics Hub before Oct 12 to maintain a PKR 700K+ buffer.',
    lastRun: '14 seconds ago'
  },
  {
    id: 'invoice',
    name: 'Invoice Agent',
    status: 'Active',
    statusColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    tagline: 'Multi-Modal Invoice & Document OCR Engine',
    monitors: [
      'Incoming PDF bills via WhatsApp stream & email inbox',
      'Vendor Tax NTN status and sales tax invoice validity',
      'Line-item quantity matching against purchase orders'
    ],
    detected: 'Processed and structured supplier invoice #AP-8849 from Apex Packaging (PKR 145,000) with 100% field confidence.',
    recommendedAction: 'Assign line items to Raw Materials ledger account and attach scanned Goods Receipt Note #GRN-902.',
    lastRun: '1 min ago'
  },
  {
    id: 'reconciliation',
    name: 'Reconciliation Agent',
    status: 'Active',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    tagline: 'Continuous 3-Way Ledger Reconciler',
    monitors: [
      'Bank transaction clearing statements against sales ledger',
      'Tolerance matching for bank transaction charges & withholding tax',
      'Unallocated deposits and partial client remittances'
    ],
    detected: 'Detected variance of PKR 2,500 on transaction with XYZ Traders (Bank debit: PKR 82,000 vs Invoice: PKR 79,500).',
    recommendedAction: 'Flagged for owner review: Investigate PKR 2,500 difference (consistent with 3% provincial service tax deduction).',
    lastRun: '2 mins ago'
  },
  {
    id: 'receivables',
    name: 'Receivables Agent',
    status: 'Active',
    statusColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    tagline: 'Debtor Aging & Polite Collection Sentinel',
    monitors: [
      'Accounts receivable aging schedules (1-15, 16-30, 31+ days)',
      'Customer payment patterns and historical settlement latency',
      'Context-aware collection drafting via WhatsApp and email'
    ],
    detected: '3 client invoices totaling PKR 185,000 are overdue. Indus Logistics Hub is 8 days past due date.',
    recommendedAction: 'Dispatched pre-approved polite WhatsApp reminder with 1LINK IBAN and invoice PDF to Indus Accounts.',
    lastRun: '4 mins ago'
  },
  {
    id: 'risk',
    name: 'Risk Agent',
    status: 'Monitoring',
    statusColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    tagline: 'Financial Anomaly & Fraud Prevention Sentry',
    monitors: [
      'Supplier bank account / IBAN alteration attempts',
      'Velocity spikes in recurring utility and transport expenses',
      'Duplicate invoice submission attempts across branches'
    ],
    detected: 'Isolated a 18% surcharge on commercial power bill CHQ-772911 caused by prior month fuel price adjustment.',
    recommendedAction: 'Log surcharge as pass-through operational expense; no vendor fraud detected.',
    lastRun: '6 mins ago'
  },
  {
    id: 'payment',
    name: 'Payment Agent',
    status: 'Ready',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    tagline: 'Human-Guarded Disbursement Orchestrator',
    monitors: [
      'Upcoming accounts payable maturities and early discount dates',
      'Beneficiary IBAN cryptographic verification against vendor master file',
      'Batch transaction packaging for owner authorization'
    ],
    detected: 'Supplier payment of PKR 75,000 to Apex Packaging Supplies is due tomorrow to maintain clean credit terms.',
    recommendedAction: 'Prepared 1-click IBFT payment batch. Awaiting explicit business owner OTP / Biometric sign-off.',
    lastRun: 'Just now'
  }
];

export const DEMO_RECONCILIATION: DemoReconciliationItem[] = [
  {
    id: 'rec-1',
    counterparty: 'ABC Supplies Ltd',
    bankAmount: 75000,
    bankDate: 'Today, 10:30 PKT',
    matchedInvoiceNo: 'Invoice #4821',
    invoiceAmount: 75000,
    status: 'Reconciled',
  },
  {
    id: 'rec-2',
    counterparty: 'XYZ Traders & Co',
    bankAmount: 82000,
    bankDate: 'Yesterday, 16:45 PKT',
    matchedInvoiceNo: 'Invoice #4819',
    invoiceAmount: 79500,
    status: 'Mismatch Detected',
    variance: 2500,
    varianceReason: 'PKR 2,500 variance detected. Likely 3% provincial withholding tax deduction or logistics delivery surcharge.'
  },
  {
    id: 'rec-3',
    counterparty: 'Karachi Textiles Hub',
    bankAmount: 420000,
    bankDate: 'Oct 06, 2026',
    matchedInvoiceNo: 'Invoice #INV-2026-44',
    invoiceAmount: 420000,
    status: 'Reconciled',
  },
  {
    id: 'rec-4',
    counterparty: 'Al-Madina Cargo Transport',
    bankAmount: 34500,
    bankDate: 'Oct 05, 2026',
    matchedInvoiceNo: 'Waybill #WB-9018',
    invoiceAmount: 34500,
    status: 'Reconciled',
  }
];

export const DEMO_RECEIVABLES: DemoReceivableInvoice[] = [
  {
    id: 'inv-1',
    customer: 'Indus Logistics Hub',
    invoiceNumber: 'INV-2026-089',
    amountPKR: 110000,
    dueDate: 'Sep 30, 2026',
    status: 'Overdue',
    aiRecommendation: 'Overdue 8 days. Send friendly WhatsApp reminder with 1-click IBAN details.',
    whatsappMessage: 'Respected Indus Logistics Accounts Team, gentle reminder that Invoice INV-2026-089 (PKR 110,000) was due on Sep 30. Kindly arrange settlement to Meezan Bank IBAN: PK78 MEZN 0002 9182 4819. Thank you — Ahmed Traders.'
  },
  {
    id: 'inv-2',
    customer: 'Beacon Retail Network',
    invoiceNumber: 'INV-2026-094',
    amountPKR: 75000,
    dueDate: 'Oct 03, 2026',
    status: 'Overdue',
    aiRecommendation: 'Overdue 5 days. Attach signed Goods Receipt Note and request wire confirmation.',
    whatsappMessage: 'Dear Beacon Retail Accounts, following up on Invoice INV-2026-094 for PKR 75,000 due on Oct 03. Please find the receiving acknowledgment attached. Let us know once wire is processed. Regards, Ahmed Traders.'
  },
  {
    id: 'inv-3',
    customer: 'Crescent Foods Distribution',
    invoiceNumber: 'INV-2026-102',
    amountPKR: 95000,
    dueDate: 'Oct 10, 2026',
    status: 'Due Soon',
    aiRecommendation: 'Due in 2 days. Early automated ping scheduled for tomorrow morning.',
    whatsappMessage: 'Hello Crescent Foods Team, gentle courtesy notice that Invoice INV-2026-102 (PKR 95,000) matures on Oct 10. For any statement queries, please reply directly. Regards, Ahmed Traders.'
  },
  {
    id: 'inv-4',
    customer: 'Karachi Fabric Mills',
    invoiceNumber: 'INV-2026-081',
    amountPKR: 140000,
    dueDate: 'Sep 24, 2026',
    status: 'Paid',
    aiRecommendation: 'Settled via Raast transfer and auto-reconciled by Reconciliation Agent.',
    whatsappMessage: 'Payment received with thanks! Receipt voucher archived.'
  }
];

export const DEMO_CASHFLOW_7DAYS: DemoCashFlowPoint[] = [
  { dayLabel: 'Day 1 (Today)', historicalCash: 1240000, expectedInflows: 89000, expectedOutflows: 45000, projectedBalance: 1284000, note: 'Daily POS batch settled' },
  { dayLabel: 'Day 2', expectedInflows: 110000, expectedOutflows: 75000, projectedBalance: 1319000, note: 'Supplier payment due' },
  { dayLabel: 'Day 3', expectedInflows: 40000, expectedOutflows: 30000, projectedBalance: 1329000 },
  { dayLabel: 'Day 4', expectedInflows: 95000, expectedOutflows: 60000, projectedBalance: 1364000, note: 'Crescent Foods settlement' },
  { dayLabel: 'Day 5', expectedInflows: 25000, expectedOutflows: 85000, projectedBalance: 1304000 },
  { dayLabel: 'Day 6', expectedInflows: 60000, expectedOutflows: 40000, projectedBalance: 1324000 },
  { dayLabel: 'Day 7', expectedInflows: 35000, expectedOutflows: 55000, projectedBalance: 1304000 }
];

export const DEMO_CASHFLOW_14DAYS: DemoCashFlowPoint[] = [
  ...DEMO_CASHFLOW_7DAYS,
  { dayLabel: 'Day 8', expectedInflows: 45000, expectedOutflows: 90000, projectedBalance: 1259000 },
  { dayLabel: 'Day 9', expectedInflows: 20000, expectedOutflows: 110000, projectedBalance: 1169000 },
  { dayLabel: 'Day 10', expectedInflows: 30000, expectedOutflows: 85000, projectedBalance: 1114000 },
  { dayLabel: 'Day 11 (Dip)', expectedInflows: 40000, expectedOutflows: 145000, projectedBalance: 1009000, note: 'Apex Packaging raw materials payout' },
  { dayLabel: 'Day 12', expectedInflows: 80000, expectedOutflows: 45000, projectedBalance: 1044000 },
  { dayLabel: 'Day 13', expectedInflows: 50000, expectedOutflows: 30000, projectedBalance: 1064000 },
  { dayLabel: 'Day 14 (Forecast)', expectedInflows: 65000, expectedOutflows: 409000, projectedBalance: 720000, note: '14-Day safe projected runway buffer' }
];

export const DEMO_CASHFLOW_30DAYS: DemoCashFlowPoint[] = [
  ...DEMO_CASHFLOW_14DAYS,
  { dayLabel: 'Day 18', expectedInflows: 140000, expectedOutflows: 180000, projectedBalance: 680000 },
  { dayLabel: 'Day 22', expectedInflows: 210000, expectedOutflows: 95000, projectedBalance: 795000 },
  { dayLabel: 'Day 26', expectedInflows: 180000, expectedOutflows: 120000, projectedBalance: 855000 },
  { dayLabel: 'Day 30 (Month-End)', expectedInflows: 240000, expectedOutflows: 210000, projectedBalance: 885000, note: 'Month-end salary & tax clearing' }
];

export const DEMO_COMMAND_RESPONSES: Record<string, { summary: string; bullets: string[]; actionHint: string }> = {
  'Why will my cash balance decrease next week?': {
    summary: 'Your cash position is projected to decline from PKR 1.28M to PKR 1.01M between Day 9 and Day 11.',
    bullets: [
      'Scheduled payment of PKR 145,000 to Apex Packaging Supplies on Oct 11 for raw materials.',
      'FBR Section 153 withholding tax liability of PKR 45,000 maturing on Oct 15.',
      'Historical receivables lag: Expected collection from Indus Logistics (PKR 110K) has been delayed by 8 days.'
    ],
    actionHint: 'Recommendation: Collecting Indus Logistics Invoice #INV-401 mitigates this dip and maintains your cash runway above PKR 800K.'
  },
  'Which invoices should I collect first?': {
    summary: 'Receivables Agent recommends prioritizing these two overdue client accounts immediately:',
    bullets: [
      'Indus Logistics Hub (Invoice #INV-2026-089) — PKR 110,000 (8 days overdue, client has 94% historical recovery score).',
      'Beacon Retail Network (Invoice #INV-2026-094) — PKR 75,000 (5 days overdue, receiving slip verified).',
      'Collecting these two recovers PKR 185,000, boosting Day 14 cash buffer by approximately 26%.'
    ],
    actionHint: 'Action Ready: Click "Prepare Reminder" under Receivables to dispatch polite 1-click WhatsApp payment links.'
  },
  'What payments are due this week?': {
    summary: 'Payment Agent has pre-verified two outgoing supplier obligations this week totaling PKR 220,000:',
    bullets: [
      'Tomorrow (Oct 09): PKR 75,000 to ABC Supplies for packaging materials (PO #4821 matched).',
      'Day 11 (Oct 11): PKR 145,000 to Apex Packaging Supplies (Invoice #AP-8849 parsed with 4.5% WHT checked).',
      'Both payments require your authenticated sign-off before any bank wire is initiated.'
    ],
    actionHint: 'Action Ready: Review and sign in the Payment Workflow panel below.'
  },
  'What is my projected cash position in 14 days?': {
    summary: 'BizFlow CashFlow Agent projects an available balance of PKR 720,000 on Day 14.',
    bullets: [
      'Baseline starting balance: PKR 1.24M.',
      'Expected aggregate inflows: PKR 489,000.',
      'Expected aggregate disbursements: PKR 1,009,000 (including supplier payouts, rent, and utility buffer).',
      'Confidence Score: 98.4% based on 6 months of historical banking velocity.'
    ],
    actionHint: 'Liquidity Status: Safe positive buffer. No emergency working capital injection required.'
  }
};
