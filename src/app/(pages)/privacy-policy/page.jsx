

const PRIVACY_POLICY_DATA = {
  title: "Privacy Policy",
  lastUpdated: "November 30, 2025",
  introduction: [
    "Thank you for using Social Hardware! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this policy carefully to understand our practices regarding your personal data.",
    "By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      subsections: [
        {
          title: "1.1 Personal Information",
          content: "We may collect personal information that you provide directly to us, including but not limited to:",
          list: [
            "Name, email address, phone number, and mailing address",
            "Company name and job title",
            "Payment information (processed securely through third-party payment processors)",
            "Information provided in enquiry forms, contact forms, or customer service communications",
          ],
        },
        {
          title: "1.2 Usage Information",
          content: "We automatically collect certain information when you visit our website, including:",
          list: [
            "IP address, browser type, and device information",
            "Pages visited, time spent on pages, and navigation patterns",
            "Referring website addresses",
            "Search terms used on our website",
          ],
        },
        {
          title: "1.3 Cookies and Tracking Technologies",
          content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Your Information",
      content: "We use the information we collect for various purposes, including:",
      list: [
        "To provide, maintain, and improve our services",
        "To process your orders and respond to your enquiries",
        "To send you technical notices, updates, and support messages",
        "To communicate with you about products, services, and promotions that may interest you",
        "To monitor and analyze trends, usage, and activities in connection with our services",
        "To detect, prevent, and address technical issues and security threats",
        "To comply with legal obligations and enforce our terms and conditions",
      ],
    },
    {
      id: "data-protection",
      title: "3. Data Protection and Security",
      paragraphs: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
      ],
    },
    {
      id: "your-rights",
      title: "4. Your Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, including:",
      list: [
        { label: "Access", description: "The right to access and receive a copy of your personal data" },
        { label: "Correction", description: "The right to request correction of inaccurate or incomplete data" },
        { label: "Deletion", description: "The right to request deletion of your personal data" },
        { label: "Objection", description: "The right to object to processing of your personal data" },
        { label: "Portability", description: "The right to request transfer of your data to another service provider" },
        { label: "Withdrawal", description: "The right to withdraw consent at any time where we rely on consent to process your data" },
      ],
      footer: "To exercise any of these rights, please contact us using the contact information provided at the end of this policy.",
    },
    {
      id: "cookies",
      title: "5. Cookies and Tracking Technologies",
      content: "We use cookies and similar tracking technologies to track activity on our website and store certain information. The types of cookies we use include:",
      list: [
        { label: "Essential Cookies", description: "Required for the website to function properly" },
        { label: "Analytics Cookies", description: "Help us understand how visitors interact with our website" },
        { label: "Functional Cookies", description: "Enable enhanced functionality and personalization" },
      ],
      footer: "You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.",
    },
    {
      id: "third-party-services",
      title: "6. Third-Party Services",
      paragraphs: [
        "We may use third-party services to help us operate our website and administer our services. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      ],
    },
   
    {
      id: "changes",
      title: "7. Changes to This Privacy Policy",
      paragraphs: [
        'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.',
        "Changes to this Privacy Policy are effective when they are posted on this page.",
      ],
    },
    // {
    //   id: "contact",
    //   title: "9. Contact Us",
    //   content: "If you have any questions about this Privacy Policy or our privacy practices, please contact us:",
    //   contactInfo: {
    //     company: "R&S Chemicals",
    //     address: "150 N Research Campus Dr, Suite 4101",
    //     city: "Kannapolis, NC 28081, USA",
    //     email: "info@randschemicals.com",
    //     phone: "+1 (704) 250-2700",
    //   },
    // },
  ],
};

// ============================================
// COMPONENT
// ============================================

export default function PrivacyPolicyPage() {
  const { title, lastUpdated, introduction, sections } = PRIVACY_POLICY_DATA;

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-[black] mb-3 sm:mb-4">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-outfit">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 sm:space-y-10 text-gray-700">
          {/* Introduction */}
          <div className="space-y-4 pb-4 border-b border-gray-200">
            {introduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.id} className="space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-outfit font-semibold text-[black] mt-8 mb-4">
                {section.title}
              </h2>

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-5">
                  {section.subsections.map((subsection, index) => (
                    <div key={index}>
                      <h3 className="text-lg sm:text-xl font-outfit font-semibold text-gray-900 mb-3">
                        {subsection.title}
                      </h3>
                      {subsection.content && (
                        <p className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed mb-3">
                          {subsection.content}
                        </p>
                      )}
                      {subsection.list && (
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          {subsection.list.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Content with list */}
              {section.content && section.list && (
                <>
                  <p className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {section.list.map((item, index) => (
                      <li
                        key={index}
                        className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
                      >
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <strong>{item.label}:</strong> {item.description}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  {section.footer && (
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed mt-4">
                      {section.footer}
                    </p>
                  )}
                </>
              )}

              {/* Paragraphs only */}
              {section.paragraphs && (
                <>
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </>
              )}

              {/* Contact Information */}
              {/* {section.contactInfo && (
                <>
                  <p className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 space-y-2">
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700">
                      <strong>{section.contactInfo.company}</strong>
                    </p>
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700">
                      {section.contactInfo.address}
                    </p>
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700">
                      {section.contactInfo.city}
                    </p>
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700">
                      Email:{" "}
                      <a
                        href={`mailto:${section.contactInfo.email}`}
                        className="text-[#0802EB] hover:underline"
                      >
                        {section.contactInfo.email}
                      </a>
                    </p>
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700">
                      Phone:{" "}
                      <a
                        href={`tel:${section.contactInfo.phone.replace(/\s/g, "")}`}
                        className="text-[#0802EB] hover:underline"
                      >
                        {section.contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </>
              )} */}
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}