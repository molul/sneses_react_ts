import { features } from "../../assets/data/features";
import Feature from "../Feature";
import Title from "../Title";

const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />

      <div className=" break-words bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="space-y-2">
          {features.key.map((feat, index) => (
            <div key={index}>
              <Feature text={feat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
