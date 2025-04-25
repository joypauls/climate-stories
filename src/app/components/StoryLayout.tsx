import Nav from './Nav';
import Footer from './Footer';

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function StoryLayout({ title, subtitle, children }: Props) {
  return (
    <>
      <Nav />
      <main className="prose prose-lg max-w-3xl mx-auto px-4 py-12">
        <h1>{title}</h1>
        {subtitle && <p className="text-gray-500 italic -mt-4 mb-8">{subtitle}</p>}
        {children}
      </main>
      <Footer />
    </>
  );
}
