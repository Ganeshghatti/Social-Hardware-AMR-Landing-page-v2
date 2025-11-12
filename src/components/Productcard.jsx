import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Productcard({
  title,
  description,
  image,
  id,
  Degrees_of_freedom,
  Payload_kg,
  Reach_mm,
  Repeatability_mm,
  Weight_kg,
  IP_Classification,
  Linear_Velocity_m_s,
  Average_Power_W,
  Peak_Power_W,
  Ambient_Temperature_C,
  Ambient_Humidity,
  Installation_Orientation,
  Encoder_Resolution,
  Communication_Bus,
  Brake,
  Actuators,
  Max_Torque_Nm,
  Rated_Torque_Nm,
  Peak_Torque_Nm,
  Motor_Power_W,
  Max_Speed_RPM,
  Strain_Wave_Gear_Ratio,
}) {
  const specs = [
    { label: "Degrees of Freedom", value: Degrees_of_freedom },
    { label: "Payload (kg)", value: Payload_kg },
    { label: "Reach (mm)", value: Reach_mm },
    { label: "Repeatability (mm)", value: Repeatability_mm },
    { label: "Weight (kg)", value: Weight_kg },
    { label: "IP Classification", value: IP_Classification },
    { label: "Linear Velocity (m/s)", value: Linear_Velocity_m_s },
    { label: "Average Power (W)", value: Average_Power_W },
    { label: "Peak Power (W)", value: Peak_Power_W },
    { label: "Ambient Temperature (°C)", value: Ambient_Temperature_C },
    { label: "Ambient Humidity", value: Ambient_Humidity },
    { label: "Installation Orientation", value: Installation_Orientation },
    { label: "Encoder Resolution", value: Encoder_Resolution },
    { label: "Communication Bus", value: Communication_Bus },
    { label: "Brake", value: Brake },
    { label: "Actuators", value: Actuators },
    // { label: "Max Torque (Nm)", value: Max_Torque_Nm },
    // { label: "Rated Torque (Nm)", value: Rated_Torque_Nm },
    // { label: "Peak Torque (Nm)", value: Peak_Torque_Nm },
    // { label: "Motor Power (W)", value: Motor_Power_W },
    // { label: "Max Speed (RPM)", value: Max_Speed_RPM },
    // { label: "Strain Wave Gear Ratio", value: Strain_Wave_Gear_Ratio },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white flex flex-col shadow-md hover:shadow-lg transition-transform duration-300 overflow-hidden w-[320px] md:w-[360px] h-[440px] hover:-translate-y-1">
        <div className="flex justify-center items-center bg-gray-100 h-56">
          <Image
            src={image}
            alt={title}
            width={240}
            height={240}
            className="object-contain"
          />
        </div>

        <div className="p-6 flex flex-col gap-3 items-center text-center">
          <h1 className="text-2xl font-medium text-[#000000]">{title}</h1>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex items-center mx-auto  flex-col">
          <Dialog>
            <DialogTrigger className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 text-white font-medium px-5 py-2 rounded-tl-xl rounded-br-xl w-fit text-sm sm:text-base transition-colors duration-200">
              Get a Technical Overview <ArrowRight size={18} />
            </DialogTrigger>
            <Link href="/contact">
                <button  className="bg-orange-500  hover:bg-orange-600 flex items-center gap-2 text-white font-medium px-5 py-1 mt-1  w-fit text-sm sm:text-base transition-colors duration-200">
              Get Customer Quote
            </button>
            </Link>
        

            <DialogContent className="max-w-4xl max-h-[80vh] w-full overflow-y-auto p-8 bg-white rounded-2xl shadow-lg">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                  {title} Specifications
                </DialogTitle>
              </DialogHeader>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm text-gray-700">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left font-semibold w-1/2">
                        Specification
                      </th>
                      <th className="border px-4 py-2 text-left font-semibold w-1/2">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map(
                      (spec, index) =>
                        spec.value && (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } hover:bg-gray-100 transition`}
                          >
                            <td className="border px-4 py-2 font-medium text-gray-800">
                              {spec.label}
                            </td>
                            <td className="border px-4 py-2">{spec.value}</td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Get more Specifications Details
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
