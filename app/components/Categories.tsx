import React from "react";
import Container from "./Container";
import { GiFishingBoat } from "react-icons/gi";
import { GiSailboat } from "react-icons/gi";
import { GiSpeedBoat } from "react-icons/gi";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "Fishing Boats",
    icon: GiFishingBoat,
    description: "This property is close to the beach!",
  },
  {
    label: "Sail Boats",
    icon: GiSailboat,
    description: "This property is has windmills!",
  },
  {
    label: "Speed Boats",
    icon: GiSpeedBoat,
    description: "This property is modern!",
  },
];

const Categories = () => {
  return (
    <Container>
      <div
        className="bg-white pt-10  flex flex-row items-center
    justify-between overflow-x-auto"
      >
        {categories.map((items) => (
          <CategoryBox
            key={items.label}
            label={items.label}
            description={items.description}
            icon={items.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
