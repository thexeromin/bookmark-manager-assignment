import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white text-black text-center px-6 md:px-8">
      <h1 className="text-6xl md:text-9xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}
