import React from "react";
import AccordionItem from "../../../components/AccordionItem";

// FAQ Component
const FAQ = () => {
    const faqs = [
        {
            question: "Is there a free trial available?",
            answer:
                "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer:
                "Yes, you can change your plan anytime from your account settings without any additional cost.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "You can cancel your subscription anytime. The cancellation will be effective at the end of your current billing cycle.",
        },
        {
            question: "Can other info be added to an invoice?",
            answer:
                "Yes, you can add additional information like your VAT ID or company details to your invoice.",
        },
        {
            question: "How does billing work?",
            answer:
                "We offer flexible billing options, including monthly and annual subscriptions.",
        },
        {
            question: "How do I change my account email?",
            answer:
                "You can change your account email from your account settings. Contact support if you face any issues.",
        },
    ];

    return (
        <section className="py-12 bg-gray-50 ">
            <div className="max-w-3xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Frequently asked questions
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Everything you need to know about the product and billing.
                    </p>
                </div>
                {/* Accordion List */}
                <div>
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
