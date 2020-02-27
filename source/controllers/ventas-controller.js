mvc.controller({
  name: "sales",
  action: "item",
  view: "sales/item.ejs"
}, function (req) {

  var list = {},
    rc = req.headers.cookie;

  rc && rc.split(';').forEach(function (cookie) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  var elem = JSON.parse(list.salesItem)
  var sales = JSON.parse(list.salesDetails)
  var salesID = sales.salesID
  var final = {
    code: "P-001",
    date: "Enero 27,2020",
    short: "Test",
    long: "Test",
    brand: "TES",
    method: "TES",
    last4dig: "TES",
    transactionID: "TES",
    name: "TES",
    email: "TES",
    phone: "TES"
  }
  elem.forEach(function (s, v) {
    if (s.salesID == salesID) {
      final.code = s.code
      final.date = s.month + " " + s.day + ", " + new Date().getFullYear()
      final.short = s.short
      final.long = s.more
      final.brand = s.brand
      final.method = s.metodo
      final.last4dig = s.lastNum
      final.transactionID = s.transactionID
      final.name = s.name
      final.email = s.email
      final.phone = s.phone
    }
  });

  //console.log(final)
  return final;
});

mvc.controller({
  name: "sales",
  action: "close",
  view: "sales/close.ejs"
}, 'UpdateSales', async function methodUp(req, UpdateSales, send) {
  var list = {},
    rc = req.headers.cookie;

  rc && rc.split(';').forEach(function (cookie) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  var sales = JSON.parse(list.salesDetails)
  var sales = {
    salesID: sales.salesID
  }

  var result = await UpdateSales.update(sales)
  var finalResult = {
    isUpdate: result.isUpdate.toString()
  }

  //console.log(finalResult)
  return { finalResult };
})


mvc.controller({
  name: "shoping-cart",
  action: "shopingUpdate",
  view: "shoping-cart/shopingUpdate.ejs"
}, function (req) {
  var list = {},
      rc = req.headers.cookie;

  rc && rc.split(';').forEach(function (cookie) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  console.log(list)
  var tmpCart = {}
  var final = {}
  return { final };
});



