function getStatementsWithIsOpenStatus(clickedId = null, statements) {
  const modifiedStatements = statements.map((item) => {
    return ({ ...item, isOpen: item.statement.id === +clickedId ? true : false });
  });

  return modifiedStatements;
}

export { getStatementsWithIsOpenStatus };
