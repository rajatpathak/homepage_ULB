import { useEffect, useState } from 'react';
import {
  Building2,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  Download,
  AlertCircle,
  Droplets,
  ShoppingBag,
  Baby,
  Heart,
  Home,
  Trash2,
  MessageSquare,
  Camera,
  Hammer,
  ExternalLink,
  User,
  Calendar,
  Award,
  Globe,
  Sun,
  Wind,
  Shield,
  Lock
} from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: '24', condition: 'Clear Sky' });
  const [aqi] = useState({ value: '152', status: 'Poor' });
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: 'Sheohar Nagar Parishad',
      subtitle: 'Committed to Smart, Transparent & Citizen-Friendly Urban Governance',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Digital Services Portal',
      subtitle: 'Pay Property Tax, Water Bills & Apply for Certificates Online',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Swachh Bharat Mission',
      subtitle: 'Building a Clean and Green Sheohar for Future Generations',
      gradient: 'from-green-600 to-emerald-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes}:${seconds} ${ampm}`;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Sheohar, Bihar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span>Sheohar: {weather.temp}°C {weather.condition}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-red-500" />
                <span>AQI: {aqi.value} ({aqi.status})</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{formatTime(currentTime)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>{formatDate(currentTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Sheohar Nagar Parishad</h1>
                <p className="text-xs md:text-sm text-gray-600">Government of Bihar</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Schemes</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">About Us</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Contact</a>
              </nav>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors">
                  Citizen Login
                </button>
                <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded hover:bg-gray-800 transition-colors">
                  Admin Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Important Announcements Ticker */}
      <div className="bg-orange-600 text-white py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex items-center space-x-2 bg-white text-orange-600 px-4 py-1 rounded font-bold mr-4 flex-shrink-0">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">IMPORTANT</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-8">• Link Aadhaar with Mobile Number for faster benefit transfer</span>
              <span className="mx-8">• Call 181 for any grievances or scheme related queries</span>
              <span className="mx-8">• Download the Nagar Parishad App for easy access to all services</span>
              <span className="mx-8">• Property Tax Payment deadline: March 31, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Scrolling Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} text-white transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {banner.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {banner.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                  Pay Property Tax
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
                  View Services
                </button>
                <button className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-200">
                  Lodge Grievance
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Sheohar Nagar Parishad */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Sheohar Nagar Parishad</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1956</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">26</div>
                  <div className="text-sm text-gray-600">Wards</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">45,000+</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Digital</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Sheohar Nagar Parishad is committed to providing clean, digital, and efficient governance 
                to all citizens. Our vision is to create a smart city with transparent administration, 
                modern infrastructure, and citizen-centric services.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                Know More
              </button>
            </div>
          </div>
        </section>

        {/* Online Citizen Services */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Online Citizen Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Home className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Property Tax</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Water & Sewerage</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <ShoppingBag className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Trade Licence</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Baby className="w-12 h-12 text-pink-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Birth Certificate</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Death Certificate</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Building Plan</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <Trash2 className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Waste Management</p>
            </div>
            <div className="text-center p-4 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer">
              <MessageSquare className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Grievance</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              View All Services
            </button>
          </div>
        </section>

        {/* Announcements & Public Notices */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Announcements & Public Notices</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">New Property Tax Assessment 2025</h4>
                <p className="text-sm text-gray-600">Updated property tax rates effective from April 1, 2025</p>
              </div>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">E-Tender for Road Construction</h4>
                <p className="text-sm text-gray-600">Tender notice for Ward 15-18 road development project</p>
              </div>
              <span className="text-xs text-gray-500">5 days ago</span>
            </div>
            <div className="flex items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <Calendar className="w-6 h-6 text-green-600 mr-3" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Swachh Bharat Mission Drive</h4>
                <p className="text-sm text-gray-600">Community cleanliness drive scheduled for this weekend</p>
              </div>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              View All Notices
            </button>
          </div>
        </section>

        {/* Online Tax & Payments */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Online Tax & Payments</h3>
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all cursor-pointer">
              <CreditCard className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Property Tax</p>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all cursor-pointer">
              <Droplets className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Water Bills</p>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all cursor-pointer">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Trade Licence</p>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all cursor-pointer">
              <Trash2 className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Sanitation</p>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all cursor-pointer">
              <Download className="w-12 h-12 mx-auto mb-3" />
              <p className="text-sm font-medium">Receipts</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Pay Now
            </button>
          </div>
        </section>

        {/* Mayor & Executive Officer Desk */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Mayor's Desk</h4>
                <p className="text-gray-600">Shri Rajesh Kumar</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "Our commitment is to serve the citizens of Sheohar with transparency, 
              efficiency, and dedication towards building a smart and sustainable city."
            </p>
            <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Read More →
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Executive Officer</h4>
                <p className="text-gray-600">Smt. Priya Sharma, IAS</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              "We are implementing digital governance solutions to ensure seamless 
              service delivery and citizen engagement in all municipal operations."
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Read More →
            </button>
          </div>
        </section>

        {/* Photo Gallery & Events */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Photo Gallery & Events</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center">
              <Camera className="w-12 h-12 text-orange-600" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
              <Trash2 className="w-12 h-12 text-green-600" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
              <Droplets className="w-12 h-12 text-blue-600" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
              <Building2 className="w-12 h-12 text-purple-600" />
            </div>
          </div>
          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              View Gallery
            </button>
          </div>
        </section>

        {/* Projects & Development Works */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects & Development Works</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Hammer className="w-12 h-12 text-orange-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Roads & Drainage</h4>
              <p className="text-gray-600 text-sm">Comprehensive road development and drainage system upgrade across all wards.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-yellow-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">LED Street Lights</h4>
              <p className="text-gray-600 text-sm">Energy-efficient LED street lighting installation for better safety and visibility.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Droplets className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Water Supply</h4>
              <p className="text-gray-600 text-sm">24x7 clean water supply system with modern pipeline infrastructure.</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
              Explore Projects
            </button>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <ExternalLink className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <p className="text-sm font-medium">UDHD Bihar</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm font-medium">District Portal</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-sm font-medium">RTI</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Contact Directory</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <Download className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Downloads</p>
            </div>
            <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium">Tenders</p>
            </div>
          </div>
        </section>

        {/* Contact & Helpline */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact & Helpline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
              <p className="text-sm text-gray-600">Nagar Parishad Bhawan, Sheohar, Bihar - 843329</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-sm text-gray-600">info@sheoharnagarparishad.gov.in</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
              <p className="text-sm text-gray-600">+91-6244-222-XXX</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
              <p className="text-sm text-gray-600">Mon-Fri: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-bold">Sheohar Nagar Parishad</h5>
                  <p className="text-xs text-gray-400">Government of Bihar</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                The Official Portal of Sheohar Nagar Parishad for all Welfare Schemes.
                Dedicated to serving the citizens with transparency, accountability, and efficiency.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-orange-500">Portal Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Nagar Parishad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Help & FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Feedback / Suggestions</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-orange-500">Services</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Online Payments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Certificates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Licenses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Grievances</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400">Sheohar, Bihar, India</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-semibold">181 (CM Helpline)</p>
                    <p className="text-xs text-gray-400">24x7 Toll Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Last Updated: 25 Nov 2025</span>
                <span className="hidden md:inline">|</span>
                <div className="flex items-center space-x-2">
                  <span>Visitors:</span>
                  <span className="bg-gray-800 px-2 py-1 rounded font-mono text-white">100</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure & Safe</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4 text-green-500" />
                  <span>SSL Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Government of Bihar. All Rights Reserved. |
              <span className="ml-2">Designed & Developed by <span className="text-orange-500 font-semibold">Digital India Initiative</span></span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;