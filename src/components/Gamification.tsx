import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Target, Crown, Zap, CheckCircle2, Lock } from 'lucide-react';

const achievements = [
  { id: 1, title: 'Losses Rookie', desc: 'Turunkan susut 0.5%', icon: Target, unlocked: true, date: '12 May 2026' },
  { id: 2, title: 'Efficiency Pro', desc: 'Turunkan susut 1%', icon: Zap, unlocked: true, date: '28 May 2026' },
  { id: 3, title: 'Master of Grid', desc: 'Turunkan susut 2%', icon: Crown, unlocked: false, progress: 65 },
  { id: 4, title: 'RKAP Achiever', desc: 'Capai target RKAP tahunan', icon: Medal, unlocked: false, progress: 40 },
];

const leaderboard = [
  { rank: 1, name: 'UP3 Surabaya Selatan', level: 'Losses Master', score: 12450, trend: 'up' },
  { rank: 2, name: 'UP3 Malang', level: 'Losses Master', score: 11200, trend: 'up' },
  { rank: 3, name: 'UP3 Sidoarjo', level: 'Manager Losses', score: 9850, trend: 'down' },
  { rank: 4, name: 'UP3 Pasuruan', level: 'Manager Losses', score: 9120, trend: 'same' },
  { rank: 5, name: 'UP3 Bojonegoro', level: 'Supervisor', score: 7600, trend: 'up' },
];

export default function Gamification() {
  return (
    <div className="space-y-lg">
      <div className="grid grid-cols-12 gap-lg">
        {/* User Profile & Level Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl flex flex-col items-center relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-24 h-24 bg-primary-container border-4 border-white shadow-lg rounded-full flex items-center justify-center text-4xl mb-md z-10">
            👨‍💻
          </div>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface z-10">Eko Riduwan</h2>
          <div className="flex items-center gap-xs text-primary mb-xl z-10">
            <Star fill="currentColor" size={16} />
            <span className="font-label-md text-label-md uppercase tracking-widest">Level 3: Manager Losses</span>
          </div>

          <div className="w-full space-y-sm z-10">
            <div className="flex justify-between items-end">
              <span className="font-label-md text-on-surface-variant">XP Progress</span>
              <span className="font-data-mono text-primary font-bold">8,450 / 10,000</span>
            </div>
            <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '84.5%' }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-primary h-full"
              />
            </div>
            <p className="text-center font-body-md text-sm text-on-surface-variant mt-sm">
              1,550 XP needed for <span className="font-bold text-on-surface">Level 4: Losses Master</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-md w-full mt-xl z-10">
            <div className="bg-surface-container-low p-md rounded-lg text-center border border-outline-variant">
              <p className="font-label-md text-on-surface-variant mb-xs">Total Savings</p>
              <p className="font-headline-md text-secondary">3.4 GWh</p>
            </div>
            <div className="bg-surface-container-low p-md rounded-lg text-center border border-outline-variant">
              <p className="font-label-md text-on-surface-variant mb-xs">Global Rank</p>
              <p className="font-headline-md text-primary">#14</p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl"
        >
          <div className="flex justify-between items-end mb-lg">
            <div>
              <h3 className="font-headline-md text-headline-md">Achievements Dashboard</h3>
              <p className="text-on-surface-variant font-body-md">Selesaikan target untuk mendapatkan badge dan XP tambahan.</p>
            </div>
            <Trophy className="text-tertiary" size={32} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {achievements.map((achieve, i) => (
              <motion.div
                key={achieve.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`p-md rounded-lg border flex gap-md items-start ${
                  achieve.unlocked ? 'bg-surface-container-low border-primary/30' : 'bg-surface-container-lowest border-outline-variant opacity-70 grayscale'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${achieve.unlocked ? 'bg-primary text-white shadow-md' : 'bg-surface-container text-outline'}`}>
                  <achieve.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-label-md text-on-surface font-bold text-lg">{achieve.title}</h4>
                    {achieve.unlocked ? <CheckCircle2 className="text-secondary" size={18} /> : <Lock className="text-outline" size={16} />}
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant mt-xs mb-sm">{achieve.desc}</p>
                  
                  {achieve.unlocked ? (
                    <span className="text-[10px] font-data-mono bg-primary-container text-on-primary-container px-xs py-0.5 rounded">Unlocked: {achieve.date}</span>
                  ) : (
                    <div className="w-full">
                      <div className="flex justify-between text-[10px] font-data-mono mb-xs">
                        <span>Progress</span>
                        <span>{achieve.progress}%</span>
                      </div>
                      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary/50 h-full" style={{ width: `${achieve.progress}%` }} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden"
        >
          <div className="bg-surface-container-high px-xl py-md border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-label-md text-on-surface uppercase tracking-widest font-bold">Regional Leaderboard</h3>
            <span className="font-data-mono text-xs text-on-surface-variant bg-surface px-sm py-xs rounded border border-outline-variant">Q2 2026</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-xs uppercase tracking-wider">
                  <th className="p-md pl-xl w-16">Rank</th>
                  <th className="p-md">Unit / Regional</th>
                  <th className="p-md">Current Level</th>
                  <th className="p-md text-right pr-xl">Total Score</th>
                </tr>
              </thead>
              <tbody className="font-body-md">
                {leaderboard.map((row, i) => (
                  <motion.tr 
                    key={row.rank}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors ${i < 3 ? 'bg-primary/5' : ''}`}
                  >
                    <td className="p-md pl-xl font-data-mono font-bold">
                      {i === 0 ? <span className="text-tertiary text-xl">🥇</span> : 
                       i === 1 ? <span className="text-outline text-xl">🥈</span> : 
                       i === 2 ? <span className="text-[#cd7f32] text-xl">🥉</span> : 
                       `#${row.rank}`}
                    </td>
                    <td className="p-md font-bold text-on-surface">{row.name}</td>
                    <td className="p-md text-on-surface-variant">
                      <span className="bg-surface-container px-sm py-1 rounded-full text-xs border border-outline-variant">
                        {row.level}
                      </span>
                    </td>
                    <td className="p-md text-right pr-xl font-data-mono text-primary font-bold text-lg">
                      {row.score.toLocaleString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
