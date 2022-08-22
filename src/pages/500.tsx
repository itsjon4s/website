import type { NextPage } from 'next';
import Error from '../components/Error';

const Custom500: NextPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Error code={500} message="Internal Server Error." />
    </div>
  );
};

export default Custom500;
