import type { NextPage } from 'next';
import Error from '../components/Error';

const Custom404: NextPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Error code={404} message="Page not found." />
    </div>
  );
};

export default Custom404;
