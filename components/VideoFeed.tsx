'use client';

import { useRef, useEffect } from 'react';
import VideoItem from './VideoItem';
import { VideoData } from '../types/video';

interface VideoFeedProps {
  videos: VideoData[];
  currentIndex: number;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ videos, currentIndex }) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // 管理视频播放/暂停
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex) {
        if (video.paused) {
          video.play().catch(error => {
            console.error('Video play failed:', error);
          });
        }
      } else {
        video.pause();
      }
    });
  }, [currentIndex, videos]);

  const addVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) {
      videoRefs.current[index] = el;
    }
  };

  return (
    <div className="video-feed">
      {videos.map((video, index) => (
        <VideoItem
          key={video.id}
          video={video}
          isActive={index === currentIndex}
          addVideoRef={(el) => addVideoRef(el, index)}
        />
      ))}
    </div>
  );
};

export default VideoFeed; 