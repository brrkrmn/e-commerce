import Clients from "../../../../components/Clients/Clients";

const Companies = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-2 px-4 bg-light-gray-1 pt-20">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h2 className="text-dark-blue text-4xl font-bold">
          Big Companies Are Here
        </h2>
        <p className="text-gray font-medium text-sm md:w-[40%]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <Clients />
    </div>
  );
};

export default Companies;
