import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
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
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-lg">Last updated: November 17, 2024</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AWG Leasing GmbH ("Company", "we", "us", or "our"), concerning your access to and use of the awg-leasing.de website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Site through automated or non-human means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Leasing Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AWG Leasing GmbH provides equipment and vehicle leasing services. All leasing arrangements are subject to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Credit approval and verification of provided information</li>
                <li>Separate leasing agreements that will govern the specific terms of each lease</li>
                <li>Compliance with German commercial law and relevant EU regulations</li>
                <li>Payment of all fees, charges, and applicable taxes</li>
                <li>Proper maintenance and insurance of leased assets as specified in individual agreements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Information provided on this Site about leasing terms, rates, and availability is for general informational purposes only and does not constitute a binding offer. Final terms will be established through individual leasing agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Systematically retrieve data or other content from the Site to create or compile a collection or database</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses by electronic or other means</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
                <li>Engage in unauthorized framing of or linking to the Site</li>
                <li>Trick, defraud, or mislead us and other users</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                <li>Upload or transmit viruses, malware, or any other type of malicious code</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Application and Credit Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit a leasing application through our Site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You authorize us to conduct credit checks and verify information with third parties</li>
                <li>You consent to us obtaining credit reports and financial information</li>
                <li>You acknowledge that approval is not guaranteed and is subject to our underwriting standards</li>
                <li>You agree to provide accurate and complete information in your application</li>
                <li>You understand that providing false information may result in application denial and potential legal consequences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments must be made in accordance with the specific leasing agreement. Late payments may result in additional fees, interest charges, and potential termination of the lease. We reserve the right to pursue collection of any outstanding amounts through legal means if necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party; or (5) any harmful act toward any other user of the Site with whom you connected via the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the Federal Republic of Germany applicable to agreements made and to be entirely performed within Germany, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Paderborn, Germany.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We prefer to address concerns without formal legal proceedings. If you have a dispute with us, please contact us first to attempt to resolve it informally. If we cannot resolve the dispute informally, you and we agree to the following dispute resolution process:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Disputes will first be submitted to mediation in Paderborn, Germany</li>
                <li>If mediation fails, disputes may be submitted to arbitration or court proceedings</li>
                <li>Each party will bear its own costs and expenses related to dispute resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service. Upon termination, your right to use the Site will immediately cease. All provisions which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="font-semibold mb-2">AWG Leasing GmbH</p>
                <p className="text-muted-foreground">Bahnhofstr. 27a</p>
                <p className="text-muted-foreground">33102 Paderborn, Germany</p>
                <p className="text-muted-foreground mt-2">Phone: +49 5251 29061 0</p>
                <p className="text-muted-foreground">Email: support@awg-leasing.it.com</p>
              </div>
            </section>

            <section className="bg-accent/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">15. Acknowledgement</h2>
              <p className="text-muted-foreground leading-relaxed">
                BY USING THE SITE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
              </p>
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
