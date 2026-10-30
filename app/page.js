'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  FileCheck, 
  AlertTriangle, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

export default function PramanaMasterAdmin() {
  const [activeSection, setActiveSection] = useState('overview');

  const [docQueue, setDocQueue] = useState([
    { id: 'DOC-9021', company: 'Tech Mahindra Ltd', employee: 'Rahul Sharma', type: 'Relieving Letter', date: '2026-10-29', status: 'Pending OCR' },
    { id: 'DOC-9022', company: 'Infosys Global', employee: 'Priya Nair', type: 'Offer Letter', date: '2026-10-30', status: 'Verified' },
    { id: 'DOC-9023', company: 'Local Kirana Mart #42', employee: 'Manoj Kumar', type: 'Daily Wage Agreement', date: '2026-10-30', status: 'Pending Review' },
  ]);

  const handleApproveDoc = (id) => {
    setDocQueue(docQueue.map(doc => doc.id === id ? { ...doc, status: 'Cryptographically Stamped' } : doc));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased">
      {/* Top Header Navbar */}
      <header className="border-b border-slate-800/80 bg-[#030712]/90 backdrop-blur-xl sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-900 flex items-center justify-center shadow-lg shadow-indigo-900/40 border border-indigo-500/30">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white flex items-center gap-2">
              PRAMANA <span className="text-[10px] px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30 font-semibold tracking-widest uppercase">Master Admin</span>
            </span>
            <span className="text-xs text-slate-400 block">Sovereign National Trust & Credential Grid</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Node Cluster: Bengaluru-Central (Secure)
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-indigo-300">
            PM
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Navigation Sidebar */}
        <aside className="lg:col-span-1 space-y-2">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Control Hub</div>
          <button 
            onClick={() => setActiveSection('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeSection === 'overview' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
          >
            <Activity className="h-4 w-4" /> Ecosystem Ticker
          </button>
          <button 
            onClick={() => setActiveSection('documents')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeSection === 'documents' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
          >
            <FileCheck className="h-4 w-4" /> Document Vault OCR
          </button>
          <button 
            onClick={() => setActiveSection('disputes')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeSection === 'disputes' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
          >
            <AlertTriangle className="h-4 w-4" /> Disputes & Appeals
          </button>
          <button 
            onClick={() => setActiveSection('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeSection === 'security' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}
          >
            <Lock className="h-4 w-4" /> Security & ZKP Audit
          </button>
        </aside>

        {/* Right Content Arena */}
        <main className="lg:col-span-4 space-y-8">
          
          {/* Top Ticker Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-xl">
              <span className="text-xs font-medium text-slate-400">Total Verified Profiles</span>
              <div className="text-2xl font-black text-white mt-1">1,428,920</div>
              <span className="text-[10px] text-emerald-400 font-semibold mt-2 inline-block">↑ 14.2% this month</span>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-xl">
              <span className="text-xs font-medium text-slate-400">Active Corporate Checks</span>
              <div className="text-2xl font-black text-white mt-1">14,250</div>
              <span className="text-[10px] text-emerald-400 font-semibold mt-2 inline-block">10-sec response avg</span>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-xl">
              <span className="text-xs font-medium text-slate-400">Household & Kirana Nodes</span>
              <div className="text-2xl font-black text-white mt-1">89,400</div>
              <span className="text-[10px] text-indigo-400 font-semibold mt-2 inline-block">Active daily ledgers</span>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl backdrop-blur-xl">
              <span className="text-xs font-medium text-slate-400">Fraud Attempts Blocked</span>
              <div className="text-2xl font-black text-rose-400 mt-1">312</div>
              <span className="text-[10px] text-rose-400/80 font-semibold mt-2 inline-block">Moonlighting / Fake ID</span>
            </div>
          </div>

          {/* Dynamic Content Sections */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-white">National Sovereign Ledger Activity</h2>
                    <p className="text-sm text-slate-400">Real-time telemetry across corporate enterprises, local kirana stores, and households.</p>
                  </div>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-semibold">Live Feed</span>
                </div>

                <div className="space-y-3">
                  {[
                    { title: 'Offer Letter Cryptographically Stamped', entity: 'Infosys Global • ID: PRM-7742', time: '2 mins ago', type: 'corporate' },
                    { title: 'Monthly Timesheet & Salary Settled via UPI', entity: 'Household #904, Jayanagar • ID: PRM-3321', time: '7 mins ago', type: 'household' },
                    { title: 'Daily Wage & Advance Ledger Updated', entity: 'Sri Venkateshwara Provision Store • ID: PRM-9912', time: '14 mins ago', type: 'kirana' },
                    { title: 'Tenure Exit Clearance Verified', entity: 'Wipro Technologies • ID: PRM-1184', time: '25 mins ago', type: 'corporate' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs">
                          {item.type === 'corporate' ? 'B2B' : item.type === 'household' ? 'B2C' : 'SBN'}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                          <p className="text-xs text-slate-400">{item.entity}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'documents' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Corporate Document Verification Queue (OCR)</h2>
                  <p className="text-sm text-slate-400">Review uploaded Offer Letters and Relieving Letters from corporate partners.</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-slate-800 text-slate-400 font-semibold">
                      <tr>
                        <th className="pb-3 px-4">Doc ID</th>
                        <th className="pb-3 px-4">Company</th>
                        <th className="pb-3 px-4">Employee</th>
                        <th className="pb-3 px-4">Document Type</th>
                        <th className="pb-3 px-4">Status</th>
                        <th className="pb-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {docQueue.map((doc) => (
                        <tr key={doc.id} className="hover:bg-slate-950/40">
                          <td className="py-4 px-4 font-mono text-xs text-indigo-400">{doc.id}</td>
                          <td className="py-4 px-4 text-white font-medium">{doc.company}</td>
                          <td className="py-4 px-4 text-slate-300">{doc.employee}</td>
                          <td className="py-4 px-4 text-slate-400">{doc.type}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                              doc.status === 'Verified' || doc.status === 'Cryptographically Stamped' 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            }`}>
                              {doc.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            {doc.status !== 'Cryptographically Stamped' && (
                              <button 
                                onClick={() => handleApproveDoc(doc.id)}
                                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-indigo-900/30"
                              >
                                Approve & Stamp
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'disputes' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl space-y-4">
                <h2 className="text-xl font-bold text-white">Dispute & Grievance Resolution Desk</h2>
                <p className="text-sm text-slate-400">Arbitrate wage disputes or exit clearance conflicts transparently.</p>
                <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">All Grievances Cleared</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">No active labor or corporate disputes pending in the arbitration queue.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl space-y-4">
                <h2 className="text-xl font-bold text-white">Security & Sovereign Compliance Audit</h2>
                <p className="text-sm text-slate-400">Zero-Knowledge cryptographic verification parameters.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs text-indigo-400 font-mono">ENCRYPTION PROTOCOL</span>
                    <h4 className="font-bold text-white">AES-256 & ZKP Layer</h4>
                    <p className="text-xs text-slate-400">Personal identifiers remain sovereign; cryptographic proofs are shared.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs text-emerald-400 font-mono">GOVERNMENT RAIL</span>
                    <h4 className="font-bold text-white">DigiLocker & Aadhaar e-KYC</h4>
                    <p className="text-xs text-slate-400">Direct integration ready for national labor welfare distribution.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
