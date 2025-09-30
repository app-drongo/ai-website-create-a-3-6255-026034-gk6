'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Building2, Phone, Mail, Clock, Users, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Map() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleViewDemo = () => {
    router.push('/contact');
  };
  const handleStartTrial = () => {
    router.push('/pricing');
  };
  const handleGetDirections = () => {
    window.open('https://maps.google.com', '_blank');
  };
  // ACTION_PLACEHOLDER_END

  const offices = [
    {
      id: 1,
      name: 'InvoicePro HQ',
      address: '123 Business Ave',
      city: 'San Francisco, CA',
      type: 'Headquarters',
      employees: 45,
    },
    {
      id: 2,
      name: 'Customer Success',
      address: '456 Support St',
      city: 'Austin, TX',
      type: 'Support Center',
      employees: 28,
    },
    {
      id: 3,
      name: 'Development Hub',
      address: '789 Tech Blvd',
      city: 'Seattle, WA',
      type: 'Engineering',
      employees: 32,
    },
  ];

  const services = [
    { icon: Phone, name: '24/7 Phone Support', availability: 'Always Available' },
    { icon: Users, name: 'Onboarding Team', availability: 'Mon-Fri 9AM-6PM' },
    { icon: Shield, name: 'Security & Compliance', availability: 'Enterprise Support' },
    { icon: Building2, name: 'Enterprise Sales', availability: 'By Appointment' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Global Support Network</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find InvoicePro Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our team across multiple locations for personalized invoicing support and
            enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=750&fit=crop"
                    alt="InvoicePro office locations map"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Office Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Building2 className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap">
                          <p className="text-xs font-semibold">InvoicePro HQ</p>
                          <p className="text-xs text-muted-foreground">San Francisco, CA</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Building2 className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap">
                          <p className="text-xs font-semibold">Support Center</p>
                          <p className="text-xs text-muted-foreground">Austin, TX</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Building2 className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Card className="p-2 whitespace-nowrap">
                          <p className="text-xs font-semibold">Development Hub</p>
                          <p className="text-xs text-muted-foreground">Seattle, WA</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="shadow-lg"
                    onClick={handleGetDirections}
                  >
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>InvoicePro Offices</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>24/7 Support Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  InvoicePro Locations
                </h3>
                <div className="space-y-3">
                  {offices.map(office => (
                    <div
                      key={office.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{office.name}</p>
                        <p className="text-xs text-muted-foreground">{office.address}</p>
                        <p className="text-xs text-muted-foreground">{office.city}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-xs mb-1">
                          {office.type}
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          {office.employees} team members
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Services */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Support Services</h3>
                <div className="space-y-3">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                          <service.icon className="size-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.availability}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-primary" />
                    <span>support@invoicepro.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-primary" />
                    <span>1-800-INVOICE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="size-4 text-primary" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="space-y-3">
              <Button className="w-full" size="lg" onClick={handleStartTrial}>
                Start 14-Day Free Trial
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={handleViewDemo}>
                Schedule Office Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
