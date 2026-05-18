export default function FashionStore() {
  const products = [
    {
      name: 'Classic T-Shirt',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Streetwear Jacket',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Slim Fit Pants',
      price: '$40',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Winter Hoodie Jacket',
      price: '$75',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">DRUBO FASHION</h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-4">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Wear Your Style
          </h2>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium T-Shirts, Jackets & Pants for Modern Fashion Lovers.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Featured Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-xl px-4 py-2 w-56"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-8">
            DRUBO FASHION is a modern clothing brand focused on stylish and comfortable fashion.
            We provide high-quality T-Shirts, Pants, Jackets, and streetwear collections for men and women.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">Email: contact@drubofashion.com</p>
          <p className="mb-8">Phone: +880 1234-567890</p>

          <form className="grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl text-black"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-xl text-black"
            ></textarea>
            <button className="bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>© 2026 DRUBO FASHION. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
