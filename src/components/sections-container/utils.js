function getSectionsById(sectionsId, sections) {
  return sectionsId.map((id) => sections.find((item) => item.section.id === id));
}

export { getSectionsById };
