import React from "react";
import { FaPen, FaTimes, FaRegCircle } from "react-icons/fa";

export default function Icon({ name }) {
  switch (name) {
    case "circle":
      return <FaRegCircle />;

    case "cross":
      return <FaTimes />;

    default:
      return <FaPen />;
  }
}
