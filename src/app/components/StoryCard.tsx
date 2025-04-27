import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
};

export default function StoryCard({ title, slug, description }: Props) {
  return (
    <Link
      href={slug}
      className="block border rounded-lg p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}
