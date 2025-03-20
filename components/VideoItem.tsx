'use client';

import { useState, useRef } from 'react';
import { FaHeart, FaComment, FaShare, FaShoppingCart } from 'react-icons/fa';
import VideoActions from './VideoActions';
import UserInfo from './UserInfo';
import { VideoData } from '../types/video';

interface VideoItemProps {
  video: VideoData;
  isActive: boolean;
  addVideoRef: (ref: HTMLVideoElement | null) => void;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isActive, addVideoRef }) => {
  const [liked, setLiked] = useState(false);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setShowLikeAnimation(true);
      setTimeout(() => setShowLikeAnimation(false), 1000);
    }
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setShowLikeAnimation(true);
      setTimeout(() => setShowLikeAnimation(false), 1000);
    }
  };

  // 通过点击视频用户头像打开聊天确认弹窗
  const handleUserProfileClick = () => {
    // 在实际项目中，这里应该弹出确认对话框
    alert(`你想要和 ${video.user.name} 开始聊天吗？`);
  };

  return (
    <div className="video-container relative" onDoubleClick={handleDoubleClick}>
      <video
        ref={addVideoRef}
        className="video-player"
        src={video.videoUrl}
        loop
        playsInline
        muted={!isActive}
        poster={video.coverUrl}
      />
      
      {/* 点赞动画效果 */}
      {showLikeAnimation && (
        <div className="absolute inset-0 flex items-center justify-center">
          <FaHeart className="text-primary text-8xl heart-animation" />
        </div>
      )}
      
      {/* 视频右侧操作按钮 */}
      <VideoActions 
        liked={liked}
        onLike={handleLike}
        likeCount={video.likeCount}
        commentCount={video.commentCount}
        shareCount={video.shareCount}
      />
      
      {/* 用户信息和视频描述 */}
      <UserInfo
        user={video.user}
        description={video.description}
        onUserClick={handleUserProfileClick}
      />
      
      {/* 底部购物车图标 */}
      {video.hasProducts && (
        <div className="absolute bottom-5 right-16">
          <FaShoppingCart className="text-white text-2xl" />
        </div>
      )}
    </div>
  );
};

export default VideoItem; 