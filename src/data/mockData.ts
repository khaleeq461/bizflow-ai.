import type { AIAgent, OverdueInvoice, SystemModule, Transaction, UpcomingObligation } from '../types';

export const AI_AGENTS: AIAgent[] = [
  {
    id: 'cashflow',
    name: 'CashFlow Agent',
    title: 'Autonomous Liquidity Predictor',
    tagline: 'Forecasts cash position and identifies upcoming liquidity risks.',
    description: 'Continuously models rolling 14-to-90 day cash trajectories by correlating historical payroll cycles, supplier payment terms, and anticipated customer settlements.',
    iconName: 'LineChart',
    colorTheme: 'cyan',
    status: 'active',
    orchestrationRole: 'Pipeline Synthesizer (Models 14-Day Rolling Runway)',
    capabilities: [
      '14-Day rolling liquidity variance modeling',
      'Seasonal expenditure buffer detection',
      'Automated runway preservation alerts',
      'Shortfall warning 9 days in advance'
    ],
    recentTelemetry: 'Projected net positive cash buffer of PKR 720K on Day 14. Detected Day 11 tax withholding obligation.',
    metricLabel: 'Projection Accuracy',
    metricValue: '98.4%',
    highlightTag: 'Liquidity Intelligence'
  },
  {
    id: 'invoice',
    name: 'Invoice Agent',
    title: 'Multi-Modal Invoice Parser',
    tagline: 'Reads and structures invoices automatically.',
    description: 'Extracts line items, vendor tax IDs, payment terms, and delivery note cross-references from PDFs, photo receipts, scanned bills, and WhatsApp documents with zero manual entry.',
    iconName: 'FileText',
    colorTheme: 'sky',
    status: 'processing',
    orchestrationRole: 'Ingestion Node (Transforms Unstructured Bills to JSON)',
    capabilities: [
      'Bilingual OCR (Urdu & English handwritten support)',
      'Withholding tax & GST verification',
      'Duplicate bill and ghost vendor detection',
      'Line-item auto-tagging to chart of accounts'
    ],
    recentTelemetry: 'Parsed supplier invoice #AP-8849 (PKR 145,000) from WhatsApp PDF; validated NTN and credit terms.',
    metricLabel: 'Extraction Speed',
    metricValue: '1.2s / doc',
    highlightTag: 'Zero Manual Entry'
  },
  {
    id: 'reconciliation',
    name: 'Reconciliation Agent',
    title: 'Continuous Ledger Reconciler',
    tagline: 'Matches transactions, invoices and payments and flags inconsistencies.',
    description: 'Performs multi-way matching across bank clearing feeds, customer payments, supplier invoices, and POS batch logs to keep ledgers permanently balanced in real time.',
    iconName: 'GitCompare',
    colorTheme: 'emerald',
    status: 'active',
    orchestrationRole: '3-Way Matcher (Verifies Bank Statement vs PO vs Invoice)',
    capabilities: [
      'Multi-way 3-way match (PO, Invoice, Bank Debit)',
      'Tolerance-based fee & withholding adjustment',
      'Immediate anomaly isolation for unallocated deposits',
      'Automated reconciliation journal generation'
    ],
    recentTelemetry: 'Reconciled 42 bank statement lines against 38 invoices. 1 item flagged for minor 0.5% withholding variance.',
    metricLabel: 'Match Confidence',
    metricValue: '99.8%',
    highlightTag: 'Instant Audit Trail'
  },
  {
    id: 'receivables',
    name: 'Receivables Agent',
    title: 'Credit & Collection Sentinel',
    tagline: 'Identifies overdue payments and prepares collection actions.',
    description: 'Monitors aging debtors, tracks customer payment habits, flags deteriorating credit risks, and crafts contextual polite reminders via WhatsApp and email for owner review.',
    iconName: 'Clock',
    colorTheme: 'violet',
    status: 'active',
    orchestrationRole: 'Debtor Sentinel (Drafts Polite Reminders with IBANs)',
    capabilities: [
      'Dynamic aging bracket tracking (1-15, 16-30, 31+ days)',
      'Context-aware collection reminder generation',
      'Client payment probability scoring',
      'Early settlement discount recommendations'
    ],
    recentTelemetry: 'Generated 2 WhatsApp payment notices for client Indus Trading (overdue 8 days, PKR 180,000).',
    metricLabel: 'DSO Reduction',
    metricValue: '-11 Days',
    highlightTag: 'Cash Acceleration'
  },
  {
    id: 'risk',
    name: 'Risk Agent',
    title: 'Financial Anomaly Detector',
    tagline: 'Detects unusual financial patterns and emerging risks.',
    description: 'Monitors velocity spikes, irregular supplier account changes, margin leakage, and sudden cash drain events to safeguard small businesses from fraud and operational shocks.',
    iconName: 'ShieldAlert',
    colorTheme: 'rose',
    status: 'monitoring',
    orchestrationRole: 'Sentry Node (Isolates Vendor Bank Account Alterations)',
    capabilities: [
      'Outlier transaction detection via machine learning',
      'Vendor bank IBAN alteration flags',
      'Payroll variance monitoring',
      'Working capital stress testing'
    ],
    recentTelemetry: 'Isolated sudden 40% jump in recurring courier logistics cost compared to trailing 30-day baseline.',
    metricLabel: 'Threat Sensitivity',
    metricValue: 'Real-time',
    highlightTag: 'Autonomous Protection'
  },
  {
    id: 'payment',
    name: 'Payment Agent',
    title: 'Guarded Disbursement Orchestrator',
    tagline: 'Prepares payment workflows while keeping final control with the business owner.',
    description: 'Bundles due payables, verifies bank recipient details against verified supplier master records, and prepares one-click execution batches strictly gated by human approval.',
    iconName: 'CheckCircle2',
    colorTheme: 'amber',
    status: 'active',
    orchestrationRole: 'Gated Dispatcher (Prepares IBFT Batch for Owner Sign-Off)',
    capabilities: [
      'Human-in-the-loop cryptographic authorization',
      'Batch settlement scheduling to optimize cash float',
      'Bank payment slip generation and receipt archive',
      'Zero autonomous fund outflow without explicit biometric / OTP signoff'
    ],
    recentTelemetry: 'Prepared batch of 2 vendor settlements totaling PKR 290,000. Awaiting business owner sign-off.',
    metricLabel: 'Owner Control',
    metricValue: '100% Gated',
    highlightTag: 'Human-in-the-Loop'
  }
];

