export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-black text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        What Our Users Say
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {[
          {
            name: "Jane Doe",
            feedback: "This bookmark manager changed how I browse the web!",
          },
          {
            name: "John Smith",
            feedback: "Super easy to use and keeps everything organized.",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border border-black rounded-xl shadow-md"
          >
            <p className="text-lg italic">"{testimonial.feedback}"</p>
            <p className="font-semibold mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
