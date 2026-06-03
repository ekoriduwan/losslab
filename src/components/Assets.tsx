import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, AlertTriangle, FileWarning, RefreshCw, ArrowRight } from 'lucide-react';

const tabs = ['Unit Profile', 'Transformers', 'Network', 'Metering/APP'];

export default function Assets() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-lg">
      {/* Tab Selection */}
      <div className="flex items-center gap-xl border-b border-outline-variant">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-md py-md font-label-md transition-colors ${
              activeTab === i
                ? 'text-primary border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-lg">
        {/* Left Column: Data Entry Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-7 space-y-lg"
        >
          <div className="bg-surface border border-outline-variant rounded-lg p-lg shadow-sm">
            <div className="flex justify-between items-center mb-xl">
              <h2 className="font-headline-md text-headline-md text-on-surface">Unit Asset Specifications</h2>
              <div className="flex gap-sm items-center">
                <Info className="text-primary" size={16} />
                <span className="font-label-md text-on-surface-variant">Last updated: 14m ago</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-xl">
              <FormField label="Asset Identifier" type="text" defaultValue="TX-990-A" />
              <FormField label="Installation Class" type="select" options={['Industrial Primary', 'Secondary Commercial']} />
              <FormField label="Operational Capacity (MW)" type="number" defaultValue="1250" />
              <FormField label="Degradation Threshold" type="text" defaultValue="0.04%" />
              <div className="col-span-2">
                <label className="font-label-md text-on-surface-variant uppercase tracking-wider block mb-base">Geographic Metadata</label>
                <textarea
                  className="w-full bg-white border border-outline-variant rounded p-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all outline-none"
                  rows={3}
                  defaultValue="Sector 7-G; Terminal Node; High Humidity Environment Proxy."
                />
              </div>
            </div>

            <div className="mt-xl flex justify-end gap-md">
              <button className="px-xl py-md text-on-surface-variant font-label-md rounded border border-outline-variant hover:bg-surface-container-low transition-all">Discard</button>
              <button className="px-xl py-md bg-primary text-on-primary font-label-md rounded hover:brightness-110 shadow-sm transition-all active:scale-95">Commit Assets</button>
            </div>
          </div>

          {/* Spatial Distribution Heatmap */}
          <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden h-[400px] relative">
            <div className="absolute top-md left-md z-10 bg-white/90 backdrop-blur px-md py-base rounded shadow-sm border border-outline-variant">
              <h3 className="font-label-md text-on-surface">Spatial Asset Distribution</h3>
            </div>
            <div className="w-full h-full bg-surface-container-low flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#006194 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
              {/* Heatmap Blobs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="w-24 h-24 bg-primary/15 rounded-full blur-2xl absolute top-1/4 left-1/3" />
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="w-40 h-40 bg-primary/10 rounded-full blur-[60px] absolute bottom-1/4 right-1/4" />
              </div>
              <span className="font-label-md text-on-surface-variant z-10">GIS Map Integration Pending</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Stats & Alerts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-5 space-y-lg"
        >
          {/* 75% Data Completion Circle */}
          <div className="bg-surface border border-outline-variant rounded-lg p-lg shadow-sm flex flex-col items-center text-center">
            <h3 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-lg">Asset Profile Completion</h3>
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="circular-progress w-full h-full rounded-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-lg text-headline-lg text-primary">75%</span>
                <span className="font-label-md text-outline">Verified</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mt-lg px-xl">
              Missing primary metering data for <span className="text-primary font-bold">3 network nodes</span>.
            </p>
          </div>

          {/* Validation Alerts */}
          <div className="bg-surface border border-outline-variant rounded-lg p-lg shadow-sm">
            <div className="flex items-center justify-between mb-xl">
              <h3 className="font-headline-md text-headline-md text-on-surface">Validation Alerts</h3>
              <span className="bg-error-container text-on-error-container px-md py-xs rounded text-[10px] font-bold uppercase tracking-widest">3 Critical</span>
            </div>
            <div className="space-y-md">
              <AlertItem icon={<AlertTriangle size={20} />} iconColor="text-error" bgColor="bg-error-container/20" borderColor="border-error" title="Inconsistent Voltage Data" description="Asset TX-990-A reports voltage outside simulation tolerance (±5%)." />
              <AlertItem icon={<FileWarning size={20} />} iconColor="text-tertiary" bgColor="bg-tertiary-container/20" borderColor="border-tertiary" title="Metadata Gap" description="Transformer serial numbers are missing for 2 units in Sector 7-G." />
              <AlertItem icon={<RefreshCw size={20} />} iconColor="text-outline" bgColor="bg-surface-container" borderColor="border-outline" title="Sync Warning" description="Local cache is 4 minutes ahead of primary server asset list." />
            </div>
            <button className="w-full mt-xl text-primary font-label-md hover:underline flex items-center justify-center gap-base">
              View All Validations
              <ArrowRight size={14} />
            </button>
          </div>

          {/* System Integrity Card */}
          <div className="bg-primary-container/10 border border-primary/20 rounded-lg p-lg shadow-sm">
            <h3 className="font-label-md text-primary font-bold uppercase tracking-wider mb-md">System Integrity</h3>
            <div className="flex items-center gap-md">
              <div className="flex-grow bg-outline-variant h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1, delay: 0.3 }} className="bg-primary h-full" />
              </div>
              <span className="font-data-mono text-data-mono text-primary">92%</span>
            </div>
            <p className="text-on-surface-variant font-body-md mt-sm">Overall asset configuration health is within acceptable simulation margins.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FormField({ label, type, defaultValue, options }: {
  label: string; type: string; defaultValue?: string; options?: string[];
}) {
  return (
    <div className="space-y-base">
      <label className="font-label-md text-on-surface-variant uppercase tracking-wider block">{label}</label>
      {type === 'select' ? (
        <select className="w-full bg-white border border-outline-variant rounded p-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary/10 outline-none" defaultValue={defaultValue}>
          {options?.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      ) : (
        <input
          className="w-full bg-white border border-outline-variant rounded p-md font-body-md focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all outline-none"
          type={type}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
}

function AlertItem({ icon, iconColor, bgColor, borderColor, title, description }: {
  icon: React.ReactNode; iconColor: string; bgColor: string; borderColor: string; title: string; description: string;
}) {
  return (
    <div className={`p-md ${bgColor} border-l-4 ${borderColor} rounded flex gap-md items-start`}>
      <span className={iconColor}>{icon}</span>
      <div>
        <h4 className="font-label-md text-on-surface font-bold">{title}</h4>
        <p className="font-body-md text-on-surface-variant leading-tight mt-base">{description}</p>
      </div>
    </div>
  );
}
