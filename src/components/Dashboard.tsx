import { AlertTriangle, BrainCircuit, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="space-y-lg">
      {/* Critical Alert Row */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-error-container text-on-error-container p-md border border-error/20 flex items-center justify-between animate-pulse"
      >
        <div className="flex items-center gap-md">
          <AlertTriangle className="text-error" size={24} />
          <div>
            <span className="font-bold font-label-md text-label-md">CRITICAL ALERT:</span>
            <span className="font-body-md text-body-md"> Anomalous non-technical loss detected in Substation 14-B. Variance exceeded 4.5% threshold.</span>
          </div>
        </div>
        <button className="underline font-label-md text-label-md hover:text-error transition-colors whitespace-nowrap ml-md">Investigate Incident</button>
      </motion.div>

      <div className="bento-grid">
        {/* Gauge Cluster (6 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-6 bg-surface border border-outline-variant p-lg flex flex-col gap-lg"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-surface">Efficiency Metrology</h3>
            <span className="text-on-surface-variant font-label-md text-label-md">Updated 2m ago</span>
          </div>
          <div className="flex justify-around items-center flex-wrap gap-xl">
            {/* Total Losses Gauge */}
            <GaugeRing value={8.5} max={100} size={128} radius={56} strokeWidth={8} color="text-primary" label="TOTAL LOSSES" />
            {/* Technical Gauge */}
            <GaugeRing value={5.1} max={100} size={96} radius={40} strokeWidth={6} color="text-secondary" label="TECHNICAL" delay={0.2} />
            {/* Non-Technical Gauge */}
            <GaugeRing value={3.4} max={100} size={96} radius={40} strokeWidth={6} color="text-tertiary" label="NON-TECHNICAL" delay={0.4} />
          </div>
        </motion.div>

        {/* AI Intelligence Sidebar (6 Columns) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-6 bg-surface-container-low border border-outline-variant p-lg"
        >
          <div className="flex items-center gap-md mb-lg">
            <BrainCircuit className="text-primary" size={24} />
            <h3 className="font-headline-md text-headline-md text-on-surface">AI Intelligence Recommendations</h3>
          </div>
          <div className="space-y-md">
            <div className="bg-white p-md border border-outline-variant group hover:border-primary transition-colors cursor-pointer">
              <div className="flex justify-between mb-sm">
                <span className="text-primary font-label-md text-label-md">OPTIMIZATION OPPORTUNITY</span>
                <span className="text-on-surface-variant font-label-md text-label-md">ID: OPT-229</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface font-semibold">Reactive Power Compensation at Bus 7</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-base">Installing 12.5 MVAR capacitors could reduce technical losses by 0.4% within 24 hours.</p>
              <div className="mt-md flex justify-end">
                <button className="text-primary font-label-md text-label-md group-hover:underline">Detailed Simulation →</button>
              </div>
            </div>
            <div className="bg-white p-md border border-outline-variant group hover:border-primary transition-colors cursor-pointer">
              <div className="flex justify-between mb-sm">
                <span className="text-tertiary font-label-md text-label-md">LOSS DETECTION</span>
                <span className="text-on-surface-variant font-label-md text-label-md">ID: LDL-841</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface font-semibold">Abnormal Meter Reading Pattern (Zone 4)</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-base">Pattern indicates potential bypass at commercial terminal CT-004. High confidence (92%).</p>
              <div className="mt-md flex justify-end">
                <button className="text-primary font-label-md text-label-md group-hover:underline">Dispatch Inspection →</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sankey Diagram Component (12 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-12 bg-white border border-outline-variant p-lg"
        >
          <div className="flex justify-between items-center mb-xl">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Energy Flow Dynamics</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Sankey visualization of generation, transmission, and dissipation</p>
            </div>
            <div className="flex gap-sm">
              <span className="px-md py-base bg-surface-container rounded font-label-md text-label-md border border-outline-variant cursor-pointer">Real-time Stream</span>
              <span className="px-md py-base bg-white rounded font-label-md text-label-md border border-outline-variant text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">Historical Context</span>
            </div>
          </div>
          <div className="relative h-64 w-full bg-surface-container-lowest rounded overflow-hidden p-xl">
            <div className="flex h-full items-stretch justify-between relative z-10">
              <div className="flex flex-col justify-between w-32 py-xl">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">GRID SOURCE</span>
                  <span className="font-data-mono text-headline-md text-primary">1250 MW</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">RENEWABLES</span>
                  <span className="font-data-mono text-headline-md text-secondary">340 MW</span>
                </div>
              </div>
              <div className="flex-1 relative">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <path d="M 0,40 C 200,40 200,80 400,80" fill="none" opacity="0.15" stroke="#006194" strokeWidth="40" />
                  <path d="M 0,160 C 200,160 200,100 400,100" fill="none" opacity="0.15" stroke="#006e2f" strokeWidth="20" />
                  <path d="M 400,90 C 600,90 600,60 800,60" fill="none" opacity="0.25" stroke="#006194" strokeWidth="50" />
                  <path d="M 400,90 C 600,120 600,180 800,180" fill="none" opacity="0.3" stroke="#ba1a1a" strokeWidth="8" />
                </svg>
              </div>
              <div className="flex flex-col justify-between w-48 text-right py-base">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">PRIMARY LOAD</span>
                  <span className="font-data-mono text-headline-md text-primary">1455 MW</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-error">DISSIPATED LOSSES</span>
                  <span className="font-data-mono text-headline-md text-error">135.2 MW</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Insights */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-md">
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-md">Load Factor Stability</h4>
          <div className="flex items-end gap-base h-24">
            {[80, 75, 85, 92, 88, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className={`w-1/6 rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-primary-container'}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-sm text-on-surface-variant font-label-md text-label-md">
            <span>00:00</span>
            <span className="font-bold text-on-surface">0.94 PF</span>
            <span>12:00</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-md">
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-md">Phase Imbalance</h4>
          <div className="space-y-sm">
            {[
              { label: 'Phase A', value: 100, width: '98%' },
              { label: 'Phase B', value: 94, width: '94%' },
              { label: 'Phase C', value: 96, width: '96%' },
            ].map((phase) => (
              <div key={phase.label} className="flex items-center justify-between">
                <span className="font-label-md text-label-md w-16">{phase.label}</span>
                <div className="flex-1 mx-md h-2 bg-surface-container rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: phase.width }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="font-data-mono text-label-md w-10 text-right">{phase.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-md">
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase mb-md">Carbon Intensity</h4>
          <div className="flex items-center gap-md">
            <Leaf className="text-secondary scale-150" size={24} />
            <div>
              <span className="block font-headline-md text-headline-md text-on-surface">322 <span className="text-body-md font-normal text-on-surface-variant">gCO2e/kWh</span></span>
              <span className="text-secondary font-label-md text-label-md">12% lower than daily average</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Reusable Gauge Ring Component */
function GaugeRing({ value, max, size, radius, strokeWidth, color, label, delay = 0 }: {
  value: number; max: number; size: number; radius: number; strokeWidth: number; color: string; label: string; delay?: number;
}) {
  const circumference = 2 * Math.PI * radius;
  const percentage = value / max;
  const dashoffset = circumference * (1 - percentage);
  const center = size / 2;

  return (
    <div className="flex flex-col items-center gap-md">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle className="text-surface-container-highest" cx={center} cy={center} fill="transparent" r={radius} stroke="currentColor" strokeWidth={strokeWidth} />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashoffset }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
            className={color}
            cx={center} cy={center} fill="transparent" r={radius} stroke="currentColor"
            strokeDasharray={circumference} strokeWidth={strokeWidth} strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-headline-md text-headline-md ${color}`}>{value}%</span>
        </div>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant">{label}</span>
    </div>
  );
}
