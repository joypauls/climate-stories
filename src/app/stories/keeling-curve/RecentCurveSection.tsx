"use client";

import KeelingCurveRecent from "@/app/stories/keeling-curve/visuals/KeelingCurveRecent";

export default function RecentCurveSection() {
  return (
    <section className="h-[200vh] relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="mt-10 w-full max-w-4xl">
          <KeelingCurveRecent />
        </div>
      </div>
    </section>
  );
}
