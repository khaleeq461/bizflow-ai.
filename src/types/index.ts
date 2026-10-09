export interface Transaction {
  id: string;
  reference: string;
  counterparty: string;
  type: 'inflow' | 'outflow';
  amountPKR: number;
  date: string;
  status: 'reconciled' | 'matched' | 'flagged' | 'pending';
  category: string;
  agentNote?: string;
}

export interface OverdueInvoice {
  id: string;
  invoiceNumber: string;
  client: string;
  amountPKR: number;
  dueDate: string;
  daysOverdue: number;
  recommendedAction: string;
  reminderStatus: 'drafted' | 'sent' | 'pending';
}

export interface UpcomingObligation {
  id: string;
  title: string;
  category: string;
  amountPKR: number;
  dueDate: string;
  daysLeft: number;
  status: 'scheduled' | 'action_required' | 'buffer_allocated';
  assignedAgent: string;
}

export interface AIAgent {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  colorTheme: string;
  status: 'active' | 'processing' | 'monitoring';
  capabilities: string[];
  recentTelemetry: string;
  metricLabel: string;
  metricValue: string;
  highlightTag: string;
  orchestrationRole: string;
}

export interface SystemModule {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  dataFlowRate: string;
  activeAgents: string[];
}

export interface EarlyAccessFormData {
  fullName: string;
  businessName: string;
  email: string;
  businessType: string;
  country: string;
  monthlyRevenueRange: string;
}
