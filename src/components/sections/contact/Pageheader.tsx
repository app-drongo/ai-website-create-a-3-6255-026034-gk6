'use client';

import { ChevronRight, Home, MessageSquare, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Pageheader() {
  const router = useRouter();

  const handleStartTrial = () => {
    router.push('/pricing');
  };

  const handleViewDemo = () => {
    router.push('/contact');
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
            <span className="text-foreground font-medium">Contact & Support</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Get Help with InvoicePro
              </h1>
              <p className="text-lg text-muted-foreground">
                Need assistance with your invoicing? Our expert support team is here to help you
                streamline your billing process and get paid faster. Get in touch or start your free
                trial today.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleViewDemo}>
                <MessageSquare className="size-4" />
                Book Demo
              </Button>
              <Button className="gap-2" onClick={handleStartTrial}>
                <Phone className="size-4" />
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">15,000+</span> Businesses Trust Us
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2-minute</span> Average Response Time
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.8★</span> Support Rating
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">24/7</span> Expert Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
