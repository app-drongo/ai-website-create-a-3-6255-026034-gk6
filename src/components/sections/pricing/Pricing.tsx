'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Clock, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStartTrial = () => {
    router.push('/contact');
  };

  const handleContactSales = () => {
    router.push('/contact');
  };

  const handleScheduleDemo = () => {
    router.push('/contact');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for freelancers and small businesses',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Email support',
        'Payment tracking',
        'Client management (up to 10)',
      ],
      cta: 'Start Free Trial',
      popular: false,
      action: handleStartTrial,
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses with regular invoicing',
      price: '$29',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited invoices',
        'Professional templates',
        'Automated payment reminders',
        'Multi-currency support',
        'Unlimited clients',
        'Payment gateway integration',
        'Mobile invoice management',
        'Priority support',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      action: handleStartTrial,
    },
    {
      name: 'Enterprise',
      description: 'For large teams with advanced invoicing needs',
      price: '$99',
      period: '/month',
      badge: 'Advanced',
      features: [
        'Everything in Professional',
        'Team collaboration tools',
        'Advanced reporting & analytics',
        'Custom invoice branding',
        'API access',
        'GDPR & SOC 2 compliance',
        'Dedicated account manager',
        '24/7 phone support',
      ],
      cta: 'Contact Sales',
      popular: false,
      action: handleContactSales,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Clock className="size-3 mr-2" />
            2-Minute Setup
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple Invoicing
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan for your invoicing needs. Join 15,000+ businesses who trust
            InvoicePro for faster payments and automated billing.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    <Shield className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="size-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-2">15,000+</div>
            <div className="text-muted-foreground">Businesses Trust Us</div>
          </div>
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="size-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-2">99.9%</div>
            <div className="text-muted-foreground">Payment Success Rate</div>
          </div>
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="size-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-2">2 Minutes</div>
            <div className="text-muted-foreground">Average Setup Time</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom invoicing solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing solutions for enterprises with specific requirements. Let's
            discuss how InvoicePro can streamline your billing process.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            <Users className="size-4 mr-2" />
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
