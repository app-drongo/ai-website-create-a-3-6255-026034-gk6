'use client';

import { ChevronRight, Home, CreditCard, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Pricing Plans</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the perfect plan for your business. Start with our 14-day free trial - no
                credit card required. Join 15,000+ businesses already using InvoicePro to get paid
                faster.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleViewDemo}>
                <CreditCard className="size-4" />
                View Demo
              </Button>
              <Button className="gap-2" onClick={handleStartTrial}>
                <Zap className="size-4" />
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">14-Day</span> Free Trial
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">99.9%</span> Payment Success Rate
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.8★</span> Customer Rating
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Shield className="size-3" />
              <span className="font-semibold text-foreground">SOC 2</span> Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
