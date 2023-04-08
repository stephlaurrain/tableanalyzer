const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Tables", deps: []
 * createTable() => "Columns", deps: [Tables]
 *
 */

const info = {
  revision: 1,
  name: "init",
  created: "2023-04-07T21:59:43.704Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "Tables",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        tab_id: { type: Sequelize.STRING, field: "tab_id", unique: true },
        tab_collection: { type: Sequelize.STRING, field: "tab_collection" },
        tab_name: { type: Sequelize.STRING, field: "tab_name" },
        tab_desc: { type: Sequelize.TEXT, field: "tab_desc" },
        tab_enum: { type: Sequelize.STRING, field: "tab_enum" },
        tab_count: { type: Sequelize.STRING, field: "tab_count" },
        tab_model: { type: Sequelize.TEXT, field: "tab_model" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Columns",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        col_id: { type: Sequelize.STRING, field: "col_id" },
        col_key: { type: Sequelize.STRING, field: "col_key" },
        col_name: { type: Sequelize.STRING, field: "col_name" },
        col_type: { type: Sequelize.STRING, field: "col_type" },
        col_nullable: { type: Sequelize.STRING, field: "col_nullable" },
        col_length: { type: Sequelize.STRING, field: "col_length" },
        col_default: { type: Sequelize.STRING, field: "col_default" },
        col_count: { type: Sequelize.TEXT, field: "col_count" },
        col_desc: { type: Sequelize.STRING, field: "col_desc" },
        col_reference: { type: Sequelize.STRING, field: "col_reference" },
        col_infos: { type: Sequelize.STRING, field: "col_infos" },
        col_model: { type: Sequelize.STRING, field: "col_model" },
        col_comment: { type: Sequelize.TEXT, field: "col_comment" },
        col_mapped: { type: Sequelize.TEXT, field: "col_mapped" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        TableId: {
          type: Sequelize.INTEGER,
          field: "TableId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Tables", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Columns", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Tables", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
