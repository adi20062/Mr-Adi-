import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-wood text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">From our family to yours, serving Shelbyville since 2015.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="prose prose-lg mx-auto text-gray-700">
          <p>
            Welcome to <strong>The Lucky 7 Café</strong>. We are proud to be Shelbyville’s favorite spot for classic American comfort food. 
            Founded by veteran John Smith, our mission has always been simple: serve great food at a fair price, and make every guest feel like family.
          </p>
          <p>
            The name "Lucky 7" comes from John's unit in the service, and it reminds us every day of the values of loyalty, service, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-red">
            <h3 className="text-xl font-bold mb-4 font-serif text-brand-wood">Veteran Owned</h3>
            <p>
              We are proud to be a veteran-owned business. We support our local veterans and active-duty military with discounts and community events throughout the year.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-red">
            <h3 className="text-xl font-bold mb-4 font-serif text-brand-wood">Inclusive & Welcoming</h3>
            <p>
              The Lucky 7 Café is an LGBTQ+ friendly space. We believe that good food brings people together, and everyone has a seat at our table.
            </p>
          </div>
        </div>

        <div className="text-center bg-white p-10 rounded-xl shadow-lg">
           <h3 className="text-2xl font-serif font-bold mb-6">Our Commitment</h3>
           <p className="italic text-xl text-gray-600">
             "To provide the warmest hospitality and the freshest coffee in Indiana."
           </p>
        </div>
      </div>
    </div>
  );
};