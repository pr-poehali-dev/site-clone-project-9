import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-white">AWG Leasing</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'solutions', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-white/90'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Get Started</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Flexible Leasing Solutions for Your Business
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your business with innovative equipment and vehicle leasing. Professional service, competitive rates, and personalized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Request Quote
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a085fbd6-f7b6-488f-ba8e-8f24d221671f/files/5224bdb6-8f84-4645-852e-33cdcb21a3ca.jpg"
                alt="AWG Leasing Office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive leasing solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Truck',
                title: 'Vehicle Leasing',
                description: 'Complete fleet solutions for commercial vehicles, from light vans to heavy trucks. Flexible terms and maintenance packages.'
              },
              {
                icon: 'Laptop',
                title: 'Equipment Leasing',
                description: 'Modern IT equipment, machinery, and office technology. Keep your business at the cutting edge without capital investment.'
              },
              {
                icon: 'Calculator',
                title: 'Financial Consulting',
                description: 'Expert guidance on leasing structures, tax benefits, and financial optimization for your business growth.'
              },
              {
                icon: 'Shield',
                title: 'Insurance Services',
                description: 'Comprehensive insurance coverage for all leased assets. Protect your investment with our tailored packages.'
              },
              {
                icon: 'Wrench',
                title: 'Maintenance & Support',
                description: 'Full-service maintenance programs ensuring your leased equipment operates at peak performance.'
              },
              {
                icon: 'TrendingUp',
                title: 'Asset Management',
                description: 'Professional asset lifecycle management. From acquisition to disposal, we optimize your investment returns.'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">About AWG Leasing</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With decades of experience in the leasing industry, AWG Leasing GmbH has established itself as a trusted partner for businesses across Germany and Europe.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in providing flexible, cost-effective leasing solutions that help businesses grow without the burden of large capital investments. Our commitment to customer service and industry expertise sets us apart.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">€500M+</div>
                  <div className="text-muted-foreground">Assets Under Management</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-scale-in">
              {[
                { icon: 'Target', title: 'Our Mission', text: 'To empower businesses with flexible leasing solutions that drive growth and success.' },
                { icon: 'Eye', title: 'Our Vision', text: 'To be the leading leasing partner recognized for innovation, reliability, and exceptional service.' },
                { icon: 'Award', title: 'Our Values', text: 'Integrity, transparency, and customer-centricity guide everything we do.' }
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-accent" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized leasing programs designed for your industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Building', title: 'Construction', color: 'primary' },
              { icon: 'Stethoscope', title: 'Healthcare', color: 'accent' },
              { icon: 'Package', title: 'Logistics', color: 'primary' },
              { icon: 'Factory', title: 'Manufacturing', color: 'accent' },
              { icon: 'Store', title: 'Retail', color: 'primary' },
              { icon: 'Cpu', title: 'Technology', color: 'accent' },
              { icon: 'Utensils', title: 'Hospitality', color: 'primary' },
              { icon: 'GraduationCap', title: 'Education', color: 'accent' }
            ].map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-${solution.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={solution.icon} size={32} className={`text-${solution.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{solution.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our leasing services
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'What are the benefits of leasing vs. buying?',
                answer: 'Leasing offers several advantages: lower upfront costs, tax benefits, flexibility to upgrade equipment, predictable monthly expenses, and preservation of capital for other business investments. You can access the latest equipment without large capital outlays.'
              },
              {
                question: 'What lease terms do you offer?',
                answer: 'We offer flexible lease terms ranging from 12 to 60 months, depending on the asset type and your business needs. We can customize terms to align with your business cycles and equipment depreciation schedules.'
              },
              {
                question: 'Can I purchase the equipment at the end of the lease?',
                answer: 'Yes, most of our leases include purchase options at the end of the term. You can buy the equipment at fair market value or a predetermined residual value, depending on your lease agreement.'
              },
              {
                question: 'What happens if the equipment breaks down?',
                answer: 'Our comprehensive maintenance packages ensure prompt repairs and minimal downtime. Depending on your service level agreement, we provide replacement equipment, on-site repairs, and full technical support throughout the lease term.'
              },
              {
                question: 'Do you offer early termination options?',
                answer: 'Yes, we understand that business needs change. We offer flexible early termination options, though terms vary by agreement. Contact our team to discuss your specific situation and available options.'
              },
              {
                question: 'What credit requirements are needed?',
                answer: 'We work with businesses of all sizes and credit profiles. While we do conduct credit assessments, we offer flexible approval criteria and can structure deals to accommodate various financial situations.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your business with flexible leasing solutions? Contact our team today for a personalized consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">Bahnhofstr. 27a<br />33102 Paderborn<br />Germany</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+49 5251 29061 0</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@awg-leasing.it.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="+49 123 456789" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us about your leasing needs..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <span className="text-xl font-bold">AWG Leasing</span>
              </div>
              <p className="text-white/80 text-sm">
                Your trusted partner for flexible business leasing solutions across Europe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Vehicle Leasing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Equipment Leasing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Financial Consulting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Asset Management</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">© 2024 AWG Leasing GmbH. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
