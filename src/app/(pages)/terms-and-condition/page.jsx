import { Metadata } from "next";



const TERMS_CONDITIONS_DATA = {
  title: "Terms & Conditions",
  lastUpdated: "November 30, 2025",
  introduction: [
    'Thank you for using Social Hardware! These Terms & Conditions ("Terms") constitute a binding legal agreement between you and Social Hardware ("we," "us," or "our") governing your use of our website, products, and services (collectively, the "Services").',
    "By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.",
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing and using the Social Hardware website and Services, you accept and agree to be bound by these Terms & Conditions. If you do not agree to these Terms, you must not use our Services.",
        "We may revise these Terms from time to time. The revised Terms will be posted on this page, and your continued use of our Services after such changes constitutes your acceptance of the revised Terms.",
      ],
    },
    {
      id: "use-of-services",
      title: "2. Use of Services",
      content: "You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:",
      list: [
        "Use our Services in any way that violates any applicable federal, state, local, or international law or regulation",
        "Transmit any material that is abusive, harassing, defamatory, obscene, or otherwise objectionable",
        "Attempt to gain unauthorized access to any portion of our website or Services",
        "Use any automated system to access our website or Services without our prior written consent",
        "Interfere with or disrupt the integrity or performance of our Services",
        "Use our Services for any commercial purpose without our express written consent",
      ],
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property",
      paragraphs: [
        "All content, features, and functionality of our Services, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, are owned by Social Hardware or its content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.",
      ],
    },
    {
      id: "product-information",
      title: "4. Product Information",
      paragraphs: [
        "We strive to provide accurate and up-to-date information about our products and services. However, we do not warrant that product descriptions, specifications, or other content on our website is accurate, complete, reliable, current, or error-free.",
        "We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. We also reserve the right to limit the quantities of any products or services that we offer.",
        "All products are intended for research and development purposes only. Products are not intended for use as drugs, medical devices, or for human consumption unless specifically indicated.",
      ],
    },
    {
      id: "orders-payment",
      title: "5. Orders and Payment",
      content: [
        "When you place an order through our website, you agree to provide accurate, current, and complete information. All orders are subject to acceptance by Social Hardware.",
        "Pricing and availability of products are subject to change without notice. We reserve the right to refuse or cancel any order at any time for reasons including but not limited to:",
      ],
      list: [
        "Product availability",
        "Errors in pricing or product information",
        "Fraudulent or invalid payment information",
        "Unauthorized or illegal use of our Services",
      ],
      footer: "Payment terms will be specified in your order confirmation. We accept various payment methods as indicated during checkout. All payments must be made in U.S. dollars unless otherwise specified.",
    },
    {
      id: "shipping-delivery",
      title: "6. Shipping and Delivery",
      paragraphs: [
        "Shipping terms and delivery times will be specified in your order confirmation. We are not responsible for delays caused by shipping carriers or events beyond our control, including but not limited to natural disasters, acts of war, or government actions.",
        "Risk of loss and title for products purchased from us pass to you upon delivery to the carrier. You are responsible for filing any claims with carriers for damaged or lost shipments.",
        "Shipping costs and applicable taxes will be calculated and displayed during checkout. International shipments may be subject to customs duties and taxes, which are the responsibility of the recipient.",
      ],
    },
    {
      id: "returns-refunds",
      title: "7. Returns and Refunds",
      content: "Due to the nature of products, all sales are final unless otherwise specified. Returns and refunds will be considered on a case-by-case basis for products that are:",
      list: [
        "Defective or damaged upon receipt",
        "Not as described in the product listing",
        "Subject to a prior written agreement",
      ],
      footer: 'Requests for returns or refunds must be submitted within 30 days of receipt. Contact us at <a href="mailto:info@socialhardware.in">info@socialhardware.in</a> to initiate a return or refund request.',
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, Social Hardware shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our Services.",
        "Our total liability to you for all claims arising out of or relating to the use of our Services shall not exceed the amount you paid to us in the 12 months preceding the claim.",
        "Products are provided for research and development purposes only. Users are responsible for ensuring compliance with all applicable laws and regulations regarding the use, handling, storage, and disposal of chemical products.",
      ],
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina, United States, without regard to its conflict of law provisions.",
        "Any disputes arising out of or relating to these Terms or our Services shall be subject to the exclusive jurisdiction of the state and federal courts located in North Carolina, United States.",
      ],
    },
    {
      id: "changes",
      title: "10. Changes to Terms",
      paragraphs: [
        'We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.',
        "It is your responsibility to review these Terms periodically for changes. If you do not agree to the modified Terms, you must stop using our Services.",
      ],
    },
    // {
    //   id: "contact",
    //   title: "11. Contact Information",
    //   content: "If you have any questions about these Terms & Conditions, please contact us:",
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

export default function TermsAndConditionsPage() {
  const { title, lastUpdated, introduction, sections } = TERMS_CONDITIONS_DATA;

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

              {/* Content with list */}
              {section.content && section.list && (
                <>
                  {Array.isArray(section.content) ? (
                    section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {section.list.map((item, index) => (
                      <li
                        key={index}
                        className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.footer && (
                    <p
                      className="text-base sm:text-lg font-outfit font-normal text-gray-700 leading-relaxed mt-4"
                      dangerouslySetInnerHTML={{ __html: section.footer }}
                    />
                  )}
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