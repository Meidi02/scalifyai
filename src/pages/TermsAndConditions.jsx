import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full bg-background/80 backdrop-blur-xl border border-gray-200/50 shadow-sm text-primary w-[95%] max-w-5xl">
        <a href="/" className="font-sans font-bold text-xl tracking-tight hover:text-accent transition-colors">ScalifyAI</a>
        <a
          href="/"
          className="flex items-center gap-2 font-sans text-sm font-medium hover:-translate-y-[1px] transition-transform"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight mb-4">Terms & Conditions</h1>
          <p className="font-mono text-dark/50 text-sm">Last updated: March 23, 2026</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm space-y-10 font-sans text-dark/80 leading-relaxed">

          {/* SMS Program Details — Critical for Twilio A2P */}
          <section className="bg-background rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-xl text-dark mb-4">ScalifyAI SMS Notifications Program</h2>
            <p>
              By providing your phone number and agreeing to receive text messages, you consent to
              receive SMS messages from <span className="font-semibold text-dark">ScalifyAI</span>{' '}
              related to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Appointment confirmations and reminders</li>
              <li>Scheduling updates and changes</li>
              <li>Customer care and support communications</li>
              <li>Service-related notifications</li>
            </ul>
          </section>

          {/* Consent */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">1. Consent</h2>
            <p>
              By opting in to our SMS program, you confirm that you are the owner or authorized
              user of the mobile device and phone number provided, and that you agree to receive
              text messages from ScalifyAI at the number provided. Consent is not a condition
              of any purchase or service.
            </p>
            <p className="mt-3">
              You may opt in by providing your phone number through our website forms, in-person
              interactions, or by texting a designated keyword to our number. By doing so, you are
              providing your express written consent to receive SMS messages from ScalifyAI.
            </p>
          </section>

          {/* Message Frequency & Rates */}
          <section className="bg-background rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-xl text-dark mb-2">2. Message Frequency & Rates</h2>
            <p className="font-semibold text-dark text-lg mt-2">
              Message frequency varies.
            </p>
            <p className="font-semibold text-dark text-lg mt-1">
              Message and data rates may apply.
            </p>
            <p className="mt-3 text-sm">
              Your mobile carrier's standard messaging and data rates apply to all SMS messages
              sent and received. ScalifyAI is not responsible for any charges incurred from your
              carrier.
            </p>
          </section>

          {/* Opt-Out — Bold per Twilio requirements */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">3. Opt-Out Instructions</h2>
            <p>
              You may opt out of receiving SMS messages at any time.
            </p>
            <div className="mt-4 bg-dark rounded-2xl p-6 text-background">
              <p className="text-lg font-bold mb-3">
                Reply <span className="font-mono text-accent text-xl">STOP</span> to any message to opt out.
              </p>
              <p className="text-background/70">
                After sending STOP, you will receive a one-time confirmation message confirming
                your unsubscription. You will no longer receive SMS messages from ScalifyAI unless
                you re-opt-in.
              </p>
            </div>
          </section>

          {/* Help */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">4. Help & Support</h2>
            <div className="bg-background rounded-2xl p-6 border border-gray-100">
              <p className="text-lg font-bold text-dark mb-3">
                Reply <span className="font-mono text-accent text-xl">HELP</span> to any message for assistance.
              </p>
              <p>
                You may also contact us directly for support:
              </p>
              <div className="mt-4 font-mono text-sm space-y-2">
                <p><span className="text-dark/50">Email:</span> <a href="mailto:meidi@scalifyai.co" className="text-accent hover:underline">meidi@scalifyai.co</a></p>
              </div>
            </div>
          </section>

          {/* Carrier Liability — Required by Twilio */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">5. Carrier Disclaimer</h2>
            <p className="font-semibold text-dark">
              Carriers are not liable for any delayed or undelivered messages.
            </p>
            <p className="mt-3">
              Message delivery is subject to effective transmission by your mobile carrier.
              ScalifyAI and mobile carriers are not responsible for delayed or undelivered messages
              due to network issues, device incompatibility, or other factors beyond our control.
            </p>
          </section>

          {/* General Terms */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">6. General Terms</h2>
            <p>
              ScalifyAI reserves the right to modify or discontinue the SMS program at any time
              without prior notice. We may also modify these Terms & Conditions at any time. Any
              changes will be posted on this page with an updated "Last updated" date.
            </p>
            <p className="mt-3">
              By continuing to use our SMS program after changes are posted, you accept the
              modified Terms & Conditions.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">7. Privacy</h2>
            <p>
              Your privacy is important to us. We do not sell, rent, or share your mobile phone
              number or SMS opt-in information with third parties or affiliates for marketing
              or promotional purposes.
            </p>
            <p className="mt-3">
              For complete details on how we collect, use, and protect your information, please
              review our{' '}
              <a href="/privacy-policy" className="text-accent font-semibold hover:underline">
                Privacy Policy
              </a>.
            </p>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">8. Use of Services</h2>
            <p>
              By using ScalifyAI's services or website, you agree to comply with all applicable
              laws and regulations. You agree not to misuse our services, interfere with the
              operation of our platform, or use our services for any unlawful purpose.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ScalifyAI shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of our services, website, or SMS program.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 bg-background rounded-xl p-6 border border-gray-100 font-mono text-sm space-y-2">
              <p><span className="text-dark/50">Business:</span> <span className="text-dark font-semibold">ScalifyAI</span></p>
              <p><span className="text-dark/50">Email:</span> <a href="mailto:meidi@scalifyai.co" className="text-accent hover:underline">meidi@scalifyai.co</a></p>
            </div>
          </section>

          {/* Cross-link */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-sm text-dark/60">
              See also our{' '}
              <a href="/privacy-policy" className="text-accent font-semibold hover:underline">
                Privacy Policy
              </a>{' '}
              for details on how we handle your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-dark text-background/60 px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
          <p>© {new Date().getFullYear()} ScalifyAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-background/90 font-medium">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
