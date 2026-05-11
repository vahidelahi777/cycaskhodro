import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function PremiumFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">سیکاس خودرو</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              شرکت سیکاس خودرو با بیش از ده سال تجربه در صنعت خودرو در ایران، به عنوان پیشگام در زمینه نمایندگی و واردات خودروهای برند اوپل، ارائه دهنده خدمات با کیفیت و به روز به مشتریان عزیز می‌باشد.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">021-2203-7809</span>
              </div>
              
              <div className="flex items-start gap-2 text-gray-700">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@sikaskhodro.com</span>
              </div>
              
              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">تهران - جردن - خیابان گلشهر - پلاک ۱۱ - طبقه اول</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Dealerships */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">دسترسی سریع</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/fa" className="text-gray-600 hover:text-gray-900 transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="/fa/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                  محصولات
                </Link>
              </li>
              <li>
                <Link href="/fa/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/fa/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/fa/dealerships" className="text-gray-600 hover:text-gray-900 transition-colors">
                  نمایندگی‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Sales & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">فروش و خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fa/services/after-sales" className="text-gray-600 hover:text-gray-900 transition-colors">
                  خدمات پس از فروش
                </Link>
              </li>
              <li>
                <Link href="/fa/services/customer-relations" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ارتباط با واحد مشتریان
                </Link>
              </li>
              <li>
                <Link href="/fa/services/warranty" className="text-gray-600 hover:text-gray-900 transition-colors">
                  شرایط گارانتی و وارانتی
                </Link>
              </li>
              <li>
                <Link href="/fa/services/manual" className="text-gray-600 hover:text-gray-900 transition-colors">
                  دفترچه راهنما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links - Right Side */}
          <div className="flex gap-4 order-2 md:order-1">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              اینستاگرام
            </Link>
            <Link 
              href="https://t.me" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              تلگرام
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              لینکدین
            </Link>
          </div>
          
          {/* Copyright - Left Side */}
          <p className="text-gray-600 text-sm order-1 md:order-2">
            © {new Date().getFullYear()} تمام حقوق این سایت متعلق به شرکت "سیکاس خودرو" است
          </p>
        </div>
      </div>
    </footer>
  );
}
