import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-dark tracking-tight mb-4">Privacy Policy</h1>
          <p className="font-mono text-dark/50 text-sm">Last updated: March 23, 2026</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm space-y-10 font-sans text-dark/80 leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">1. Information We Collect</h2>
            <p>
              ScalifyAI ("we," "us," or "our") collects personal information that you voluntarily
              provide to us. This includes your name, phone number, email address, and any
              information you provide when contacting us, requesting services, or opting in to
              receive communications from us.
            </p>
            <p className="mt-3">
              When you opt in to receive SMS or text messages, we collect your mobile phone number,
              your consent to receive messages, and any preferences you communicate to us.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Communicate with you regarding services, scheduling, and customer support</li>
              <li>Send appointment reminders and scheduling updates via SMS</li>
              <li>Respond to your inquiries and requests</li>
              <li>Operate, maintain, and improve our business and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 — Critical for Twilio A2P */}
          <section className="bg-background rounded-2xl p-6 border border-gray-100">
            <h2 className="font-bold text-xl text-dark mb-4">3. SMS & Mobile Information Sharing Policy</h2>
            <p className="font-semibold text-dark">
              We do not sell, rent, share, or otherwise transfer your mobile phone number, SMS
              opt-in data, or consent information to any third parties or affiliates for marketing
              or promotional purposes.
            </p>
            <p className="mt-3">
              Text messaging originator opt-in data and consent will not be shared with any
              third parties. This includes any and all data collected as part of the SMS consent
              and opt-in process.
            </p>
            <p className="mt-3">
              Mobile information may only be disclosed to third-party service providers who assist
              us in delivering messaging services (such as our SMS platform provider), and only as
              strictly necessary to fulfill that purpose. These providers are contractually
              prohibited from using the information for any other purpose.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">4. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, unless a longer retention period is required by law.
              You may request the deletion of your personal information at any time by contacting us.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of SMS communications at any time by replying <span className="font-mono font-bold text-dark bg-background px-2 py-0.5 rounded">STOP</span> to any message</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">7. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these third parties. We encourage you to
              review the privacy policies of any third-party services you interact with.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated "Last updated" date. We encourage you to review this page
              periodically.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-bold text-xl text-dark mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us at:
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
              <a href="/terms-and-conditions" className="text-accent font-semibold hover:underline">
                Terms & Conditions
              </a>{' '}
              for details on our SMS messaging program.
            </p>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-dark text-background/60 px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
          <p>© {new Date().getFullYear()} ScalifyAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-background/90 font-medium">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-background transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
