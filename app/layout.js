export const metadata = {
  title: 'Pramana | Master Admin Dashboard',
  description: 'Sovereign National Trust & Credential Grid for India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
