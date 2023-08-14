import './styles.css';
import Head from './head';
const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html>
      <Head />
      <body className="font-[Poppins] bg-[#181818] text-zinc-200 flex items-center h-screen justify-center">{children}</body>
    </html>
);

export default RootLayout;
