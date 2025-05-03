export default function Nav() {
  return (
    // <nav className="w-full border-b h-16 bg-white sticky top-0 z-10">
    //   <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
    //     <a href="/" className="text-lg font-garamond italic">
    //       Meltwater Archives
    //     </a>
    //   </div>
    // </nav>
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/70 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="h-full flex items-center px-6 font-bold text-lg">
        <a href="/" className="text-lg font-garamond italic">
          The Meltwater Archive
        </a>
      </div>
    </nav>
  );
}
