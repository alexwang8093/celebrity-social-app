'use client';

import { useState, useEffect, useRef } from 'react';
import VideoFeed from '../components/VideoFeed';
import { demoVideos } from '../data/demoData';

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  // 处理滑动事件
  const handleScroll = () => {
    if (feedRef.current) {
      const scrollPosition = feedRef.current.scrollTop;
      const videoHeight = window.innerHeight;
      const index = Math.round(scrollPosition / videoHeight);
      
      if (index !== currentVideoIndex) {
        setCurrentVideoIndex(index);
      }
    }
  };

  useEffect(() => {
    const feedElement = feedRef.current;
    if (feedElement) {
      feedElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (feedElement) {
        feedElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentVideoIndex]);

  return (
    <div 
      ref={feedRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      <VideoFeed videos={demoVideos} currentIndex={currentVideoIndex} />
    </div>
  );
} 