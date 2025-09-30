'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calculator,
  CreditCard,
  FileText,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'demo',
  });

  // ACTION_PLACEHOLDER_START
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Could redirect to a thank you page or show success message
  };

  const handleDemoRequest = () => {
    router.push('/pricing');
  };

  const handleSalesContact = () => {
    setFormData(prev => ({ ...prev, inquiryType: 'sales' }));
  };
  // ACTION_PLACEHOLDER_END

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Schedule a Demo',
      description: 'See InvoicePro in action',
      contact: 'Book 15-minute demo',
      action: 'Book Demo',
      highlight: true,
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your invoicing',
      contact: 'support@invoicepro.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Sales Team',
      description: 'Discuss enterprise solutions',
      contact: '+1 (555) 847-2639',
      action: 'Call Sales',
    },
  ];

  const supportTopics = [
    {
      icon: FileText,
      title: 'Invoice Templates',
      description: 'Customize professional invoices',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Accept payments faster',
    },
    {
      icon: Calculator,
      title: 'Billing Automation',
      description: 'Automate recurring invoices',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Headphones className="size-4 mr-2" />
            Contact InvoicePro
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Invoicing Process?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join 15,000+ businesses already using InvoicePro to get paid faster. Our team is here to
            help you streamline your billing workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Get Started Today
              </CardTitle>
              <CardDescription>
                Tell us about your invoicing needs and we'll help you find the perfect solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                    How can we help? *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="demo">Schedule a Product Demo</option>
                    <option value="sales">Discuss Enterprise Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Questions</option>
                    <option value="integration">API & Integrations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your invoicing needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="How many invoices do you send monthly? What payment methods do you need? Any specific integrations required?"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Message & Get Free Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="size-5 text-primary" />
                Talk to Our Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className={`border-border/50 hover:border-primary/20 transition-colors cursor-pointer group ${method.highlight ? 'ring-2 ring-primary/20' : ''}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                            {method.highlight && (
                              <Badge variant="secondary" className="mt-2 text-xs">
                                Most Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Support Topics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="size-5 text-primary" />
                Popular Support Topics
              </h3>
              <div className="space-y-3">
                {supportTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-5 text-primary" />
                        <div>
                          <h4 className="font-semibold text-sm">{topic.title}</h4>
                          <p className="text-xs text-muted-foreground">{topic.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours & Stats */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Email support only</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <CreditCard className="size-4" />
                      99.9% payment success rate
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <Users className="size-4" />
                      15,000+ businesses trust InvoicePro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Action */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Ready to start invoicing smarter?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Set up your account in under 2 minutes
                </p>
                <Button onClick={handleDemoRequest} className="w-full">
                  Start 14-Day Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
