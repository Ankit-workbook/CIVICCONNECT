import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ReportForm from '@/components/report/report-form';

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Report a Civic Issue
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us improve our community. Report issues quickly and track their resolution.
            </p>
          </div>
          <ReportForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
