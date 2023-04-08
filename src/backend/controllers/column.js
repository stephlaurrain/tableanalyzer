const models = require("../models");
const log = require('../utils/winston');
require('dotenv').config();

exports.getAllCol = (req, res) => {
  try {
    models.Column.findAll()
      .then((Cols) => res.status(200).json(Cols))
      .catch(() => res.status(500).json({ 'error': "error getting cols" }));
  }
  catch (error) {
    log.error(`ERROR Get All Cols =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.getColsOfTab = (req, res) => {
  try {
    models.Column.findAll({ where: { TableId: req.params.id }})
      .then((Cols) => res.status(200).json(Cols))
      .catch(() => res.status(500).json({ 'error': "error getting cols" }));
  }
  catch (error) {
    log.error(`ERROR Get All Cols =  ${error}`);
    return res.status(500).json({ error })
  }
};


exports.updateColold = (req, res, next) => {
  try {
    const colObject = req.body.col;
    //#VOIR
    // Change everyone without a last name to "Doe"
    models.Column.update({ col_comment: colObject.col_comment, col_mapped: colObject.col_mapped }, {
      where: {
        col_id: colObject.col_id
      }
    }).then((Cols) => res.status(200).json(Cols))
      .catch(() => res.status(500).json({ 'error': "error updating col" }));
    // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
  }
  catch (error) {
    log.error(`ERROR create table columns =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.updateCol = (req, res) => {
  try {
   const colObject = req.body.col;
   models.Column.update({ col_comment: colObject.col_comment, col_mapped: colObject.col_mapped }, {
     where: {
       id: req.params.id
     }
   }).then((Cols) => res.status(200).json(Cols))
     .catch(() => res.status(500).json({ 'error': "error updating col" }));
   // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
 }
 catch (error) {
   log.error(`ERROR create colle colles =  ${error}`);
   return res.status(500).json({ error })
 }
};


exports.createCol = (req, res, next) => {
  try {
    const colObject = req.body.col;
    // peut faire T Cl = await models.Col.findOne
    const newcl = new models.Col({
      ...colObject
    });
    newcl.save()
      .then(() => res.status(201).json({ message: 'Col' }))
      .catch((error) => res.status(500).json({ error }));
  }
  catch (error) {
    log.error(`ERROR create column =  ${error}`);
    return res.status(500).json({ error })
  }

};


