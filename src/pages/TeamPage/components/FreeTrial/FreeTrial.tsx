import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FreeTrial = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-8 px-10 py-10">
      <h2 className="text-4xl font-bold text-dark-blue">Start your 14 days free trial</h2>
      <p className="text-gray font-medium text-sm md:w-[30%]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
      <button className="bg-blue rounded-md px-8 py-4 text-white text-sm font-semibold">Try it free now</button>
      <div className="flex items-center justify-center gap-6 *:w-8 *:h-8">
        <Twitter />
        <Facebook />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  )
}

export default FreeTrial;