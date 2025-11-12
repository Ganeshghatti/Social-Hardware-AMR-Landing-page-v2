import React from "react";

import Productcard from "@/components/Productcard";
import { products } from "@/default-data/products";

export default function Products() {


  return (
    <section className="w-full bg-white">
      <div className="py-8 px-6 sm:px-10 flex flex-col gap-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2">
          Collaborative Robots{" "}
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4 sm:gap-0">
          <p className="text-[#6D6D6D] text-sm sm:text-base max-w-xl ml-0 md::ml-20">
            Cost-effective, ready-made cobot solutions with payloads from 3kg to
            20kg. Safe, fast to deploy, and flexible from small-part assembly to
            palletizing.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end md:gap-6 gap-3 mt-4 sm:mt-0">
            <div className="bg-gray-200 px-3 py-1 rounded-2xl text-sm sm:text-base">
              3–20 Kg Payload Capacity
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-2xl text-sm sm:text-base">
              540–1650mm Reach
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-2xl text-sm sm:text-base">
              ±0.03mm to ±0.1mm Repeatability
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] w-full px-5 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-0">
          {products.map((p) => (
            <Productcard
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              Degrees_of_freedom={p.Degrees_of_freedom}
              Payload_kg={p.Payload_kg}
              Reach_mm={p.Reach_mm}
              Repeatability_mm={p.Repeatability_mm}
              Weight_kg={p.Weight_kg}
              IP_Classification={p.IP_Classification}
              Linear_Velocity_m_s={p.Linear_Velocity_m_s}
              Average_Power_W={p.Average_Power_W}
              Peak_Power_W={p.Peak_Power_W}
              Ambient_Humidity={p.Ambient_Humidity}
              Ambient_Temperature={p.Ambient_Temperature}
              Installation_Orientation={p.Installation_Orientation}
              Encoder_Resolution={p.Encoder_Resolution}
              Communication_Bus={p.Communication_Bus}
              Brake={p.Brake}
              Actuators={p.Actuators}
              Max_Torque_Nm={p.Max_Torque_Nm}
              Max_Speed={p.Max_Speed}
              Rated_Torque_Nm={p.Rated_Torque_Nm}
              Motor_Power_W={p.Motor_Power_W}
              Peak_Torque_Nm={p.Peak_Torque_Nm}
              Strain_Wave_Gear_Ratio={p.Strain_Wave_Gear_Ratio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
