export default function Footer() {
  return (
    <footer className="py-10 bg-black text-white text-center px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} Bookmark Manager. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
