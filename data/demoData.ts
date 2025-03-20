import { VideoData } from '../types/video';

// 演示视频数据
export const demoVideos: VideoData[] = [
  {
    id: '1',
    videoUrl: '/videos/demo1.mp4',
    coverUrl: '/images/cover1.jpg',
    description: '大家好！今天带大家看看我的日常生活 #日常 #明星生活',
    likeCount: 234500,
    commentCount: 3200,
    shareCount: 1800,
    hasProducts: true,
    user: {
      id: 'user1',
      name: '张艺兴',
      avatar: '/images/avatar1.jpg',
      verified: true
    }
  },
  {
    id: '2',
    videoUrl: '/videos/demo2.mp4',
    coverUrl: '/images/cover2.jpg',
    description: '分享一下我的新单曲《星光》，希望大家喜欢 #新歌 #音乐',
    likeCount: 546000,
    commentCount: 12400,
    shareCount: 8900,
    hasProducts: true,
    user: {
      id: 'user2',
      name: '周杰伦',
      avatar: '/images/avatar2.jpg',
      verified: true
    }
  },
  {
    id: '3',
    videoUrl: '/videos/demo3.mp4',
    coverUrl: '/images/cover3.jpg',
    description: '我的新电影《未来之城》即将上映，敬请期待！ #电影 #新作品',
    likeCount: 876300,
    commentCount: 27800,
    shareCount: 15600,
    hasProducts: false,
    user: {
      id: 'user3',
      name: '杨幂',
      avatar: '/images/avatar3.jpg',
      verified: true
    }
  }
]; 