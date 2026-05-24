import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function PremiumFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">سیکاس خودرو</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              شرکت سیکاس خودرو با بیش از ده سال تجربه در صنعت خودرو در ایران، به عنوان پیشگام در
              زمینه نمایندگی و واردات خودروهای برند اوپل، ارائه دهنده خدمات با کیفیت و به روز به
              مشتریان عزیز می‌باشد.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-700">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">021-2203-7809</span>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@cycaskhodro.com</span>
              </div>

              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">تهران - جردن - خیابان گلشهر - پلاک ۱۱ - طبقه اول</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/models"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/agencies"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
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
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  خدمات پس از فروش
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ارتباط با واحد مشتریان
                </Link>
              </li>
              <li>
                <Link
                  href="/services/warranty"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  شرایط گارانتی و وارانتی
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 order-2 md:order-1">
            <a
              href="https://instagram.com/cycaskhodro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              اینستاگرام
            </a>
            <a
              href="https://t.me/cycaskhodro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              تلگرام
            </a>
            <a
              href="https://linkedin.com/company/cycaskhodro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              لینکدین
            </a>
          </div>

          <p className="text-gray-600 text-sm order-1 md:order-2">
            © {new Date().getFullYear()} تمام حقوق این سایت متعلق به شرکت "سیکاس خودرو" است
          </p>
        </div>
      </div>
    </footer>
  )
}
