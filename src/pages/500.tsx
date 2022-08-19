import Error from '../components/Error';

export default function Custom500() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Error code={500} message="Internal Server Error." />
    </div>
  );
}
