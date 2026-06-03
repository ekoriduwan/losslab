import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, TrendingDown, PiggyBank, Sparkles, Plus, Link2, Trash2, ZoomIn, ZoomOut, Focus, Play } from 'lucide-react';

const programs = [
  { name: 'Uprating Trafo', checked: true },
  { name: 'P2TL Program', checked: true },
  { name: 'Reconductoring', checked: false },
  { name: 'Reactive Compensation', checked: true },
];

export default function Simulator() {
  const [checkedPrograms, setCheckedPrograms] = useState(programs.map(p => p.checked));

  const toggleProgram = (index: number) => {
    setCheckedPrograms(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="space-y-lg">
      {/* Tabs */}
      <div className="flex gap-lg items-center border-b border-outline-variant">
        <button className="px-base py-md font-label-md text-primary border-b-2 border-primary">Simulation Canvas</button>
        <button className="px-base py-md font-label-md text-on-surface-variant hover:text-primary transition-colors">Historical Comparison</button>
        <button className="px-base py-md font-label-md text-on-surface-variant hover:text-primary transition-colors">Export Node</button>
      </div>

      <div className="bento-grid">
        {/* Parameters Panel (Left) */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-3 bg-white border border-outline-variant rounded-xl p-md flex flex-col gap-md"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-on-surface">Parameters</h3>
            <SlidersHorizontal className="text-primary" size={20} />
          </div>
          <div className="space-y-sm">
            <p className="font-label-md text-outline uppercase tracking-wider text-[10px]">Program Selection</p>
            <div className="space-y-base">
              {programs.map((program, i) => (
                <label key={program.name} className="flex items-center justify-between p-sm border border-outline-variant rounded hover:bg-surface-container transition-colors cursor-pointer group">
                  <span className="flex items-center gap-sm">
                    <input
                      type="checkbox"
                      checked={checkedPrograms[i]}
                      onChange={() => toggleProgram(i)}
                      className="rounded border-outline-variant text-primary focus:ring-primary"
                    />
                    <span className={`font-body-md ${checkedPrograms[i] ? 'text-on-surface' : 'text-outline'}`}>{program.name}</span>
                  </span>
                  <span className="text-outline opacity-0 group-hover:opacity-100 transition-opacity text-sm">ℹ</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-md space-y-sm">
            <div className="p-sm bg-primary-fixed/30 rounded border border-primary/10">
              <div className="flex justify-between items-center mb-base">
                <span className="font-label-md text-primary">Simulation Confidence</span>
                <span className="font-data-mono text-primary">94%</span>
              </div>
              <div className="w-full bg-white h-1.5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} transition={{ duration: 1 }} className="bg-primary h-full" />
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant text-[12px] italic">"Based on last 3 months of operational data from Substation X-42."</p>
          </div>
        </motion.section>

        {/* Waterfall Chart (Center) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-6 bg-white border border-outline-variant rounded-xl p-md"
        >
          <div className="flex items-center justify-between mb-lg">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Journey to Target</h3>
              <p className="font-body-md text-on-surface-variant">Loss Reduction Projection (%)</p>
            </div>
            <div className="flex gap-sm">
              <span className="flex items-center gap-xs font-label-md text-on-surface-variant"><span className="w-3 h-3 bg-primary rounded-sm inline-block" /> Base</span>
              <span className="flex items-center gap-xs font-label-md text-on-surface-variant"><span className="w-3 h-3 bg-secondary-fixed-dim rounded-sm inline-block" /> Reductions</span>
            </div>
          </div>

          {/* Waterfall Bars */}
          <div className="relative h-64 w-full flex items-end justify-around px-md pb-xl">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-outline-variant">
              {[0, 1, 2, 3].map(i => <div key={i} className="border-t border-surface-container-high w-full" />)}
            </div>
            <WaterfallBar label="Baseline" value="8.42%" height="87%" color="bg-primary" />
            <WaterfallBar label="Uprating" value="-0.12%" height="12%" color="bg-secondary-fixed-dim" offset="-75%" />
            <WaterfallBar label="P2TL" value="-0.45%" height="18%" color="bg-secondary-fixed-dim" offset="-56%" />
            <WaterfallBar label="Comp." value="-0.21%" height="14%" color="bg-secondary-fixed-dim" offset="-40%" />
            <WaterfallBar label="Target" value="7.64%" height="68%" color="bg-primary" isBold />
          </div>

          <div className="mt-lg grid grid-cols-2 gap-md">
            <div className="bg-surface-container-low p-md rounded-lg flex items-center gap-md">
              <TrendingDown className="text-secondary" size={24} />
              <div>
                <p className="font-label-md text-on-surface-variant">Total Projected Reduction</p>
                <p className="font-headline-md text-headline-md text-secondary">0.78%</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-md rounded-lg flex items-center gap-md">
              <PiggyBank className="text-primary" size={24} />
              <div>
                <p className="font-label-md text-on-surface-variant">Annual Revenue Impact</p>
                <p className="font-headline-md text-headline-md text-primary">$1.2M</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Right Column */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-3 space-y-md"
        >
          {/* Scenario Comparison Table */}
          <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="bg-surface-container-high px-md py-sm border-b border-outline-variant">
              <h3 className="font-label-md text-on-surface">Scenario Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="p-sm font-label-md text-on-surface-variant">Metric</th>
                    <th className="p-sm font-label-md text-primary border-l border-outline-variant/30">S-A</th>
                    <th className="p-sm font-label-md text-outline border-l border-outline-variant/30">S-B</th>
                    <th className="p-sm font-label-md text-outline border-l border-outline-variant/30">S-C</th>
                  </tr>
                </thead>
                <tbody className="font-data-mono text-[12px]">
                  {[
                    ['CAPEX', '$450k', '$320k', '$890k'],
                    ['ROI (m)', '14.2', '18.5', '9.8'],
                    ['Efficiency', '92.4%', '88.1%', '95.2%'],
                    ['Stability', 'High', 'Med', 'High'],
                  ].map(([metric, a, b, c]) => (
                    <tr key={metric} className="border-b border-outline-variant/20 hover:bg-surface-container-lowest transition-colors">
                      <td className="p-sm text-on-surface-variant font-medium">{metric}</td>
                      <td className="p-sm text-primary font-bold border-l border-outline-variant/30">{a}</td>
                      <td className="p-sm text-on-surface border-l border-outline-variant/30">{b}</td>
                      <td className="p-sm text-on-surface border-l border-outline-variant/30">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AI Suggestion Card */}
          <div className="glass-card border border-primary/20 rounded-xl p-md flex flex-col gap-sm shadow-sm">
            <div className="flex items-center gap-sm">
              <Sparkles className="text-primary" size={18} />
              <span className="font-label-md text-primary uppercase tracking-wider">AI Optimizer</span>
            </div>
            <p className="font-body-md text-on-surface">Swap "Uprating Trafo" for "Reactive Comp." in Scenario B to improve ROI by <span className="text-secondary font-bold">12.4%</span>.</p>
            <button className="mt-base bg-primary-container/20 text-on-surface font-label-md py-1.5 rounded border border-primary/20 hover:bg-primary-container/30 transition-all">Apply Optimization</button>
          </div>

          {/* Activity Feed */}
          <div className="bg-white border border-outline-variant rounded-xl p-md">
            <h4 className="font-label-md text-on-surface-variant mb-sm">Activity Feed</h4>
            <div className="space-y-md">
              <div className="flex gap-sm">
                <div className="w-1 h-8 bg-secondary rounded-full shrink-0" />
                <div>
                  <p className="font-body-md text-[12px] leading-tight"><span className="font-bold">Admin</span> updated Asset 004 Load Profile.</p>
                  <span className="text-[10px] text-outline">2 mins ago</span>
                </div>
              </div>
              <div className="flex gap-sm">
                <div className="w-1 h-8 bg-primary rounded-full shrink-0" />
                <div>
                  <p className="font-body-md text-[12px] leading-tight">Simulation Batch #4282 completed.</p>
                  <span className="text-[10px] text-outline">15 mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Topology Canvas (Full Width) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-12 bg-white border border-outline-variant rounded-xl overflow-hidden min-h-[400px] flex flex-col"
        >
          <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
            <div className="flex items-center gap-md">
              <h3 className="font-headline-md text-headline-md">Topology Canvas</h3>
              <div className="flex gap-base">
                <span className="px-sm py-0.5 bg-surface-container-high rounded text-[10px] font-label-md">GRID_MODE: ACTIVE</span>
                <span className="px-sm py-0.5 bg-surface-container-high rounded text-[10px] font-label-md">NODES: 142</span>
              </div>
            </div>
            <div className="flex items-center gap-sm">
              <button className="p-1 hover:bg-surface-container rounded"><ZoomIn size={18} className="text-on-surface-variant" /></button>
              <button className="p-1 hover:bg-surface-container rounded"><ZoomOut size={18} className="text-on-surface-variant" /></button>
              <button className="p-1 hover:bg-surface-container rounded"><Focus size={18} className="text-on-surface-variant" /></button>
              <button className="ml-sm font-label-md text-primary border border-primary px-md py-1 rounded hover:bg-primary/5 transition-colors">Lock Canvas</button>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden bg-surface-container-low min-h-[350px]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#006194 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
            {/* Nodes */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 group cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-white border-2 border-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary text-xl">⚡</span>
              </motion.div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-on-background text-white text-[10px] px-sm py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">SS-X42 NORTH</div>
            </div>
            <div className="absolute top-1/4 right-1/4 group cursor-pointer">
              <motion.div whileHover={{ scale: 1.1 }} className="w-10 h-10 bg-white border-2 border-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-secondary text-lg">🔌</span>
              </motion.div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-on-background text-white text-[10px] px-sm py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">FEEDER_77</div>
            </div>
            {/* Connection SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 320 200 L 700 100" fill="none" opacity="0.4" stroke="#006194" strokeDasharray="4 4" strokeWidth="1.5" />
              <path d="M 320 200 L 500 300" fill="none" opacity="0.2" stroke="#006194" strokeWidth="1.5" />
            </svg>
            {/* Floating Action Bar */}
            <div className="absolute bottom-md left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-outline-variant px-md py-sm rounded-full flex items-center gap-md shadow-xl">
              <button className="flex items-center gap-xs font-label-md text-on-surface hover:text-primary transition-colors">
                <Plus size={14} /> Add Node
              </button>
              <div className="h-4 w-px bg-outline-variant" />
              <button className="flex items-center gap-xs font-label-md text-on-surface hover:text-primary transition-colors">
                <Link2 size={14} /> Connect
              </button>
              <div className="h-4 w-px bg-outline-variant" />
              <button className="flex items-center gap-xs font-label-md text-on-surface hover:text-error transition-colors">
                <Trash2 size={14} /> Remove
              </button>
            </div>
          </div>
        </motion.section>
      </div>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-xl right-xl w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50 group"
      >
        <Play size={24} />
        <span className="absolute right-16 bg-on-background text-white font-label-md px-md py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Initiate Global Simulation
        </span>
      </motion.button>
    </div>
  );
}

function WaterfallBar({ label, value, height, color, offset, isBold }: {
  label: string; value: string; height: string; color: string; offset?: string; isBold?: boolean;
}) {
  return (
    <div className="flex flex-col items-center w-14 gap-sm relative z-10">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full ${color} rounded-t-sm hover:brightness-110 transition-all`}
        style={offset ? { transform: `translateY(${offset})` } : undefined}
      />
      <span className={`font-data-mono text-[10px] absolute -top-6 ${isBold ? 'text-primary font-bold' : color.includes('secondary') ? 'text-secondary' : 'text-outline'}`}>{value}</span>
      <span className={`font-label-md text-[10px] uppercase text-center ${isBold ? 'text-on-surface font-bold' : 'text-on-surface-variant'}`}>{label}</span>
    </div>
  );
}
