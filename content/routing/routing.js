$(document).ready(function () {
  view.load();

  if (window.location.hash.indexOf("/") != -1) {
    view.components.handler.sleep(500);
  }

  route.load({
    el: "#container",
    elModal: '#plugdo-modal-content',
    notFoundMessage: `<div class="row">
    <div class="col col-12 content text-center">
        <i class="fas fa-exclamation-circle not-found-icon"></i>
        <p>La página no fue encontrada!</p>
    </div>
  </div>`,
    defaultPage: {
      name: "user",
      page: "/secure/shoperiz.html",
      postLoad: function () {
        view.load();
      }
    }
  });


  
  routing.register(
    {
      name: "sales",
      page: "/secure/sales.html",
      classInParent: true,
      postLoad: function () {
        $(document).ready(function () {
          sales.init();
        })
      }
    });
    

  routing.register({
      name: "shoping-cart",
      page: "/secure/shoping.html",
      classInParent: true,
      postLoad: function () {
        $(document).ready(function () {
          shoping.init();
        })
      }
    });

  routing.register({
    name: "sales/item",
    page: "sales/item",
    postLoad: app.modalPostLoad

  });

  routing.register({
    name: "sales/close",
    page: "sales/close",
    postLoad: app.modalPostLoad
  });

 routing.register({
    name: "shoping-cart/shopingUpdate",
    page: "shoping-cart/shopingUpdate",
    postLoad: app.modalPostLoad
  });

  routing.modal();

});




var app = new ShoperizApplication();
var sales = new SalesItemHandler();
var shoping = new shopingHandler();