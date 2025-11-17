import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Cookie" size={24} className="text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">We Value Your Privacy</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/terms" className="text-primary hover:underline font-medium">
                  Terms of Service
                </a>
                {' '}for more information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={declineCookies}
                className="w-full sm:w-auto"
              >
                Decline
              </Button>
              <Button 
                onClick={acceptCookies}
                className="w-full sm:w-auto"
              >
                Accept All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