export const UPCOMING_OBLIGATIONS: UpcomingObligation[] = [
  {
    id: 'ob-1',
    title: 'Apex Packaging Materials',
    category: 'Supplier Payable',
    amountPKR: 145000,
    dueDate: 'Oct 11, 2026',
    daysLeft: 3,
    status: 'action_required',
    assignedAgent: 'Payment Agent'
  },
  {
    id: 'ob-2',
    title: 'FBR Section 153 Withholding Tax',
    category: 'Regulatory Obligation',
    amountPKR: 45000,
    dueDate: 'Oct 15, 2026',
    daysLeft: 7,
    status: 'scheduled',
    assignedAgent: 'Reconciliation Agent'
  },
  {
    id: 'ob-3',
    title: 'Bi-Monthly Plant Electric & Utilities',
    category: 'Operational Fixed Cost',
    amountPKR: 62500,
    dueDate: 'Oct 18, 2026',
    daysLeft: 10,
    status: 'buffer_allocated',
    assignedAgent: 'CashFlow Agent'
  },
  {
    id: 'ob-4',
    title: 'Karachi Logistics Freight Escrow',
    category: 'Supply Chain Clearing',
    amountPKR: 37500,
    dueDate: 'Oct 20, 2026',
    daysLeft: 12,
    status: 'scheduled',
    assignedAgent: 'Risk Agent'
  }
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-101',
    reference: 'FT-908234',
    counterparty: 'Karachi Textiles Ltd',
    type: 'inflow',
    amountPKR: 420000,
    date: 'Today, 14:22',
    status: 'reconciled',
    category: 'Commercial Retainer',
    agentNote: 'Matched with Invoice #INV-2026-44 by Reconciliation Agent'
  },
  {
    id: 'tx-102',
    reference: 'IBFT-551920',
    counterparty: 'Apex Packaging Supplies',
    type: 'outflow',
    amountPKR: 145000,
    date: 'Today, 11:05',
    status: 'pending',
    category: 'Raw Materials',
    agentNote: 'Payment Agent prepared workflow; awaiting owner confirmation'
  },
  {
    id: 'tx-103',
    reference: 'DEP-883109',
    counterparty: 'Indus Logistics Hub',
    type: 'inflow',
    amountPKR: 185000,
    date: 'Yesterday, 17:40',
    status: 'matched',
    category: 'B2B Distribution Order',
    agentNote: 'Direct bank deposit matched with delivery docket #DD-902'
  },
  {
    id: 'tx-104',
    reference: 'POS-119382',
    counterparty: 'Retail Branch Counter #03',
    type: 'inflow',
    amountPKR: 89400,
    date: 'Yesterday, 19:15',
    status: 'reconciled',
    category: 'Daily Store Settlement',
    agentNote: 'Daily batch settlement reconciled against POS summary'
  },
  {
    id: 'tx-105',
    reference: 'CHQ-772911',
    counterparty: 'Northern Power Electric',
    type: 'outflow',
    amountPKR: 62500,
    date: 'Oct 04, 2026',
    status: 'flagged',
    category: 'Commercial Utilities',
    agentNote: 'Risk Agent flagged: 18% surcharge detected due to prior month fuel adjustment'
  }
];

