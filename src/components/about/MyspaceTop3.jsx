"use client";

const friends = [
  { name: "tom", img: "https://picsum.photos/100?random=1" },
  { name: "Andi", img: "https://picsum.photos/100?random=2" },
  { name: "abraham", img: "https://picsum.photos/100?random=3" },
  { name: "tanner", img: "https://picsum.photos/100?random=4" },
  { name: "Tams", img: "https://picsum.photos/100?random=5" },
  { name: "Haley ˖ ᡣ𐭩", img: "https://picsum.photos/100?random=6" },
  { name: "J-e-n-n-i", img: "https://picsum.photos/100?random=7" },
  { name: "James Dean", img: "https://picsum.photos/100?random=8" },
];

export default function MySpaceTop3() {
  return (
    <section>
      {/* Header */}
      <header className="bg-orange-200 text-orange-500 text-sm font-bold px-2 py-1 mb-3">
        <h5>Mary Bruff&apos;s Friend Space</h5>
      </header>

      {/* Friend count */}
      <p className="mb-4 text-sm">
        <b>
          Mary has <span className="text-red-700">73090713</span> Friends.
        </b>
      </p>

      {/* Friends grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {friends.map((friend, idx) => (
          <figure key={idx} className="text-center w-full h-full">
            <figcaption className="text-xs font-semibold mb-1">
              <a href="#" className="hover:underline whitespace-pre-line">
                {friend.name}
              </a>
            </figcaption>
            <div className="w-full h-32 sm:h-40 flex items-center justify-center">
              <img
                src={friend.img}
                alt={friend.name}
                className="w-full h-full object-cover border"
              />
            </div>
          </figure>
        ))}
      </div>

      {/* Link to all friends */}
      <p className="flex justify-end mt-4 text-sm">
        <a
          href="#"
          className="!text-red-700 visited:!text-red-700 hover:underline"
        >
          View All of Mary&apos;s Friends
        </a>
      </p>
    </section>
  );
}
