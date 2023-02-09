import { statements } from "../../db/statements";

function modifiedStatementsWithIsOpenStatus() {
  return statements.map((item) => {
    return ({ ...item, isOpen: false });
  });
}

let modifiedStatements = modifiedStatementsWithIsOpenStatus();

function getStatementsWithIsOpenStatus(clickedId = null) {
  modifiedStatements = modifiedStatements.map((item) => {
    if (item.statement.id === +clickedId) {
      item.isOpen = !item.isOpen;
    } else {
      item.isOpen = false;
    }
    return item;
  })
  console.log(modifiedStatements);
  return modifiedStatements;
}

export { getStatementsWithIsOpenStatus };