export const OVERDUE_INVOICES: OverdueInvoice[] = [
  {
    id: 'inv-401',
    invoiceNumber: 'INV-2026-089',
    client: 'Indus Trading & Logistics',
    amountPKR: 180000,
    dueDate: 'Sep 29, 2026',
    daysOverdue: 8,
    recommendedAction: 'Send friendly WhatsApp reminder with 1-click IBAN details',
    reminderStatus: 'drafted'
  },
  {
    id: 'inv-402',
    invoiceNumber: 'INV-2026-094',
    client: 'Beacon Retail Network',
    amountPKR: 125000,
    dueDate: 'Oct 02, 2026',
    daysOverdue: 5,
    recommendedAction: 'Attach delivery receipt acknowledgment and schedule follow-up',
    reminderStatus: 'drafted'
  },
  {
    id: 'inv-403',
    invoiceNumber: 'INV-2026-102',
    client: 'Crescent Foods Dist.',
    amountPKR: 75000,
    dueDate: 'Oct 04, 2026',
    daysOverdue: 3,
    recommendedAction: 'Automated statement reconciliation ping',
    reminderStatus: 'pending'
  }
];

export const SYSTEM_MODULES: SystemModule[] = [
  {
    id: 'transactions',
    title: 'Transactions',
    category: 'Banking & Feeds',
    description: 'Live ingestion of multi-bank statements, IBFTs, branch deposits, and POS terminals.',
    iconName: 'ArrowLeftRight',
    dataFlowRate: 'Live Sync',
    activeAgents: ['Reconciliation Agent', 'Risk Agent']
  },
  {
    id: 'invoices',
    title: 'Invoices',
    category: 'Document Intelligence',
    description: 'Instant parsing of PDF, paper, photo, and WhatsApp vendor bills and customer orders.',
    iconName: 'Receipt',
    dataFlowRate: 'Continuous',
    activeAgents: ['Invoice Agent']
  },
  {
    id: 'receivables',
    title: 'Receivables',
    category: 'Credit & Debtor Control',
    description: 'Real-time aging tracking, credit risk monitoring, and automated reminder drafting.',
    iconName: 'Coins',
    dataFlowRate: 'Real-time',
    activeAgents: ['Receivables Agent']
  },
  {
    id: 'payables',
    title: 'Payables',
    category: 'Vendor Obligations',
    description: 'Clear schedule of supplier dues, tax withholdings, and early settlement incentives.',
    iconName: 'CreditCard',
    dataFlowRate: 'Scheduled',
    activeAgents: ['Payment Agent', 'Invoice Agent']
  },
  {
    id: 'cashflow',
    title: 'Cash Flow',
    category: 'Forecasting & Runway',
    description: 'Predictive 14-to-90 day runway simulations factoring in upcoming receivables and payouts.',
    iconName: 'TrendingUp',
    dataFlowRate: 'Predictive',
    activeAgents: ['CashFlow Agent']
  },
  {
    id: 'payments',
    title: 'Payments',
    category: 'Human-Guarded Execution',
    description: 'Pre-assembled payment workflows dispatched solely upon business owner verification.',
    iconName: 'ShieldCheck',
    dataFlowRate: 'Guarded Flow',
    activeAgents: ['Payment Agent']
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    name: 'Connect',
    title: 'Connect financial data and business documents',
    description: 'Securely link bank feeds, upload paper bills via mobile photo, or forward invoice PDFs directly from WhatsApp and email. BizFlow AI ingests multi-format financial feeds seamlessly without complex ERP setup.',
    iconName: 'Link2',
    techDetail: 'Multi-bank read-only feeds • WhatsApp PDF parser • Secure local document vault',
    sampleOutput: 'Connected: 2 Bank Accounts, WhatsApp Invoice Stream, POS Terminal Feed'
  },
  {
    step: '02',
    name: 'Understand',
    title: 'AI agents organize and understand the financial data',
    description: 'Autonomous agents immediately parse, classify, and reconcile transactions. The Invoice Agent extracts tax IDs and itemized costs while the Reconciliation Agent matches clearing records against client ledgers.',
    iconName: 'Cpu',
    techDetail: 'Multi-agent coordination • Real-time 3-way reconciliation • Continuous ledger tagging',
    sampleOutput: '99.8% auto-reconciliation match rate across 180+ monthly transactions'
  },
  {
    step: '03',
    name: 'Predict',
    title: 'BizFlow identifies trends, risks and future cash requirements',
    description: 'The CashFlow and Risk Agents project rolling cash balances, pinpoint emerging liquidity deficits 14 days ahead, and flag subtle margin leaks or deteriorating customer credit trends before they hurt your business.',
    iconName: 'Sparkles',
    techDetail: '14-Day liquidity simulations • Anomaly detection • Customer credit scoring',
    sampleOutput: 'Alert: Day 11 liquidity dip predicted (PKR 480K deficit prevented by early notice)'
  },
  {
    step: '04',
    name: 'Act',
    title: 'BizFlow recommends or prepares actions with human approval',
    description: 'Rather than passive charts, BizFlow prepares concrete actions: one-click vendor payment batches, tailored polite collection notices, and working capital safeguards. The owner retains absolute approval control.',
    iconName: 'Zap',
    techDetail: 'Human-in-the-loop workflows • 1-Click WhatsApp payment reminders • Cryptographic authorization',
    sampleOutput: 'Action Ready: 2 Approved payouts queued • 2 Overdue collection notices ready'
  }
];
