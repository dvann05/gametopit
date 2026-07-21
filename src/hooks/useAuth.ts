import { useEffect } from 'react';
import useAuthStore from '@/store/authStore';

export const useAuth = () => {
  const { user, token, isLoading, error, login, register, logout, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    user,
    token,
    isLoading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.role === 'admin',
  };
};
