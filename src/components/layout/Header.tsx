import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { navItems, trialLink } from '@/lib/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-300 ease-smooth',
        scrolled
          ? 'bg-cream-100/90 shadow-soft backdrop-blur-md'
          : 'bg-cream-100/60 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="ILE English Center — Trang chủ"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-ink-900 text-cream-100 shadow-soft transition-transform duration-300 ease-smooth group-hover:scale-105">
              <Sparkles className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="font-heading text-xl font-extrabold tracking-tight text-ink-900">
              ILE
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to={trialLink} className="btn-accent">
              Đăng ký học thử
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-default text-ink-800 transition-colors hover:bg-cream-200 lg:hidden"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-300/40 bg-cream-100 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-4 py-3 font-body text-base font-semibold text-ink-800 transition-colors hover:bg-cream-200"
              >
                {item.label}
              </Link>
            ))}
            <Link to={trialLink} className="btn-accent mt-2 w-full">
              Đăng ký học thử
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const [pathname, hash] = to.split('#');
  const isActive =
    location.pathname === pathname &&
    ((hash && location.hash === `#${hash}`) ||
      (!hash && !location.hash));

  return (
    <Link
      to={to}
      className={[
        'rounded-xl px-4 py-2 font-body text-sm font-semibold tracking-wide transition-colors duration-200',
        isActive
          ? 'text-ink-900'
          : 'text-ink-600 hover:text-ink-900',
      ].join(' ')}
    >
      {label}
    </Link>
  );
}
