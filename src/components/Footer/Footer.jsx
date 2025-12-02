const Footer = () => {
    return (
        <footer id="contact" class="bg-black text-gray-300 py-12">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
      <div>
        <h3 class="text-white font-bold mb-4">Rfky</h3>
        <nav class="space-y-2">
          <a href="#" class="block hover:text-yellow-400">Home</a>
          <a href="#about" class="block hover:text-yellow-400">About</a>
          <a href="#contact" class="block hover:text-yellow-400">Contact Us</a>
        </nav>
      </div>
      <div>
        <h3 class="text-white font-bold mb-4">Contact</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-yellow-400">WhatsApp</a></li>
          <li><a href="#" class="hover:text-yellow-400">Instagram</a></li>
          <li><a href="#" class="hover:text-yellow-400">LinkedIn</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-white font-bold mb-2">Alamat</h3>
        <p>Jl. Roda, RT.03/RW.01, Sindangbarang, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16117</p>
      </div>
    </div>
    <p class="text-center text-sm mt-10 text-gray-500">
      Copyright © 2025 Rfky. All rights reserved.
    </p>
  </footer>
    )
}

export default Footer;