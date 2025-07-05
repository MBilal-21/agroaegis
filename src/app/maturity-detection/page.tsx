import DetectionPage from "@/components/Detection";
import React from "react";

const maturityResults = [
  {
    name: "Tomato Ripeness",
    description:
      "Tomatoes turn from green to red (or yellow/orange, depending on variety) and soften slightly when mature.",
    image:
      "https://cdn.mos.cms.futurecdn.net/9g6DkA7vRH8niqGvBdq6QL.jpg",
    solution:
      "Harvest tomatoes when they are fully colored and slightly soft to the touch. Avoid picking when fully green.",
  },
  {
    name: "Banana Maturity",
    description:
      "Bananas change from green to yellow as they mature, and the fruit softens.",
    image:
      "https://www.wikihow.com/images/thumb/f/f8/Keep-Bananas-from-Ripening-Too-Fast-Step-3-Version-4.jpg/550px-nowatermark-Keep-Bananas-from-Ripening-Too-Fast-Step-3-Version-4.jpg",
    solution:
      "Harvest bananas when the ridges on the fruit start to round and the color changes from deep green to light green or yellow.",
  },
  {
    name: "Wheat Grain Maturity",
    description:
      "Wheat heads turn golden brown and grains become hard and dry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7REXsyj60ncyBD6klVrILC8Og9VK9srvdyA&s",
    solution:
      "Harvest wheat when the grains are hard and the moisture content is below 20%.",
  },
  {
    name: "Apple Ripeness",
    description:
      "Apples develop full color, become firm, and easily detach from the tree.",
    image:
      "https://www.southernliving.com/thmb/ukzYxsAy9ZqpUnI21IDkXfnja78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Apples_Gala_Apples_002-fb02a8bebafb4571a345da600e5006f9.jpg",
    solution:
      "Harvest apples when they have reached full color and come off the tree with a gentle twist.",
  },
  {
    name: "Rice Grain Maturity",
    description:
      "Rice panicles turn yellow and grains become hard and dry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hhhs3UqWeo4UuPko-YWSOjxd1gPw6a9WbQ&s",
    solution:
      "Harvest rice when 80-85% of the grains on the panicle are straw-colored and hard.",
  },
];

const MaturityDetectionPage = () => {
    return (
       <DetectionPage Results={maturityResults} pagename="Food Maturity Detection Page"/>
    );
}
export default MaturityDetectionPage;