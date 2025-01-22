import Image from "next/image"
import Link from "next/link"
import RecentPosts from "../components/recentposts"

export default function BlogTemplate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-3xl font-semibold mt-8">Blog</h1>
      </header>


      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-12">
          {/* Blog Post 1 */}
          <article className="space-y-4">
            <Link href="#" className="block group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/laptop.jpeg"
                  alt="Laptop on wooden table"
                  width={600}
                  height={400}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
                Going all-in with millennial design
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Link 
              href="#" 
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Read more
            </Link>
          </article>

          {/* Blog Post 2 */}
          <article className="space-y-4">
            <Link href="#" className="block group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/writiing.jpeg?height=400&width=600"
                  alt="Person writing in notebook"
                  width={600}
                  height={400}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
                Exploring new ways of decorating
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Link 
              href="#" 
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Read more
            </Link>
          </article>

          {/* Blog Post 3 */}
          <article className="space-y-4">
            <Link href="#" className="block group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/work1.jpeg?height=400&width=600"
                  alt="Coffee cup and laptop"
                  width={600}
                  height={400}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">
                Handmade pieces that took time to make
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <Link 
              href="#" 
              className="inline-block text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Read more
            </Link>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Design', 'Photography', 'Technology', 'Travel', 'Food'].map((category) => (
                <li key={category}>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <RecentPosts />
          

         
        </div>
      </div>
    </div>
  )
}


