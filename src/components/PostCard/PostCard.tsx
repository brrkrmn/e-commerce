import { AlarmClock, ChartLine, ChevronRight } from "lucide-react";

const PostCard = ({
  post,
}: {
  post: {
    title: string;
    description: string;
    date: string;
    comments: string;
    src: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center justify-start shadow-2xl max-w-[470px]">
      <img src={post.src} className="" />
      <div className="w-full flex flex-col items-start justify-start gap-5 px-8 py-4">
        <div className="flex items-center justify-start gap-3 w-full text-sm font-medium text-gray">
          <p className="text-blue">Google</p>
          <p>Trending</p>
          <p>New</p>
        </div>
        <h4 className="text-dark-blue font-medium text-lg">{post.title}</h4>
        <p className="text-xs text-gray font-medium">{post.description}</p>
        <div className="flex items-center justify-between text-xs text-gray font-medium w-full">
          <div className="flex items-center justify-start gap-1">
            <AlarmClock className="w-3 h-3 text-blue"/>
            <p>{post.date}</p>
          </div>
          <div className="flex items-center justify-start gap-1">
            <ChartLine className="w-3 h-3 text-green"/>
            <p>{post.comments} comments</p>
          </div>
        </div>
        <button className="flex items-center justify-start gap-1 text-gray font-semibold text-sm">
          <h6>Learn More</h6>
          <ChevronRight className="text-blue" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
