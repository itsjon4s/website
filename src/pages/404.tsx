import Error from '../components/Error';

export default function Custom404() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Error code={404} message="Page not found." />
    </div>
  );
}
