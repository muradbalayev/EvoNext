import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 max-w-[1920px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - Logo and copyright */}
          <div className="flex flex-col">
            <div className="mb-6 w-[200px] h-auto">
<Image src="/logo.webp" alt="Logo" width={1080} height={355} className="w-full h-auto" />  
          </div>
            <div className="mt-auto text-sm text-gray-600">
              <p>© 2025 EvoNext</p>
              <p>10:04 PM QLD, WE ARE CLOSED</p>
            </div>
          </div>

          {/* Middle column - Navigation */}
          <div>
            <div className="mb-4 text-sm uppercase text-gray-500">
              [NAVIGATION]
            </div>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-2xl font-medium hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/courses" className="text-2xl font-medium hover:text-primary-600 transition-colors">Courses</Link>
              <Link href="/services" className="text-2xl font-medium hover:text-primary-600 transition-colors">Services</Link>
            </nav>
            <div className="mt-8 space-y-2">
              <div className="text-sm uppercase text-gray-500">PRIVACY POLICY</div>
              <div className="text-sm uppercase text-gray-500">TERMS OF SERVICE</div>
            </div>
          </div>

          {/* Right column - Info and acknowledgement */}
          <div>
            <div className="mb-4 text-sm uppercase text-gray-500">
              [ACKNOWLEDGEMENT]
            </div>
            <p className="text-sm mb-6">
              We respectfully acknowledge the people, the Traditional Owners and Custodians of the 
              Country on which we work. We pay our respects to Elders past and present, and acknowledge their 
              continuing connection to land, sea and community.
            </p>

            <div className="mb-4 mt-8 text-sm uppercase text-gray-500">
              [INFO]
            </div>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">A:</span> Baku, Azerbaijan</p>
              <p><span className="font-medium">E:</span> info@evonext.az</p>
              <p><span className="font-medium">P:</span> 07 3110 1031</p>
              <p><span className="font-medium">H:</span> Monday to Friday, 8:30am - 5:00pm</p>
            </div>

            <div className="mt-8 flex items-center">
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mr-2">
                {/* <img src='/logo.jpg' className="w-full h-full object-contain"/> */}
              </div>
              <div className="text-xs text-gray-500">
                MADE BY MB
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
