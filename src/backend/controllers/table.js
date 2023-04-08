const models = require("../models");
const log = require('../utils/winston');
require('dotenv').config();

exports.getAllTab = (req, res) => {
  try {
    models.Table.findAll()
      .then((Tabs) => res.status(200).json(Tabs))
      .catch(() => res.status(500).json({ 'error': "error getting tabs" }));

    res.status(201)
  }
  catch (error) {
    log.error(`ERROR Get All Tabs =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.updateTab = (req, res, next) => {
  try {
    const tabObject = req.body.tab;
    //#VOIR
    // Change everyone without a last name to "Doe"
    models.Table.update({ tab_comment: clObject.tab_comment }, {
      where: {
        tab_id: tabObject.tab_id
      }
    }).then((Tabs) => res.status(200).json(Tabs))
      .catch(() => res.status(500).json({ 'error': "error updating tab" }));
    // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
  }
  catch (error) {
    log.error(`ERROR create table tables =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.createTab = (req, res, next) => {
  try {
    const tabObject = req.body.tab;
    const newcl = new models.Tab({
      ...tabObject
    });
    newcl.save()
      .then(() => res.status(201).json({ message: 'Tab' }))
      .catch((error) => res.status(500).json({ error }));
  }
  catch (error) {
    log.error(`ERROR create table tables =  ${error}`);
    return res.status(500).json({ error })
  }

};

