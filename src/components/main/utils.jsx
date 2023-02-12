import { statements } from "../../db/statements";
import { sections} from "../../db/sections";

function modifiedStatementsWithIsOpenStatus() {
  return statements.map((item) => {
    return ({ ...item, isOpen: false });
  });
}

let modifiedStatements = modifiedStatementsWithIsOpenStatus();

function changeStatementsIsOpenStatus(clickedId = null) {
  modifiedStatements = modifiedStatements.map((item) => {
    if (item.statement.id === clickedId) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
    return item;
  })
  return modifiedStatements;
}

function findOpenStatementId() {
  return modifiedStatements.find((item) => item.isOpen).statement.id;
}

function getSectionUnreadCountById(sectionId) {
  console.log(sectionId);
  return sections.find((item) => item.section.id === sectionId).section.unreadCount;
}

function changeUnreadCountStatements(statementId, sectionId) {
  modifiedStatements = modifiedStatements.map((item) => {
    if (item.statement.id === statementId && item.statement.unreadCount > 0) {
      item.statement.unreadCount = item.statement.unreadCount - getSectionUnreadCountById(sectionId);
      console.log(item);
    }
    return item;
  });
  console.log(modifiedStatements);
  return modifiedStatements;
}

export {
  changeStatementsIsOpenStatus,
  modifiedStatementsWithIsOpenStatus,
  changeUnreadCountStatements,
  findOpenStatementId
};
