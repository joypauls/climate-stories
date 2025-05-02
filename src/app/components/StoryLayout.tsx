import Nav from "./Nav";
import Footer from "./Footer";

type Props = {
  // title: string;
  // subtitle?: string;
  children: React.ReactNode;
};

// export default function StoryLayout({ title, subtitle, children }: Props) {
export default function StoryLayout({ children }: Props) {
  return (
    <>
      <Nav />
      <main className="prose prose-lg max-w-3xl mx-auto px-6">
        {/* <h1 className="text-3xl md:text-5xl mb-3 font-bold font-garamond italic">
          {title}
        </h1>
        {subtitle && <p className="text-gray-500 mb-10">{subtitle}</p>} */}
        {children}
      </main>
      <Footer />
    </>
  );
}
