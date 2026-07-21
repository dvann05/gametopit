'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import useThemeStore from '@/store/themeStore';
import useCartStore from '@/store/cartStore';
import { FiMenu, FiX, FiShoppingCart, FiMoon, FiSun } from 'react-icons/fi';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useThemeStore();
  const cartItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="bg-white dark:bg-dark-light shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary">
          🎮 GameTopit
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/games" className="hover:text-primary transition">
            Semua Game
          </Link>
          {user?.role === 'admin' && (
            <Link href="/admin" className="hover:text-primary transition">
              Admin
            </Link>
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => toggleTheme()}
            className="p-2 hover:bg-gray-100 dark:hover:bg-dark-lighter rounded-lg transition"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-dark-lighter rounded-lg transition">
            <FiShoppingCart size={20} />
            {cartItems > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold hidden sm:inline">{user.username}</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
          <Link href="/games" className="block hover:text-primary transition">
            Semua Game
          </Link>
          {user?.role === 'admin' && (
            <Link href="/admin" className="block hover:text-primary transition">
              Admin
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
