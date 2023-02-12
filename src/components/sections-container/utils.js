import { clonedSections } from "../main/utils.jsx";

function getSectionsById(sectionsId) {
  return sectionsId.map((id) => clonedSections.find((item) => item.section.id === id));
}

export { getSectionsById };
