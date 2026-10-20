
export default function AdminDashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-light uppercase tracking-[0.2em]">Dashboard</h1>
                <p className="text-xs text-rose-gold font-bold uppercase tracking-widest mt-2">Platform Overview</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Total Revenue", value: "$124,500" },
                    { label: "Active Designs", value: "1,204" },
                    { label: "New Users", value: "+48" },
                    { label: "Pending Orders", value: "12" }
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#896168] mb-1">{stat.label}</h3>
                        <p className="text-3xl font-light text-primary">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table */}
            <div className="glass-panel rounded-2xl overflow-hidden p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">Recent Generations</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-rose-gold/10 text-[10px] uppercase tracking-widest text-[#896168]">
                                <th className="py-4 font-bold">Design ID</th>
                                <th className="py-4 font-bold">Prompt</th>
                                <th className="py-4 font-bold">Status</th>
                                <th className="py-4 font-bold">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            {[
                                { id: "#DST-001", prompt: "Emerald satin with gold leaf", status: "Completed", date: "2 mins ago" },
                                { id: "#DST-002", prompt: "Ruby slippers wizard style", status: "Processing", date: "5 mins ago" },
                                { id: "#DST-003", prompt: "Minimalist beige sandal", status: "Completed", date: "12 mins ago" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-rose-gold/5 hover:bg-white/40 transition-colors">
                                    <td className="py-4 text-primary">{row.id}</td>
                                    <td className="py-4 italic opacity-80">{row.prompt}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${row.status === 'Completed' ? "bg-green-100/50 text-green-700" : "bg-yellow-100/50 text-yellow-700"}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-4 opacity-60">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
