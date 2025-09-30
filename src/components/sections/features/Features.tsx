'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  CreditCard,
  Clock,
  Globe,
  BarChart3,
  Users,
  Smartphone,
  Shield,
  Zap,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Features() {
  const router = useRouter();

  const features = [
    {
      icon: FileText,
      title: 'Professional Invoice Templates',
      description:
        'Choose from 50+ customizable invoice templates designed for every industry. Add your logo, colors, and branding in seconds.',
      badge: 'Templates',
    },
    {
      icon: CreditCard,
      title: 'Instant Payment Processing',
      description:
        'Accept credit cards, bank transfers, and digital wallets. Get paid 3x faster with integrated payment gateways.',
      badge: 'Payments',
    },
    {
      icon: Clock,
      title: 'Automated Payment Reminders',
      description:
        'Never chase payments again. Smart reminders sent automatically to overdue clients with customizable schedules.',
      badge: 'Automation',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Invoice clients worldwide in 150+ currencies with real-time exchange rates and automatic tax calculations.',
      badge: 'Global',
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting & Analytics',
      description:
        'Track revenue, outstanding payments, and cash flow with detailed reports and visual dashboards.',
      badge: 'Analytics',
    },
    {
      icon: Users,
      title: 'Client Management Hub',
      description:
        'Organize client information, payment history, and communication in one centralized dashboard.',
      badge: 'Management',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoice Management',
      description:
        'Create, send, and track invoices on-the-go with our mobile app. Perfect for field service businesses.',
      badge: 'Mobile',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description:
        'SOC 2 compliant with 256-bit SSL encryption. Your financial data is protected with enterprise security.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Recurring Billing Automation',
      description:
        'Set up subscription billing and recurring invoices. Automate your revenue stream for predictable cash flow.',
      badge: 'Recurring',
    },
  ];

  const handleStartTrial = () => {
    router.push('/pricing');
  };

  const handleViewDemo = () => {
    router.push('/contact');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            InvoicePro Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Invoice Smarter & Get Paid Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful invoicing features trusted by 50,000+ businesses worldwide. Streamline your
            billing process and improve cash flow with our comprehensive suite.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join 15,000+ businesses already using InvoicePro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={handleViewDemo}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
