import React from 'react';
import { AlertTriangle, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <>
      {/* Critical Alert Row */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-error-container text-on-error-container p-md border border-error/20 flex items-center justify-between"
      >
        <div className="flex items-center gap-md">
          <AlertTriangle className="text-error" size={24} />
          <div>
            <span className="font-bold font-label-md text-label-md">CRITICAL ALERT:</span>
            <span className="font-body-md text-body-md"> Anomalous non-technical loss detected in Substation 14-B. Variance exceeded 4.5% threshold.</span>
          </div>
        </div>
        <button className="underline font-label-md text-label-md hover:text-error transition-colors">Investigate Incident</button>
      </motion.div>

      <div className="grid grid-cols-12 gap-[16px]">
        {/* Gauge Cluster (6 Columns) */}
        <div className="col-span-12 lg:col-span-6 bg-surface border border-outline-variant p-lg flex flex-col gap-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-surface">Efficiency Metrology</h3>
            <span className="text-on-surface-variant font-label-md text-label-md">Updated 2m ago</span>
          </div>
          <div className="flex justify-around items-center flex-wrap gap-xl">
            {/* Total Losses Gauge */}
            <div className="flex flex-col items-center gap-md">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8"></circle>
                  <motion.circle 
                    initial={{ strokeDashoffset: 351.8 }}
                    animate={{ strokeDashoffset: 322 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-primary" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.8" strokeWidth="8"></motion.circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-primary">8.5%</span>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">TOTAL LOSSES</span>
            </div>
            {/* Technical Gauge */}
            <div className="flex flex-col items-center gap-md">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="6"></circle>
                  <motion.circle 
                    initial={{ strokeDashoffset: 251.3 }}
                    animate={{ strokeDashoffset: 238.5 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-secondary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.3" strokeWidth="6"></motion.circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-secondary">5.1%</span>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">TECHNICAL</span>
            </div>
            {/* Non-Technical Gauge */}
            <div className="flex flex-col items-center gap-md">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="6"></circle>
                  <motion.circle 
                    initial={{ strokeDashoffset: 251.3 }}
                    animate={{ strokeDashoffset: 242.7 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-tertiary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.3" strokeWidth="6"></motion.circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-tertiary">3.4%</span>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">NON-TECHNICAL</span>
            </div>
          </div>
        </div>

        {/* AI Intelligence Sidebar (6 Columns) */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-low border border-outline-variant p-lg">
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
        </div>

        {/* Sankey Diagram Component (12 Columns) */}
        <div className="col-span-12 bg-white border border-outline-variant p-lg mt-4">
          <div className="flex justify-between items-center mb-xl">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Energy Flow Dynamics</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Sankey visualization of generation, transmission, and dissipation</p>
            </div>
            <div className="flex gap-sm">
              <span className="px-md py-base bg-surface-container rounded font-label-md text-label-md border border-outline-variant">Real-time Stream</span>
              <span className="px-md py-base bg-white rounded font-label-md text-label-md border border-outline-variant text-on-surface-variant">Historical Context</span>
            </div>
          </div>
          {/* Mock Sankey */}
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
                  <path d="M 0,40 C 200,40 200,80 400,80" fill="none" opacity="0.15" stroke="#006194" strokeWidth="40"></path>
                  <path d="M 0,160 C 200,160 200,100 400,100" fill="none" opacity="0.15" stroke="#006e2f" strokeWidth="20"></path>
                  <path d="M 400,90 C 600,90 600,60 800,60" fill="none" opacity="0.25" stroke="#006194" strokeWidth="50"></path>
                  <path d="M 400,90 C 600,120 600,180 800,180" fill="none" opacity="0.3" stroke="#ba1a1a" strokeWidth="8"></path>
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
        </div>
      </div>
    </>
  );
}
