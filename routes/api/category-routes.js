const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });

    if(categoryData.id == req.params.id) {
      res.status(200).json(categoryData);
    }

    res.status(400).json({message: "No category with that id"});

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  /* req.body should look like this:
        {category_name: "Sports"}
   */

  try{
    console.log(req.body);
  
    Category.create(req.body).then(function(category){
      res.status(200).json(category)
    });
    
    res.status(400).json({message: "Could not create that category with that json input"});

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  /* req.body should look like this:
        {category_name: "Sports Equipment"}
   */

  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    
    if(categoryData.id == req.params.id) {
    
      Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      res.status(200).json(categoryData);
    };
   
    res.status(400).json({message: "No category with that id"});

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    
    if(categoryData.id == req.params.id) {
    //need to also destroy the category id of products that may have this

      Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(categoryData);
    };
   
    res.status(400).json({message: "No category with that id"});

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
