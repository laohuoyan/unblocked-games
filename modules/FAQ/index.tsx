
import useTrans from '@/hooks/useTrans';
import React, { useState } from 'react';

interface IFAQProps {
  data: IFAQData
}

export default function FAQ(props: IFAQProps) {
  const t = props.data;
  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: any) => {
    // Toggle the FAQ: if already open, close it; if closed, open it.
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-black">
            {t.title}
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
            {t.subTitle}
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {t.items.map((faq: any, index: number) => (
            <div key={index}>
              <div className="relative my-3 w-full rounded-md px-12 py-8">
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-black"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200"></div>
            </div>
          ))}
        </div>
        {/* <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#" className="text-black font-bold">
            {" "}
            customer support team.
          </a>
        </p> */}
      </div>
    </section>
  );
}