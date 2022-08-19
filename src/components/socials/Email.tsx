import Link from 'next/link';
import { EnvelopeSimple } from 'phosphor-react';

export default function Email() {
  return (
    <Link href="mailto:motajoao670@gmail.com">
      <a>
        <EnvelopeSimple className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </a>
    </Link>
  );
}
