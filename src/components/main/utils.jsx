import { statements } from "../../db/statements";

function modifiedStatementsWithIsOpenStatus() {
  return statements.map((item) => {
    return ({ ...item, isOpen: false });
  });
}

let modifiedStatements = modifiedStatementsWithIsOpenStatus();

function setStatementsIsOpenStatus(clickedId = null) {
  modifiedStatements = modifiedStatements.map((item) => {
    if (item.statement.id === +clickedId) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
    return item;
  })
  return modifiedStatements;
}

function setUread(id) {
  
}

export { setStatementsIsOpenStatus, modifiedStatementsWithIsOpenStatus };
