import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-secondary/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-white">AWG Leasing</span>
            </button>
            <Button onClick={() => navigate('/')} variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: November 17, 2024</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                AWG Leasing GmbH ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you voluntarily provide.</li>
                <li><strong>Financial Information:</strong> Information necessary to process leasing applications, including business financial data.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as IP address, browser type, and operating system.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process leasing applications and manage customer relationships</li>
                <li>Send you administrative information, such as updates and security alerts</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services based on your feedback</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations and enforce our terms and conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>By Law or to Protect Rights:</strong> If we believe disclosure is necessary to comply with legal obligations.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us.</li>
                <li><strong>Marketing Communications:</strong> With your consent, we may share your information with third parties for marketing purposes.</li>
                <li><strong>Financial Institutions:</strong> To process leasing applications and facilitate financial transactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but this could affect the availability and functionality of the Site.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Essential cookies: Necessary for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                  <li>Marketing cookies: Used to track visitors across websites for advertising purposes</li>
                  <li>Preference cookies: Remember your preferences and settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Data Protection Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate information.</li>
                <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data.</li>
                <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing your data.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to request transfer of your data.</li>
                <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Site may contain links to third-party websites and applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="font-semibold mb-2">AWG Leasing GmbH</p>
                <p className="text-muted-foreground">Bahnhofstr. 27a</p>
                <p className="text-muted-foreground">33102 Paderborn, Germany</p>
                <p className="text-muted-foreground mt-2">Phone: +49 5251 29061 0</p>
                <p className="text-muted-foreground">Email: support@awg-leasing.it.com</p>
              </div>
            </section>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={() => navigate('/')} size="lg">
            <Icon name="Home" size={20} className="mr-2" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
