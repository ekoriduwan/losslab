import { ReactNode } from 'react';
import { LayoutDashboard, Factory, ActivitySquare, BrainCircuit, HelpCircle, TerminalSquare, Search, Bell, Settings } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden h-screen flex">
      {/* SideNavBar Anchor */}
      <aside className="hidden md:flex flex-col h-full py-lg w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-40 transition-all duration-300">
        <div className="px-lg mb-xl">
          <h1 className="font-headline-md text-headline-md font-black tracking-tight text-on-background">LOSSLAB</h1>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1">Industrial Precision</p>
        </div>
        <nav className="flex-1 px-md space-y-1">
          <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold bg-surface-container-highest transition-all duration-75" href="#">
            <LayoutDashboard size={20} />
            <span className="font-label-md text-label-md">Dashboard</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <Factory size={20} />
            <span className="font-label-md text-label-md">Assets</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <ActivitySquare size={20} />
            <span className="font-label-md text-label-md">Simulator</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <BrainCircuit size={20} />
            <span className="font-label-md text-label-md">AI Insights</span>
          </a>
          <div className="pt-lg pb-base">
            <button className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all">
              New Scenario
            </button>
          </div>
        </nav>
        <footer className="px-md mt-auto pt-lg border-t border-outline-variant/30 space-y-1">
          <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container" href="#">
            <HelpCircle size={20} />
            <span className="font-label-md text-label-md">Support</span>
          </a>
          <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container" href="#">
            <TerminalSquare size={20} />
            <span className="font-label-md text-label-md">Logs</span>
          </a>
        </footer>
      </aside>

      <main className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        {/* TopAppBar Anchor */}
        <header className="flex justify-between items-center px-lg w-full sticky top-0 z-50 h-16 bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-md">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Overview</h2>
            <div className="hidden lg:flex items-center gap-sm ml-xl border-l border-outline-variant pl-xl">
              <span className="text-on-surface-variant font-label-md text-label-md">Region:</span>
              <select className="bg-transparent border-none text-on-surface font-label-md text-label-md focus:ring-0 p-0 cursor-pointer">
                <option>Central Grid Alpha</option>
                <option>Sector 7-G</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-xl">
            <div className="relative hidden sm:block">
              <input className="bg-surface-container-low border border-outline-variant rounded-full px-lg py-base text-body-md w-64 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Search parameters..." type="text" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            </div>
            <div className="flex items-center gap-md">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-base rounded hover:brightness-110 transition-colors">
                Run Simulation
              </button>
              <button className="p-base text-on-surface-variant hover:bg-surface-container-highest rounded transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-base text-on-surface-variant hover:bg-surface-container-highest rounded transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 rounded-full border border-outline-variant ml-base bg-secondary overflow-hidden">
                <img alt="User profile" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Canvas */}
        <div className="flex-1 overflow-y-auto p-lg bg-surface-bright">
          <div className="max-w-[1600px] mx-auto space-y-lg">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
