import dataCertif from "@/data/certificate.json";
import dataUiux from "@/data/uiux.json";

const Certificates = () => {
  return (
    <>
      <div className="w-full md:px-0 px-2">
        <h2 className="text-2xl font-bold mb-4">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dataCertif.map((certif, i) => (
            <div key={i} className="flex flex-col">
              <img
                className="w-screen transition duration-500 rounded-2xl"
                src={certif.img}
                alt={certif.title}
              />
              <h5 className="text-text mt-3 font-semibold">
                {certif.title}
              </h5>
              <p className="text-text-seconday text-sm mt-1">
                {certif.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
