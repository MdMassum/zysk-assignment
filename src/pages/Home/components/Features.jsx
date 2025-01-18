import React from "react";
import FeatureCard from "../../../components/FeatureCard";
import { BsFillInboxFill, BsFillChatDotsFill, BsLightningFill, BsPeopleFill } from "react-icons/bs";
import { MdIntegrationInstructions, MdReportProblem } from "react-icons/md";

const Features = () => {
    const featureData = [
        {
            icon: <BsFillInboxFill />,
            title: "Share team inboxes",
            description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
            icon: <BsLightningFill />,
            title: "Deliver instant answers",
            description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
            icon: <MdReportProblem />,
            title: "Manage your team with reports",
            description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
        },
        {
            icon: <BsFillChatDotsFill />,
            title: "Connect with customers",
            description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        },
        {
            icon: <MdIntegrationInstructions />,
            title: "Connect the tools you already use",
            description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        },
        {
            icon: <BsPeopleFill />,
            title: "Our people make the difference",
            description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        },
    ];

    return (
        <section className="py-12 bg-gray-50 md:w-[85%] mx-auto p-5 md:p-4 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-red-500 text-sm font-semibold uppercase mb-2">Features</h2>
                <h1 className="text-3xl font-bold mb-4">
                    Analytics that feels like it’s from the future
                </h1>
                <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
