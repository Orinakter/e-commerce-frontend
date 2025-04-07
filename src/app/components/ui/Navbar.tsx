;
import { Home, LogIn,  MessageSquare, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left Side - Logo */}
          <div className="flex items-center gap-8">
            <Link href={''} className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">BurGer</h1>
            </Link>
          </div>

          {/* Right Side - Buttons */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center btn btn-sm gap-2 transition-colors">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link href="/all-products" className="flex items-center btn btn-sm gap-2">
              <ShoppingCart className="size-5" />
              <span className="hidden sm:inline">All Products</span>
            </Link>

            <Link href="/all-products" className="flex items-center btn btn-sm gap-2">
              <User className="size-5" />
              <span className="hidden sm:inline">All Products</span>
            </Link>

            <button className="flex gap-2 items-center">
              <LogIn className="size-5" />
              <span className="hidden sm:inline">Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
