import React from "react";

export default function page() {
  const company = {
    name: "4U Consultancy Services",
    brand: "4UCS.in",
    address: "New Delhi, India",
    email: "info@4ucs.in",
    phone: "+919229128072",
    lastUpdated: "14 September 2025", // Updated date
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Responsive, fast, and scalable websites built with modern frameworks like Next.js and React.",
    },
    {
      title: "App Development",
      description:
        "Custom mobile apps for iOS and Android with seamless performance and modern UI/UX.",
    },
    {
      title: "SaaS Development",
      description:
        "End-to-end SaaS product development including dashboards, authentication, and APIs.",
    },
    {
      title: "API Development",
      description:
        "Robust and secure RESTful & GraphQL APIs for mobile and web applications.",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric design with wireframes, prototypes, and pixel-perfect interfaces.",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom online stores, marketplaces, and payment gateway integration.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable infrastructure with CI/CD pipelines, Docker, and Kubernetes.",
    },
    {
      title: "AI & Automation",
      description:
        "Smart AI-driven solutions for chatbots, analytics, and workflow automation.",
    },
    {
      title: "Maintenance & Support",
      description:
        "24/7 monitoring, updates, bug fixes, and long-term support for your applications.",
    },
  ];

  const privacySummary = {
    title: "Privacy Policy",
    lastUpdated: company.lastUpdated,
    summary:
      "At 4U Consultancy Services (4UCS.in) we respect your privacy. We collect personal information such as name, email, phone and billing details when you contact us or make payments. Payments are processed using Razorpay and sensitive card data is not stored on our servers. We use cookies and technical data (IP, browser) to improve the experience. We do not sell personal data; we share only with payment processors and when legally required. You have rights to access, update, or delete your data.",
  };

  const cancellationRefund = {
    title: "Cancellation & Refund Policy",
    lastUpdated: company.lastUpdated,
    summary: [
      "At 4U Consultancy Services (4UCS.in), we strive to deliver quality digital services (such as web development, mobile apps, and IT consulting).",
      "Since our services are digital and customized for each client, **once a project or service has been initiated, cancellations are not allowed.**",
      "Refunds will only be considered under special circumstances such as:",
      "- Duplicate payment due to technical error.",
      "- Payment made by mistake for services not availed.",
      "- Failure on our part to deliver the agreed scope of services.",
      "All approved refunds will be processed within **7–10 business days** to the original payment method, subject to Razorpay/payment gateway policies.",
      "For cancellation or refund requests, please write to us at **info@4ucs.in** with your payment details.",
      "No refunds will be provided for completed services, partial work delivered, or change-of-mind after project initiation.",
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 mt-20 text-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">{company.name}</h1>
            </div>
            <div className="text-right text-sm">
              <p>Last updated: {company.lastUpdated}</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">{company.brand} – We build creative and user-friendly websites for your company.</p>
        </header>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Privacy Policy Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{privacySummary.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Last Updated: {privacySummary.lastUpdated}</p>
          <p className="text-gray-700 leading-relaxed">{privacySummary.summary}</p>
        </section>

        {/* Cancellation & Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{cancellationRefund.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Last Updated: {cancellationRefund.lastUpdated}</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {cancellationRefund.summary.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Contact & Business Details</h2>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <dt className="text-xs text-gray-500">Company</dt>
              <dd className="mt-1 font-medium">{company.name}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Email</dt>
              <dd className="mt-1 font-medium">{company.email}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Phone</dt>
              <dd className="mt-1 font-medium">{company.phone}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className="text-xs text-gray-500">Address</dt>
              <dd className="mt-1">{company.address}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <a
              href={`mailto:${company.email}`}
              className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow"
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
