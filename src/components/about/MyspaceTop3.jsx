"use client";

const friends = [
  { name: "Martin Gore", img: "/Martin.png"},
  { name: "Pammy ᡣ𐭩", img: "https://i.pinimg.com/1200x/8a/69/48/8a6948b3679f0a207e99aecd19a24878.jpg" },
  { name: "Morrissey", img: "https://pbs.twimg.com/media/G17Mx07XoAAs51t?format=jpg&name=medium" },
  { name: "John Keats", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/John_Keats_by_William_Hilton.jpg/989px-John_Keats_by_William_Hilton.jpg" },
  { name: "Arsenal", img: "https://pbs.twimg.com/profile_images/1971499669248180224/i2fASOX8_400x400.jpg" },
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
          className="!text-purple-700 visited:!text-purple-700 hover:underline"
        >
          View All of Mary&apos;s Friends
        </a>
      </p>
    </section>
  );
}
