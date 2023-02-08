function getMessagesBySectionId(clickedSectionId, sections, messages) {
  if (clickedSectionId) {
    return sections
      .find((item) => item.section.id === clickedSectionId).section.messagesId
      .map((messageId => messages.find((item) => item.message.id === messageId).message));
  } else {
    return [];
  }
}

export { getMessagesBySectionId };
