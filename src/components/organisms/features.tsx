export default function Features() {
  return (
    <section className="py-20 bg-white text-black text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Why Choose Our Bookmark Manager?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Easy Organization",
            description: "Categorize your bookmarks for quick access."
          },
          {
            title: "Sync Across Devices",
            description: "Access your bookmarks anywhere, anytime."
          },
          {
            title: "One-Click Saving",
            description: "Save your favorite links with a single click."
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-black rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
