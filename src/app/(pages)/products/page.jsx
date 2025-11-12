import React from "react";
import product1 from "../../../../public/product1.png";
import product4 from "../../../../public/advanced-ugv.webp";
import product5 from "../../../../public/bionic-hand.webp";
import product2 from "../../../../public/vision-system.webp";
import product3 from "../../../../public/reach-v1.webp";
import product6 from "../../../../public/lite-ugv.webp";
import product7 from "../../../../public/precision-gripper.webp";
import Productcard from "@/components/Productcard";

export default function Products() {
  const products = [
    {
      id: "1",
      title: "P3-R600-100",
      image: product1,
      Degrees_of_freedom: "6",
      Payload_kg: "3",
      Reach_mm: "540",
      Repeatability_mm: "A±0.03",
      Weight_kg: "13",
      IP_Classification: "IP54",
      Linear_Velocity_m_s: "1.5",
      Average_Power_W: "150",
      Peak_Power_W: "750",
      Ambient_Temperature: "0-60",
      Ambient_Humidity: "90% RH (non-condensing)",
      Installation_Orientation: "Any ceiling, floor, wall",
      Encoder_Resolution: "19Bit",
      Communication_Bus: "EtherCAT",
      Brake: "Friction Brake",
      Actuators: "J1, J2, J3",
      Max_Torque_Nm: "143NA-m",
      Rated_Torque_Nm: "31",
      Peak_Torque_Nm: "143",
      Motor_Power_W: "146",
      Max_Speed: "60RPM",
      Strain_Wave_Gear_Ratio: "14-100",
    },
    {
      id: "2",
      title: "P5-R900-120",
      image: product2,
      Degrees_of_freedom: "6",
      Payload_kg: "5",
      Reach_mm: "912",
      Repeatability_mm: "±0.03",
      Weight_kg: "23.5",
      IP_Classification: "IP54",
      Linear_Velocity_m_s: "3.0",
      Average_Power_W: "350",
      Peak_Power_W: "1500",
      "Ambient_Temperature_°C": "0-60",
      Ambient_Humidity: "90% RH (non-condensing)",
      Installation_Orientation: "Any ceiling, floor, wall",
      Encoder_Resolution: "19Bit",
      Communication_Bus: "EtherCAT",
      Brake: "Friction Brake",
      Actuators: "J1, J2, J3",
      Max_Torque_Nm: "107",
      Rated_Torque_Nm: "52",
      Peak_Torque_Nm: "191",
      Motor_Power_W: "300",
      Max_Speed_RPM: "60",
      Strain_Wave_Gear_Ratio: "20-100",
    },
    {
      id: "3",
      image: product3,
      title: "P5-R900-121",
      Degrees_of_freedom: "6",
      Payload_kg: "10",
      Reach_mm: "1300",
      Repeatability_mm: "±0.05",
      Weight_kg: "36.5",
      IP_Classification: "IP54",
      Linear_Velocity_m_s: "3.0",
      Average_Power_W: "500",
      Peak_Power_W: "2000",
      "Ambient_Temperature_°C": "0-60",
      Ambient_Humidity: "90% RH (non-condensing)",
      Installation_Orientation: "Any ceiling, floor, wall",
      Encoder_Resolution: "19Bit",
      Communication_Bus: "EtherCAT",
      Brake: "Friction Brake",
      Actuators: "J1, J2",
      Max_Torque_Nm: "143",
      Rated_Torque_Nm: "31",
      Peak_Torque_Nm: "143",
      Motor_Power_W: "146",
      Max_Speed_RPM: "60",
      Strain_Wave_Gear_Ratio: "14-100",
    },
    {
      id: "4",
      image: product4,
      title: "P5-R900-122",
      Degrees_of_freedom: "6",
      Payload_kg: "20",
      Reach_mm: "1650",
      Repeatability_mm: "±0.1",
      Weight_kg: "~58",
      IP_Classification: "IP54",
      Linear_Velocity_m_s: "~2.2",
      Average_Power_W: "1000",
      Peak_Power_W: "3000",
      "Ambient_Temperature_°C": "0-60",
      Ambient_Humidity: "90% RH (non-condensing)",
      Installation_Orientation: "Any ceiling, floor, wall",
      Encoder_Resolution: "19Bit",
      Communication_Bus: "EtherCAT",
      Brake: "Friction Brake",
      Actuators: "J1, J2",
      Max_Torque_Nm: "191",
      Rated_Torque_Nm: "52",
      Peak_Torque_Nm: "191",
      Motor_Power_W: "300",
      Max_Speed_RPM: "60",
      Strain_Wave_Gear_Ratio: "20-100",
    },
  ];

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
