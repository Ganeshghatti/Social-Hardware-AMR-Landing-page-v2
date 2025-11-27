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
    <div className="flex justify-center items-center font-geist w-full">
      <div
        className="
      bg-white flex flex-col shadow-md mt-3 hover:shadow-lg rounded-2xl 
      transition-transform duration-300 overflow-hidden 
      w-full max-w-[300px] sm:max-w-[300px] lg:max-w-[360px]
      hover:-translate-y-1
    "
      >
        <div className="flex justify-center items-center bg-gray-100 h-48 sm:h-56 md:h-64">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="object-contain w-full h-full p-3 scale-x-[-1]"
          />
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-3 items-center text-center">
          <h1 className="text-lg sm:text-xl font-semibold text-[#000000]">
            {title}
          </h1>

          <p className="2xl:text-base md:text-lg text-[#6D6D6D] leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <Link href={`/products/${id}`} className="w-full flex items-center">
          <button
            className="
          bg-[#FF6600] font-medium text-[#F8F8F8] py-2 px-3 flex items-center justify-center gap-1
          w-2/3 mx-auto mb-8 sm:mb-10 cut-corners text-md sm:text-lg
        "
          >
            View Specifications <ArrowRight size={13} className="text-white " />
          </button>
        </Link>
      </div>
    </div>
  );
}
