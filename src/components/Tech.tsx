import type { NextPage } from 'next';

interface TechProps {
  text: string;
}

const Tech: NextPage<TechProps> = (props: TechProps) => {
  return (
    <div className="mt-[15px] mr-[9px] ml-[9px] border-solid border-2 border-mantle bg-mantle rounded-lg">
      <div className="p-[10px]">{props.text}</div>
    </div>
  );
};

export default Tech;
