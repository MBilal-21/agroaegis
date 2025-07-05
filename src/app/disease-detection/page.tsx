import DetectionPage from "@/components/Detection";
import React from "react";

const diseaseResults = [
  {
    name: "Powdery Mildew",
    description:
      "White, powdery fungal growth on the surface of leaves, stems, and buds.",
    image:
      "https://grangettos.com/cdn/shop/articles/shutterstock_1806230311_1500x.jpg?v=1627419008",
    solution:
      "Remove affected leaves, improve air circulation, and apply sulfur or neem oil fungicides.",
  },
  {
    name: "Downy Mildew",
    description:
      "Yellow or pale green spots on upper leaf surfaces with grayish mold underneath.",
    image:
      "https://www.planetnatural.com/wp-content/uploads/2012/12/downy-mildew-disease-920x518.jpg",
    solution:
      "Remove infected leaves, avoid overhead watering, and use copper-based fungicides.",
  },
  {
    name: "Leaf Spot",
    description:
      "Brown, black, or tan spots on leaves, sometimes with yellow halos.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/%27Cercospora_capsici.jpg",
    solution:
      "Remove and destroy affected leaves, avoid wetting foliage, and apply appropriate fungicides.",
  },
  {
    name: "Rust",
    description:
      "Orange, yellow, or brown pustules on the underside of leaves.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNEtzjsOOaTAGMf9-tgDVbNFU1FBdIdvPyA&s",
    solution:
      "Remove infected leaves, use resistant varieties, and apply sulfur or copper-based fungicides.",
  },
  {
    name: "Bacterial Leaf Blight",
    description:
      "Water-soaked lesions that turn brown and spread, often with yellow halos.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShnI36UXTGCRAPsVYmIIaYLNR5L22sFx45Q&s",
    solution:
      "Remove infected parts, avoid overhead irrigation, and use copper-based bactericides.",
  },
  {
    name: "Anthracnose",
    description:
      "Dark, sunken lesions on leaves, stems, or fruit.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz5lhVOMPg1AIvTsie0xP1ZbgtnQrrKuaqw&s",
    solution:
      "Prune and destroy affected parts, improve air circulation, and apply fungicides if necessary.",
  },
];

const DiseaseDetectionPage = () => {
    return (
        <DetectionPage Results={diseaseResults} pagename="Leave Disease Detection Page" />
    );
}
export default DiseaseDetectionPage;