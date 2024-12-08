import Image from "next/image";
import Link from "next/link";

// Sample Data for Recent Posts
const recentPosts = [
  {
    id: 1,
    imageSrc: "/pane.jpeg",
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    link: "#",
  },
  {
    id: 2,
    imageSrc: "/rm.jpeg",
    title: "Explporing new ways of decorating",
    date: "03 Aug 2022",
    link: "#",
  },
  {
    id: 3,
    imageSrc: "/3d.jpeg",
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    link: "#",
  },
  {
    id: 4,
    imageSrc: "/4d.jpeg",
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    link: "#",
  },

];

const RecentPosts = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link key={post.id} href={post.link} className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={64}
                height={64}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
