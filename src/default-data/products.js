import product1 from "../../public/3KG_1.png";
import product1a from "../../public/3KG_2.png";
import product1b from "../../public/3KG_3.png";

import product4 from "../../public/20KG_1.png";
import product4a from "../../public/20KG_2.png";
import product4b from "../../public/20KG_3.png";

import product2 from "../../public/5KG_1.png";
import product2a from "../../public/5KG_2.png";
import product2b from "../../public/5KG_3.png";

import product3 from "../../public/10KG_1.png";
import product3a from "../../public/10KG_2.png";
import product3b from "../../public/10KG_3.png";

export const products = [
  {
    id: "1",
    title: "P3-R600",
    image: product1,
    otherimages: [{image : product1a , name:"P3-R600 5KG"} , {image : product1b , name:"P3-R600 10KG"}],
    description:
      "3 kg payload, 540 mm reach.Ideal for bench tops, tight spaces, and safe collaboration.",
    Degrees_of_freedom: "6",
    Payload_kg: "3",
    Reach_mm: "540",
    Repeatability_mm: "A±0.03",
    Weight_kg: "13",
    IP_Classification: "IP54",
    Linear_Velocity_m_s: "1.5m/s",
    Average_Power_W: "150W",
    Peak_Power_W: "750W",
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
    title: "P5-R900",
    image: product2,
    otherimages: [{image : product2a , name : "P5-R900 5KG"} , {image :product2b , name : "P5-R900 10KG"}],

    description:
      "5 kg payload, 912 mm reach, optimized for larger work envelopes & for high‑throughput.",
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
    otherimages: [{image: product3a , name : "P10-R1300 5KG"} , {image : product3b , name : "P10-R1300 10KG"}],

    description:
      "10 kg payload, 1300 mm reach, ready for heavy handling and expanded work envelopes.",
    title: "P10-R1300",
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
    otherimages: [{image : product4a , name : "P20-R1650"} , {image : product4b , name : "P20-R1650"}],

    title: "P20-R1650",
    description:
      "20 kg payload , 1650 mm reach. made for heavy picks and long reach placement.",
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
