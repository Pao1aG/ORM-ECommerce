const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try{
    const tagData = await Tag.findAll({
      include:[{model: Product}]
    });

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include:[{model: Product}]
    });

    if(tagData.id == req.params.id) {
      res.status(200).json(tagData);
    } else {
      res.status(400).json({message: "No tag with that id"});
    };

  } catch (err) {
    res.status(500).json(err);
  };

});

router.post('/', async (req, res) => {
  // create a new tag
  /* req.body should look like this:
      {"tag_name": "orange" */

  try{
    const tagData = await Tag.create(req.body);

    if(req.body.tag_name == null) {
      res.status(400).json({message: "Could not create a tag with that json input"});
    } else {
      res.status(200).json(tagData);
    };
  } catch (err) {
    res.statust(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  /* req.body should look like this:
      {"tag_name": "expensive" */
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include:[{model: Product}]
    });

    if(tagData.id == req.params.id) {
      Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    };

    if(!tagData) {
      res.status(400).json({message: "No tag with that id"});
    } else {
      res.status(200).json(tagData);
    };

  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include:[{model: Product}],
    });

    if(tagData.id == req.params.id) {

      Tag.destroy({
        where:{
          id:req.params.id,
        },
      });

    } 

    if(!tagData) {
      res.status(400).json({message: "No tag with that id"});
    } else {
      res.status(200).json(tagData);
    };

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
