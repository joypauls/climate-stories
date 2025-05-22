import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  description: string;
  isPublished?: boolean;
};

export default function StoryCard({
  title,
  slug,
  description,
  isPublished = true,
}: Props) {
  return (
    <Link
      href={isPublished ? slug : "#"}
      className="block border rounded p-6 hover:shadow-lg min-h-[200px] flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {!isPublished && (
        // <div className="w-full flex justify-center">
        <div className="w-full flex">
          <span className="inline-block bg-amber-400 text-white text-sm font-semibold px-2 py-1 mt-4">
            Coming Soon!
          </span>
        </div>
      )}
    </Link>
  );
}
