'use client';

import Image from 'next/image';
import { User } from '../types/video';

interface UserInfoProps {
  user: User;
  description: string;
  onUserClick: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, description, onUserClick }) => {
  return (
    <div className="video-info">
      <div className="flex items-center mb-2">
        <div 
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer mr-3"
          onClick={onUserClick}
        >
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h4 
            className="text-white font-bold m-0 cursor-pointer"
            onClick={onUserClick}
          >
            {user.name}
            {user.verified && (
              <span className="ml-1 text-secondary text-xs">✓</span>
            )}
          </h4>
        </div>
      </div>
      <p className="text-sm text-gray-300 m-0">{description}</p>
    </div>
  );
};

export default UserInfo; 