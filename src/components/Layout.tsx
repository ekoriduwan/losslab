import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Factory, ActivitySquare, BrainCircuit, HelpCircle, TerminalSquare, Search, Bell, Settings, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/assets', icon: Factory, label: 'Assets' },
  { to: '/simulator', icon: ActivitySquare, label: 'Simulator' },
  { to: '/ai-insights', icon: BrainCircuit, label: 'AI Insights' },
];

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/assets': 'Assets',
  '/simulator': 'Simulator',
  '/ai-insights': 'AI Recommendation',
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname] || 'LOSSLAB';

  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden h-screen flex">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant py-lg z-50">
        <div className="px-lg mb-xl">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <ActivitySquare size={18} />
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-black tracking-tight text-on-background">LOSSLAB</h1>
              <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Industrial Precision</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-sm space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-md px-md py-sm rounded-lg transition-all active:scale-95 duration-75 ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container-highest'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-label-md text-label-md">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="px-sm pt-md mt-auto border-t border-outline-variant/30">
          <button className="w-full flex items-center justify-center gap-sm bg-primary text-white font-label-md py-sm rounded-lg hover:brightness-110 active:scale-95 transition-all mb-lg">
            <Plus size={16} />
            New Scenario
          </button>
          <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <HelpCircle size={20} />
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <TerminalSquare size={20} />
            <span className="font-label-md text-label-md">Logs</span>
          </a>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* TopAppBar */}
        <header className="flex justify-between items-center px-lg w-full sticky top-0 z-40 bg-surface border-b border-outline-variant h-16">
          <div className="flex items-center gap-md">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">{pageTitle}</h2>
          </div>
          <div className="flex items-center gap-lg">
            <div className="relative hidden sm:block">
              <input
                className="bg-surface-container-low border border-outline-variant rounded-full px-xl py-base text-body-md focus:outline-none focus:ring-1 focus:ring-primary w-64"
                placeholder="Search parameters..."
                type="text"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
            </div>
            <button className="bg-primary text-on-primary px-lg py-base rounded-lg font-label-md hover:brightness-110 transition-all active:scale-95">
              Run Simulation
            </button>
            <div className="flex items-center gap-sm border-l border-outline-variant pl-md">
              <button className="p-1 text-on-surface-variant hover:bg-surface-container rounded transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-1 text-on-surface-variant hover:bg-surface-container rounded transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 rounded-full border border-outline-variant bg-primary-container overflow-hidden flex items-center justify-center text-on-primary-container font-bold text-sm">
                EK
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-lg bg-background">
          <div className="max-w-[1600px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant flex justify-around items-center py-base z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center p-sm ${isActive ? 'text-primary' : 'text-on-surface-variant'}`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-label-md">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
