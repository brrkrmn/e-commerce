import { Redo } from "lucide-react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-dark-blue py-20 relative">
      <Redo className="text-blue rotate-45 w-24 h-24 absolute -top-5 left-2/5 -translate-x-1/2 stroke-[1px]" />
      <h5 className="text-xs font-bold">WE CAN'T WAIT TO MEET YOU</h5>
      <h1 className="text-5xl font-bold">Let's Talk</h1>
      <button className="bg-blue text-white text-sm font-medium py-4 px-10 rounded-md">Try it free now</button>
    </div>
  )
}

export default CTA;