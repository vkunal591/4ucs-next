import React from "react";

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20 text-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-4">Last Updated: 14 September 2025</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to 4U Consultancy Services (4UCS.in). By using our website, products,
            and services, you agree to the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold">1. Services</h2>
          <p>
            We provide web development, mobile app development, SaaS, IT consulting,
            and related services. The scope, timelines, and deliverables will be
            defined in the project agreement shared with clients.
          </p>

          <h2 className="text-xl font-semibold">2. Payments</h2>
          <p>
            All payments are to be made in advance or as per the milestones agreed.
            Payments are processed securely via Razorpay. We do not store your card
            details.
          </p>

          <h2 className="text-xl font-semibold">3. Cancellations & Refunds</h2>
          <p>
            Cancellations are not allowed once a project is initiated. Refunds are only
            applicable under special cases such as duplicate payment or non-delivery of
            agreed services. Please refer to our{" "}
            <a href="/cancellation-refund" className="text-indigo-600 underline">
              Cancellation & Refund Policy
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
          <p>
            All designs, code, and deliverables remain the property of 4U Consultancy
            Services until full payment is received. After payment, the client owns the
            rights to the final deliverables.
          </p>

          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            We are not responsible for any indirect, incidental, or consequential
            damages arising from the use of our services.
          </p>

          <h2 className="text-xl font-semibold">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be subject
            to the jurisdiction of courts in New Delhi, India.
          </p>

          <p className="mt-6">
            For any queries, please contact us at{" "}
            <a href="mailto:info@4ucs.in" className="text-indigo-600 underline">
              info@4ucs.in
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
