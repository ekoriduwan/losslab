import { motion } from 'framer-motion';
import { Lightbulb, Zap, Package, CalendarDays, Shield, ArrowRight, TrendingUp } from 'lucide-react';

const recommendations = [
  { icon: Zap, color: 'primary', label: 'High Impact', title: 'Unit 4 Refactoring', desc: 'Relokasi sumber daya komputasi untuk menyeimbangkan beban I/O.', meta: 'Est. Time: 12m' },
  { icon: Package, color: 'secondary', label: 'Medium Impact', title: 'Logistics Buffer', desc: 'Optimasi stok suku cadang kritis di Warehouse C.', meta: 'Est. Saving: $4.2k' },
  { icon: CalendarDays, color: 'outline', label: 'Low Impact', title: 'Shift Alignment', desc: 'Sinkronisasi jadwal operator dengan puncak beban kerja.', meta: 'Delta: +5% eff' },
  { icon: Shield, color: 'tertiary', label: 'Stability', title: 'Security Protocol', desc: 'Pembaruan sertifikat akses pada gateway industri utama.', meta: 'Urgency: 24h' },
];

const barGroups = [
  { label: 'Unit 4', cost: 30, saving: 85 },
  { label: 'Logistics', cost: 15, saving: 60 },
  { label: 'Security', cost: 45, saving: 50 },
  { label: 'Shifts', cost: 10, saving: 40 },
  { label: 'Maintenance', cost: 65, saving: 90 },
];

export default function AIInsights() {
  return (
    <div className="space-y-lg">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-xl"
        >
          <div className="absolute top-0 right-0 p-lg">
            <div className="flex flex-col items-end">
              <span className="font-label-md text-label-md text-primary bg-primary-container/20 px-md py-xs rounded-full">AI Confidence</span>
              <span className="font-headline-lg text-headline-lg text-primary">94.2%</span>
            </div>
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-md">Strategi Optimal</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
              Berdasarkan pemodelan prediktif 48 jam terakhir, sistem merekomendasikan penyesuaian beban kerja pada Unit 4 dan sinkronisasi logistik darurat untuk memitigasi risiko kegagalan operasional.
            </p>
            <div className="flex gap-md">
              <button className="bg-primary text-on-primary px-xl py-md rounded font-label-md hover:brightness-110 transition-all active:scale-95">Implement All</button>
              <button className="bg-transparent border border-outline text-on-surface px-xl py-md rounded font-label-md hover:bg-surface-container transition-all">Export Report</button>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 pointer-events-none text-[200px]">🧠</div>
        </motion.div>

        {/* AI Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary-container/10 border border-secondary/20 p-xl rounded-xl flex flex-col"
        >
          <div className="flex items-center gap-sm mb-md text-secondary">
            <Lightbulb size={20} />
            <span className="font-label-md text-label-md uppercase tracking-wider">AI Insight</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-sm">Trend Deteksi Dini</h3>
          <p className="font-body-md text-body-md text-on-surface-variant flex-1">
            Anomali getaran terdeteksi pada Turbin B-12. Meskipun saat ini masih dalam batas aman, AI memproyeksikan peningkatan panas 12% dalam 4 jam ke depan jika kecepatan tidak dikurangi secara bertahap.
          </p>
          <div className="mt-lg pt-lg border-t border-outline-variant/30">
            <div className="flex justify-between items-center text-secondary">
              <span className="font-label-md text-label-md">Risk Mitigation Score</span>
              <span className="font-data-mono text-data-mono">+18.4%</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Priority Recommendations */}
      <section className="space-y-md">
        <div className="flex justify-between items-end">
          <h3 className="font-headline-md text-headline-md">Priority Recommendations</h3>
          <button className="text-primary font-label-md hover:underline">View All Actions</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(30, 41, 59, 0.05)' }}
              className={`bg-surface-container-lowest border border-outline-variant p-lg rounded-lg hover:border-${rec.color} transition-colors cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-md">
                <div className={`p-sm bg-${rec.color}/10 rounded group-hover:bg-${rec.color} group-hover:text-white transition-colors`}>
                  <rec.icon size={20} />
                </div>
                <span className={`text-${rec.color} font-label-md text-[10px] uppercase border border-${rec.color} px-xs rounded`}>{rec.label}</span>
              </div>
              <h4 className="font-label-md text-label-md mb-xs">{rec.title}</h4>
              <p className="text-on-surface-variant text-[13px] mb-lg">{rec.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-data-mono text-xs text-outline">{rec.meta}</span>
                <ArrowRight size={16} className={`text-${rec.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cost-Benefit Analysis */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
          <div>
            <h3 className="font-headline-md text-headline-md">Cost-Benefit Analysis</h3>
            <p className="text-on-surface-variant text-body-md">Estimasi penghematan biaya versus investasi implementasi per kuartal.</p>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-xs">
              <div className="w-3 h-3 bg-primary rounded-sm" />
              <span className="text-label-md text-xs">Estimated Savings</span>
            </div>
            <div className="flex items-center gap-xs">
              <div className="w-3 h-3 bg-outline-variant rounded-sm" />
              <span className="text-label-md text-xs">Implementation Cost</span>
            </div>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between gap-xl px-lg border-b border-outline-variant pb-md relative">
          {/* Y-Axis Guides */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-md">
            {[0, 1, 2, 3].map(i => <div key={i} className="w-full border-t border-surface-container-high" />)}
          </div>
          {barGroups.map((group) => (
            <div key={group.label} className="flex-1 flex flex-col items-center gap-xs z-10">
              <div className="w-full flex justify-center gap-xs items-end h-48">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${group.cost}%` }}
                  transition={{ duration: 0.6 }}
                  className="w-10 bg-outline-variant rounded-t-sm"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${group.saving}%` }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-10 bg-primary rounded-t-sm"
                />
              </div>
              <span className="font-label-md text-xs text-on-surface-variant">{group.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Bottom Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pb-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-center gap-lg"
        >
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container shrink-0 flex items-center justify-center text-4xl">🔧</div>
          <div>
            <h4 className="font-headline-md text-headline-md mb-xs">Asset Integrity Index</h4>
            <p className="text-on-surface-variant text-body-md mb-md">Overall fleet health is at 92.4%, up 2% from implementation.</p>
            <div className="w-full bg-surface-container rounded-full h-1.5">
              <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1 }} className="bg-secondary h-1.5 rounded-full" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-surface-container-lowest border border-outline-variant p-lg rounded-lg flex items-center gap-lg"
        >
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container shrink-0 flex items-center justify-center text-4xl">📈</div>
          <div>
            <h4 className="font-headline-md text-headline-md mb-xs">Throughput Forecast</h4>
            <p className="text-on-surface-variant text-body-md mb-md">Projected increase of 14% in total output if recommendations followed.</p>
            <div className="flex items-center gap-sm text-secondary">
              <TrendingUp size={18} />
              <span className="font-data-mono text-sm">+14.2% Estimated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
