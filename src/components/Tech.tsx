interface TechProps {
  text: string;
}

const Tech = (props: TechProps) => {
  return (
    <div className="mt-[15px] mr-[9px] ml-[9px] border-solid border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 delay-50">
      <div className="p-[10px]">{props.text}</div>
    </div>
  );
};

export default Tech;
