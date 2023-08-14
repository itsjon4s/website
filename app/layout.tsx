import './styles.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html>
      <head />
      <body className="font-[Poppins] bg-[#181818] text-zinc-200 flex items-center h-screen justify-center">{children}</body>
    </html>
);

export default RootLayout;
