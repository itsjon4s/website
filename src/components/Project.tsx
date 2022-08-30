import type { NextPage } from 'next';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  repository: string;
}

const Project: NextPage<ProjectProps> = (props: ProjectProps) => {
  return (
    <Link href={props.repository}>
      <a>
        <div className="w-80 h-56 p-9 rounded-lg bg-mantle border-mantle shadow-md text-start">
          <h4 className="text-3xl font-bold">{props.title}</h4>
          <p className="text-[#a6adc8] font-normal text-xl pt-2">{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Project;
