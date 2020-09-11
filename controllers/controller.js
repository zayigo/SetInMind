var dataList = [{ item: 'get milk' }, { item: 'walk dog' }];
// user wjailZ4uKd8SDx8v
module.exports = (app) => {
  app.get('/', async (req, res) => {
    //console.log(dataList);
    res.render('todo', { dataList });
  });

  app.post('/', async (req, res) => {
    console.log(req.body);
    dataList.push(req.body);
    res.json({ dataList });
  });

  app.delete('/:item', async (req, res) => {
    console.log(req.params.item);
    dataList = dataList.filter((element) => {
      return element.item.replace(/ /g, '-') !== req.params.item;
    });
    console.log(dataList);
    res.json(dataList);
  });
};
