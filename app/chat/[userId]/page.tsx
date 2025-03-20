'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { demoVideos } from '../../../data/demoData';

export default function ChatConfirmPage({ params }: { params: { userId: string } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const userId = params.userId;
  
  // 根据用户ID查找用户信息
  const user = demoVideos.find(video => video.user.id === userId)?.user;
  
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <p>用户不存在</p>
        <button 
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-full"
        >
          返回首页
        </button>
      </div>
    );
  }

  const handleChatRequest = () => {
    setLoading(true);
    // 模拟支付流程，正常情况下应该调用支付API
    setTimeout(() => {
      setLoading(false);
      alert('支付成功！即将跳转到微信...');
      // 真实场景下，这里应该跳转到微信或其他聊天平台
      window.location.href = 'weixin://';
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-dark">
      <div className="w-full max-w-md bg-black rounded-xl overflow-hidden shadow-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-xl font-bold mb-2 text-white">
          {user.name} {user.verified && <span className="text-secondary">✓</span>}
        </h1>
        
        <p className="text-gray-300 mb-6">
          你想要和 {user.name} 开始私人聊天吗？
        </p>
        
        <div className="mb-6">
          <p className="text-yellow-500 text-lg font-semibold">
            ¥ 99.00 / 30分钟
          </p>
          <p className="text-gray-400 text-sm">
            支付后将跳转至微信与明星进行聊天
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <button
            onClick={handleChatRequest}
            disabled={loading}
            className={`w-full py-3 rounded-full font-bold ${
              loading 
                ? 'bg-gray-600 text-gray-300' 
                : 'bg-primary text-white hover:bg-opacity-90'
            }`}
          >
            {loading ? '处理中...' : '立即支付开始聊天'}
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full py-3 rounded-full bg-transparent border border-gray-600 text-white"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
} 