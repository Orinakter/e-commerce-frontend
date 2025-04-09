;
import { Boxes, Heart, Home, Info, LayoutDashboard, LogIn,  MessageSquare, Phone, ShoppingCart} from 'lucide-react';
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
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center btn btn-sm gap-2 transition-colors">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link href="/all-products" className="flex items-center btn btn-sm gap-2">
              <Boxes className="size-5" />
              <span className="hidden sm:inline">All Products</span>
            </Link>

            <Link href="/cart" className="flex items-center btn btn-sm gap-2">
              <ShoppingCart className="size-5" />
              <span className="hidden sm:inline">Cart</span>
            </Link>
            <Link href="/wish" className="flex items-center btn btn-sm gap-2">
              <Heart className="size-5" />
              <span className="hidden sm:inline">Wishlist</span>
            </Link>
            <Link href="/about" className="flex items-center btn btn-sm gap-2">
              <Info className="size-5" />
              <span className="hidden sm:inline">About</span>
            </Link>
            <Link href="/contact" className="flex items-center btn btn-sm gap-2">
              <Phone className="size-5" />
              <span className="hidden sm:inline">Contact</span>
            </Link>
            <Link href="/dashboard" className="flex items-center btn btn-sm gap-2">
              <LayoutDashboard className="size-5" />
              <span className="hidden sm:inline">Dashboard</span>
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
