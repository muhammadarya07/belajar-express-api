import express from 'express'
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Ini router users')
});

/* POST users */

router.post('/create', (req, res) => {

  const data = req.body

  res.json(data)

})

export default router