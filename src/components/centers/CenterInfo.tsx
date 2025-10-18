import type { FC } from "react";
import type { CenterInfoProps } from "../../interfaces/center.interface";
import { ClockCircleFilled, PhoneFilled } from "@ant-design/icons";

const CenterInfo: FC<CenterInfoProps> = ({ center, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <div className="w-full px-5 md:px-10 py-5 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-6 rounded-md overflow-hidden shadow-md">
            <img src={center?.image} alt={center?.name} className="w-full" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-headerColor text-xl md:text-2xl font-semibold col-span-12">
              {center?.name}
            </h1>
            <div
              className="text-textColor text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: center?.text || "" }}
            ></div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <ClockCircleFilled className="text-2xl" />
                <p className="text-textColor text-base md:text-lg">
                  {center?.work_time_text}
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <PhoneFilled className="text-2xl" />
                <p className="text-textColor text-base md:text-lg">
                  {center?.mobile_text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterInfo;
