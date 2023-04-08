const models = require("../models");
const log = require('../utils/winston');
const { Op } = require('sequelize');

require('dotenv').config();

exports.getAllTab = (req, res) => {
  try {
    models.Table.findAll({
      limit: 5
    })
      .then((Tabs) => res.status(200).json(Tabs))
      .catch(() => res.status(500).json({ 'error': "error getting tabs" }));

    res.status(201)
  }
  catch (error) {
    log.error(`ERROR Get All Tabs =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.getFromSearch = (req, res) => {
  try {
    const searchObject = req.body.search;
    console.log(searchObject);
    models.Table.findAll({
      where: {
        [Op.or]: [
          {
            tab_desc: {
              [Op.like]: `%${searchObject.text}%`
            }
          },
          {
            tab_name: {
              [Op.like]: `%${searchObject.text}%`
            }
          }, // Condition de recherche sur le champ "postId"
        ]

      }
    })
      .then((Tabs) => {
        console.log(Tabs);
        res.status(200).json(Tabs)
      }
      )
      .catch(() => res.status(500).json({ 'error': "error getting tabs" }));
  }
  catch (error) {
    log.error(`ERROR Get All Tabs =  ${error}`);
    return res.status(500).json({ error })
  }
};

exports.updateTab = (req, res) => {
  try {
    console.log("eee" + req.body.tab)

    const tabObject = req.body.tab;
    console.log(tabObject)
    //#VOIR
    models.Table.update({ tab_comment: tabObject.tab_comment }, {
      where: {
        id: req.params.id
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

