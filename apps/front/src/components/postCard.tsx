import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";

type Props = Partial<Post>;

const PostCard = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="relative h-40 overflow-hidden">
        <Image src={thumbnail ?? "/no-image.png"} alt={title ?? ""} fill />
      </div>
    </div>
  );
};

export default PostCard;
