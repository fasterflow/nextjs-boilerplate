'use client';

import {
    LayoutDashboard,
    Ticket,
    Truck,
    AlertTriangle,
    TrendingUp,
    Package,
    Clock,
    MoreVertical,
    Bell,
    Search,
    Settings,
    LogOut
} from 'lucide-react';

export default function DashboardPage() {
    return (
        // Container principal: fundo cinza muito claro para destacar os cards brancos
        <div className="min-h-screen bg-zinc-50 flex flex-col md:flex-row font-sans text-zinc-900">

            {/* SIDEBAR (Menu Lateral) */}
            <aside className="w-full md:w-64 bg-white border-r border-zinc-200 flex flex-col hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b border-zinc-200">
                    <div className="flex items-center gap-2 text-[#E60014] font-black tracking-tight text-xl">
                        <Truck size={24} strokeWidth={2.5} />
                        <span>FLOW.</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1.5">
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-zinc-100 text-zinc-900 rounded-lg font-semibold text-sm transition-colors">
                        <LayoutDashboard size={18} /> Visão Geral
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg font-medium text-sm transition-colors">
                        <Ticket size={18} /> Chamados
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg font-medium text-sm transition-colors">
                        <Truck size={18} /> Frota & Rotas
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg font-medium text-sm transition-colors">
                        <AlertTriangle size={18} /> Prevenção de Perdas
                    </a>
                </nav>

                <div className="p-4 border-t border-zinc-200">
                    <button className="flex items-center gap-3 px-3 py-2.5 w-full text-zinc-500 hover:bg-red-50 hover:text-[#E60014] rounded-lg font-medium text-sm transition-colors">
                        <LogOut size={18} /> Sair do sistema
                    </button>
                </div>
            </aside>

            {/* CONTEÚDO PRINCIPAL */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">

                {/* HEADER TOP BAR */}
                <header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-full max-w-md hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                            <input
                                type="text"
                                placeholder="Buscar cargas, motoristas ou chamados..."
                                className="w-full pl-9 pr-4 py-2 bg-zinc-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-zinc-300 focus:ring-2 focus:ring-[#E60014]/10 transition-all outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E60014] rounded-full border border-white"></span>
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors">
                            <Settings size={20} />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300 overflow-hidden flex items-center justify-center text-zinc-500 font-bold text-xs">
                            JP
                        </div>
                    </div>
                </header>

                {/* ÁREA DE SCROLL DO DASHBOARD */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {/* Título da Página */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Painel de Operações</h1>
                                <p className="text-sm text-zinc-500 mt-1">Visão atualizada da malha logística e indicadores.</p>
                            </div>
                            <button className="bg-white border border-zinc-200 text-zinc-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-50 transition-colors shadow-sm">
                                Baixar Relatório (ETL)
                            </button>
                        </div>

                        {/* CARDS DE KPI (Key Performance Indicators) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            {/* Card 1: Volume */}
                            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col gap-3">
                                <div className="flex items-center justify-between text-zinc-500">
                                    <span className="text-sm font-semibold">Cargas em Trânsito</span>
                                    <Package size={18} />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-zinc-900">1,248</span>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center">+12%</span>
                                </div>
                            </div>

                            {/* Card 2: Prevenção de Perdas / Anomalias */}
                            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col gap-3">
                                <div className="flex items-center justify-between text-zinc-500">
                                    <span className="text-sm font-semibold">Ocorrências / Avarias</span>
                                    <AlertTriangle size={18} className="text-[#E60014]" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-zinc-900">24</span>
                                    <span className="text-xs font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded-md flex items-center">+3 hoje</span>
                                </div>
                            </div>

                            {/* Card 3: Eficiência */}
                            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col gap-3">
                                <div className="flex items-center justify-between text-zinc-500">
                                    <span className="text-sm font-semibold">On-Time Delivery (OTD)</span>
                                    <TrendingUp size={18} />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-zinc-900">94.2%</span>
                                    <span className="text-xs font-bold text-zinc-500">meta: 95%</span>
                                </div>
                            </div>

                            {/* Card 4: Tempo */}
                            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col gap-3">
                                <div className="flex items-center justify-between text-zinc-500">
                                    <span className="text-sm font-semibold">Lead Time Médio</span>
                                    <Clock size={18} />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-zinc-900">42h</span>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center">-2h</span>
                                </div>
                            </div>
                        </div>

                        {/* TABELA DE ATIVIDADE RECENTE */}
                        <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-zinc-200 flex items-center justify-between">
                                <h2 className="text-base font-bold text-zinc-900">Rotas e   amados Recentes</h2>
                                <button className="text-sm font-medium text-[#E60014] hover:text-red-700">Ver todos</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left whitespace-nowrap">
                                    <thead className="bg-zinc-50/50 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4">ID Rota</th>
                                            <th className="px-6 py-4">Motorista / Transportadora</th>
                                            <th className="px-6 py-4">Destino</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-200 text-sm">
                                        {/* Linha 1 */}
                                        <tr className="hover:bg-zinc-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-zinc-900">#RT-8821</td>
                                            <td className="px-6 py-4 text-zinc-600">Carlos Silva <span className="text-zinc-400 text-xs ml-1">(Frota Própria)</span></td>
                                            <td className="px-6 py-4 text-zinc-600">CD Recife, PE</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Em Trânsito
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-zinc-400 hover:text-zinc-600"><MoreVertical size={18} /></button>
                                            </td>
                                        </tr>
                                        {/* Linha 2 (Alerta) */}
                                        <tr className="hover:bg-zinc-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-zinc-900">#RT-8819</td>
                                            <td className="px-6 py-4 text-zinc-600">João Mendes <span className="text-zinc-400 text-xs ml-1">(Terceiro)</span></td>
                                            <td className="px-6 py-4 text-zinc-600">CD Itaquera, SP</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Anomalia (Atraso)
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-zinc-400 hover:text-zinc-600"><MoreVertical size={18} /></button>
                                            </td>
                                        </tr>
                                        {/* Linha 3 */}
                                        <tr className="hover:bg-zinc-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-zinc-900">#RT-8802</td>
                                            <td className="px-6 py-4 text-zinc-600">Marcos Antonio <span className="text-zinc-400 text-xs ml-1">(Frota Própria)</span></td>
                                            <td className="px-6 py-4 text-zinc-600">CD Suape, PE</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Concluído
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-zinc-400 hover:text-zinc-600"><MoreVertical size={18} /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}