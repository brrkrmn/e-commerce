import PostCard from "../../../../components/PostCard/PostCard";
import { posts } from "./constants";

const FeaturedPosts = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-start gap-12 px-4 py-20">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h6 className="text-blue text-sm font-semibold">Practice Advice</h6>
        <h2 className="text-dark-blue text-3xl font-bold">Featured Posts</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedPosts;