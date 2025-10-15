import Link from "next/link";

type Post = { t: string; u: string };

export default function Blog({
  posts = [
    { t: "6 Albums to Get You into Jazz", u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/6-albums-to-get-you-into-jazz" },
    { t: "Not Your Cliché Jangle Pop Song Recommendation (Pt. 1)", u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/not-your-cliché-jangle-pop-song-recommendation-pt-1" },
    { t: "5 Underrated Alternative Albums from the 90s", u: "https://mbruff.wixsite.com/letstalkabooutmusic/post/5-underrated-alternative-albums-from-the-90s" },
  ],
  title = "Mary’s Latest Blog Entry",
  subscribeUrl,
  viewAllUrl = "https://mbruff.wixsite.com/letstalkabooutmusic",
}: {
  posts?: Post[];
  title?: string;
  subscribeUrl?: string;
  viewAllUrl?: string;
}) {
  return (
    <div className="text-sm space-y-4">
      {/* Pink top heading */}
      <div className="heading bg-pink-200 text-pink-500 text-sm font-bold px-2 py-1">
        <h5>Blog</h5>
      </div>

      {/* Original blog content */}
      <div className="mx-auto w-full">
        <table className="mx-auto w-full">
          <tbody>
            <tr>
              <td style={{ wordWrap: "break-word" }}>
                <span className="font-bold">{title} </span>
                {subscribeUrl ? (
                  <>
                    [
                    <Link
                      href={subscribeUrl}
                      target="_blank"
                      className="underline hover:opacity-90"
                    >
                      Subscribe to this Blog
                    </Link>
                    ]
                  </>
                ) : null}
                <br />
                <br />
              </td>
            </tr>

            {posts.map((p) => (
              <tr key={p.t}>
                <td style={{ wordWrap: "break-word", verticalAlign: "top" }}>
                  {p.t}&nbsp;(
                  <Link
                    href={p.u}
                    target="_blank"
                    className="underline hover:opacity-90"
                  >
                    view more
                  </Link>
                  )
                  <br />
                  <br />
                </td>
              </tr>
            ))}

            <tr>
              <td valign="top" align="left" height={25}>
                [
                <Link
                  href={viewAllUrl}
                  target="_blank"
                  className="underline hover:opacity-90"
                >
                  View All Blog Entries
                </Link>
                ]
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
