mvc.controller({
  name: "home",
  action: "index",
  path:"/"
}, function (req) {
  return {
      title: "Shoping Cart",
      location: global.config.location
  };
})

mvc.controller({
  name: "shoping-cart",
  action: "shoping",
  path:"/shoping"
}, function (req) {
  return {
      title: "shoping-cart",
      location: global.config.location
  };
})