'use client';

import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';

interface VideoActionsProps {
  liked: boolean;
  onLike: () => void;
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

const VideoActions: React.FC<VideoActionsProps> = ({
  liked,
  onLike,
  likeCount,
  commentCount,
  shareCount
}) => {
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count.toString();
    }
  };

  return (
    <div className="video-actions">
      <div className="flex flex-col items-center mb-4">
        <button
          onClick={onLike}
          className="bg-transparent border-none flex flex-col items-center"
        >
          <FaHeart
            className={`text-4xl mb-1 ${
              liked ? 'text-primary' : 'text-white'
            }`}
          />
          <span className="text-xs">{formatCount(likeCount)}</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-4">
        <button className="bg-transparent border-none flex flex-col items-center">
          <FaComment className="text-4xl mb-1 text-white" />
          <span className="text-xs">{formatCount(commentCount)}</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-4">
        <button className="bg-transparent border-none flex flex-col items-center">
          <FaShareAlt className="text-4xl mb-1 text-white" />
          <span className="text-xs">{formatCount(shareCount)}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoActions; 