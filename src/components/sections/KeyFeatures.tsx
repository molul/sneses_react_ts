import { features } from "../../assets/data/features";
import Title from "../Title";
import { AiFillCheckSquare } from "react-icons/ai";


const KeyFeatures = () => {
  return (
    <section className="space-y-8 ">
      <Title text="Key features" />

      <div className=" break-words bg-black bg-opacity-50 p-4 rounded-lg">
        <div className="space-y-2">
          {features.key.map((feat, index) => (
            <div key={index} className="flex  justify-start items-start gap-4 py-2">
  <div>
<AiFillCheckSquare/>
</div>
<div>
{feat}
</div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
