const db = {
  Users: [],
  Boards: [],
  Tasks: []
};

const getAll = tableName => db[tableName];

const get = (tableName, id) => db[tableName].find(entity => entity.id === id);

const create = (tableName, entity) => {
  db[tableName].push(entity);
  return entity;
};

const update = (tableName, id, newEntity) => {
  const index = db[tableName].findIndex(entity => entity.id === id);
  db[tableName][index] = { ...newEntity, id };
  return db[tableName][index];
};

const remove = (tableName, id) => {
  const newTable = db[tableName].filter(entity => entity.id !== id);
  const isRemove = newTable.length === db[tableName].length;
  db[tableName] = newTable;
  return !isRemove;
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
