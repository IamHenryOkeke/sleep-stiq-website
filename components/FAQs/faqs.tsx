'use client';

import { useState } from 'react';
import Link from 'next/link';
import SleepStipFAQ from './sleepstip-faq';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('sleepstiq-product');

  return (
    <section className='text-primaryBlue px-5 md:px-8 py-8 md:py-20 lg:px-32 2xl:px-40 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='mb-6 lg:mb-0 lg:w-1/4 space-y-3'>
          <div className='text-center lg:text-start flex lg:flex-col justify-between gap-3 md:gap-6 text-sm lg:text-lg'>
            <Link
              onClick={() => setActiveTab('sleepstiq-product')}
              href='#sleepstiq-product'
              className={`${activeTab === 'sleepstiq-product'
                ? 'font-bold'
                : 'font-normal'
                }`}
            >
              Sleepstiq Product
            </Link>
            <Link
              onClick={() => setActiveTab('order')}
              href='#order'
              className={`${activeTab === 'order'
                ? 'font-bold'
                : 'font-normal'
                }`}
            >
              Order
            </Link>
            <Link
              onClick={() => setActiveTab('melantonin')}
              href='#melantonin'
              className={`${activeTab === 'melantonin'
                ? 'font-bold'
                : 'font-normal'
                }`}
            >
              Melantonin
            </Link>
          </div>
        </div>
        <div className='space-y-4 lg:w-3/4'>
          <SleepStipFAQ />
        </div>
      </div>
    </section>
  );
};
