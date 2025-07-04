import Footer from "./Footer";

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="bg-gradient-to-b from-sky-800/60 to-sky-900/90 fixed overflow-auto top-0 bottom-0 w-full md:max-w-[1200px] md:left-[50%] md:translate-x-[-50%] pt-[100px]">
      <div className="h-full flex flex-col justify-between">
        <div className="pb-[50px] px-[50px] h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
