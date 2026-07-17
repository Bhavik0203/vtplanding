export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">VTP<span className="text-[#D4F757]">Realty</span></h3>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Premium commercial and residential real estate developer based in Pune. Creating value-enhancing communities and legacy spaces.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4F757] mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Properties</a></li>
              <li><a href="#highlights" className="text-sm text-gray-400 hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#D4F757] mb-4">Contact</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-gray-400">Pune, Maharashtra</li>
              <li className="text-sm text-gray-400"><a href="tel:+918956067433" className="hover:text-white transition-colors block">+91 8956067433</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} VTP Realty. All rights reserved.
          </p>
          {/* <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
