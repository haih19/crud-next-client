'use client';

import { UserService } from '@/http';
import { useEffect } from 'react';

export default function UsersPage() {
  const fetch = async () => {
    try {
      const res = await UserService.getUsers();
      console.log('rest>>>', res);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetch();
    console.log('tets');
  }, []);
  return <div className="h-dvh bg-slate-400">'users'</div>;
}
