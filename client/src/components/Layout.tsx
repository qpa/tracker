import { Home, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from './ui/button';

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Home className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Tracker</span>
              </Link>
            </div>

            <nav className="flex items-center space-x-4">
              <Link to="/">
                <Button variant={location.pathname === '/' ? 'default' : 'ghost'} size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>

              <Link to="/create">
                <Button variant={location.pathname === '/create' ? 'default' : 'ghost'} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Create
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 Tracker Application</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
