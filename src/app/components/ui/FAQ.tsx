import React from "react";
import { FaAngleRight } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>What payment methods do you accept?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All transactions are secured for your safety.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>What is your return policy?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          We offer a 30-day return policy on most items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please ensure the item is in its original condition and packaging.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>How long does shipping take?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days, and standard shipping can take 5-7 business days.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>Do you offer international shipping?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, we offer international shipping to select countries. Please check the shipping options at checkout.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>How can I track my order?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or through the carrier's tracking page.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>What if I receive a damaged or defective item?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          If you receive a damaged or defective item, please contact our customer service team within 7 days of receiving your order for assistance.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>Can I modify or cancel my order after placing it?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          If you need to modify or cancel your order, please contact us as soon as possible. Once an order is processed and shipped, we cannot make changes.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>Do you have a loyalty program?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, we have a loyalty program that rewards our customers with points for every purchase, which can be redeemed for discounts on future orders.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>How do I contact customer support?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          You can reach our customer support team through the contact form on our website, by email at support@example.com, or by calling our customer service hotline.
        </p>
      </details>

      <details className="border-b border-gray-300 mb-4">
        <summary className="cursor-pointer py-4 text-lg font-semibold hover:text-yellow-500 transition-colors flex justify-between items-center">
          <span>Do you offer gift cards?</span>
          <FaAngleRight className="transition-transform transform duration-300" />
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, we offer gift cards in various denominations. They make the perfect gift for friends and family who love to shop!
        </p>
      </details>
    </div>
  );
};

export default FAQ;
