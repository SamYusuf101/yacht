"use client";

import React from "react";
import Container from "./Container";
import { GiFishingBoat } from "react-icons/gi";
import { GiSailboat } from "react-icons/gi";
import { GiSpeedBoat } from "react-icons/gi";
import { MdHouseboat } from "react-icons/md";
import { GiSmallFishingSailboat } from "react-icons/gi";
import { GiShoonerSailboat } from "react-icons/gi";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Yacht",
    icon: MdOutlineDirectionsBoatFilled,
    description:
      " A yacht is a luxurious watercraft designed for leisure and pleasure cruising. It is typically a larger vessel than a standard pleasure boat, often featuring high-end amenities and advanced technology. Yachts can be privately owned or chartered, and are commonly used for cruising in oceans, lakes, and other bodies of water around the world.",
  },
  {
    label: "Fishing Boats",
    icon: GiFishingBoat,
    description:
      "Fishing boats are specialized vessels designed for catching fish in marine environments. They come in various sizes and shapes, from small kayaks to large trawlers. Fishing boats are equipped with features such as nets",
  },
  {
    label: "Sail Boats",
    icon: GiSailboat,
    description:
      "Sailboats, also known as sailing vessels, are boats propelled by the wind using sails. They come in various sizes and types, from small dinghies to large yachts. Sailboats are often favored for their quiet and eco-friendly mode of transportation, as well as for the thrill of sailing and the challenge of navigating by wind and current.",
  },
  {
    label: "Speed Boats",
    icon: GiSpeedBoat,
    description:
      "Speed boats are watercraft designed for high-speed operation and thrilling water sports activities. They typically feature powerful engines, sleek hull designs, and low profiles that minimize drag and maximize speed. Popular uses for speed boats include racing, water skiing, wakeboarding, and leisure cruising.",
  },
  {
    label: "House Boats",
    icon: MdHouseboat,
    description:
      "Houseboats are floating homes that are designed to be lived in on a permanent or temporary basis. They range in size and style, from small and basic to large and luxurious. Many houseboats come equipped with amenities such as kitchens, bathrooms, and bedrooms, and are used for leisurely cruising or as permanent residences on the water",
  },
  {
    label: "Shooner Sail Boats",
    icon: GiShoonerSailboat,
    description:
      "A schooner is a sailing vessel that has two or more masts with the forward mast being shorter or equal in height to the aft mast. The sails on a schooner are typically fore-and-aft rigged, which means that they are positioned parallel to the keel rather than perpendicular to it",
  },
  {
    label: "Small Fishing Boats",
    icon: GiSmallFishingSailboat,
    description:
      "Small fishing boats are watercraft designed for fishing in lakes, rivers, and other bodies of water. They are typically small in size and easy to maneuver, making them popular among solo anglers and small fishing groups. ",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="bg-white pt-2  flex flex-row items-center
    justify-between overflow-x-auto"
      >
        {categories.map((items) => (
          <CategoryBox
            key={items.label}
            label={items.label}
            selected={category === items.label}
            icon={items.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
