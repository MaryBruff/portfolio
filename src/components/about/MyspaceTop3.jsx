// src/components/MySpaceTop3.tsx
"use client";

import Image from "next/image";

const friends = [
  { name: "Martin Gore", img: "/Martin.png" },
  { name: "Pammy ᡣ𐭩", img: "https://i.pinimg.com/1200x/8a/69/48/8a6948b3679f0a207e99aecd19a24878.jpg" },
  { name: "Morrissey", img: "https://pbs.twimg.com/media/G17Mx07XoAAs51t?format=jpg&name=medium" },
  { name: "John Keats", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/John_Keats_by_William_Hilton.jpg/989px-John_Keats_by_William_Hilton.jpg" },
  { name: "Spaceman", img: "/spaceman.jpg" }, 
  { name: "Pee-wee Herman", img: "https://64.media.tumblr.com/4b92f0b48dc8d85e50c0ef862a69959c/2a90485d3411a9f4-e7/s1280x1920/3d5822dafb8952da05505c3deeba57252c92c6a5.jpg" },
  { name: "Franz Kafka", img: "https://ca-times.brightspotcdn.com/dims4/default/e73f8fc/2147483647/strip/true/crop/495x600+0+0/resize/1200x1455!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2F05%2F77e6db347e99564807c60fa467bd%2Fla-et-jc-why-kafka-matters-20130623-001" },
  { name: "James Dean", img: "https://robbreport.com/wp-content/uploads/2018/12/Getty_Dean_C28718121218250.jpg" },
];

export default function MySpaceTop3() {
  return (
    <section>
      {/* Header */}
      <header className="bg-pink-200 text-pink-500 text-sm font-bold px-2 py-1 mb-3">
        <h5>Mary Bruff&apos;s Friend Space</h5>
      </header>

      {/* Friend count */}
      <p className="mb-4 text-sm">
        <b>
          Mary has <span className="text-base text-purple-700">5,757</span> Friends.
        </b>
      </p>

      {/* Friends grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {friends.map((friend, idx) => (
          <figure key={idx} className="text-center">
            <figcaption className="text-xs font-semibold mb-1">
              <a href="#" className="hover:underline whitespace-pre-line">
                {friend.name}
              </a>
            </figcaption>

            {/* Square, consistent image frame */}
            <div className="relative aspect-square w-full rounded border overflow-hidden">
              <Image
                src={friend.img}
                alt={friend.name}
                fill
                // same crop on all devices
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 50vw, 25vw"
                priority={idx < 4} // speed up first row
              />
            </div>
          </figure>
        ))}
      </div>

      {/* Link to all friends */}
      <p className="flex justify-end mt-4 text-sm">
        <a
          href="#"
          className="!text-purple-700 visited:!text-purple-700 hover:underline"
        >
          View All of Mary&apos;s Friends
        </a>
      </p>
    </section>
  );
}
