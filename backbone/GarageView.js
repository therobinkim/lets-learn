var GarageView = Backbone.View.extend({
  events: {
    click: function() {
      console.log('garageView was clicked', this);
    }
  },
  initialize: function() {
    this.render();
    // better to use `listenTo` than `on` for event listeners
    // read more here: http://backbonejs.org/#Events-listenTo
    this.listenTo(this.collection, 'change', this.render);
  },
  render: function() {
    var domElement = this.$el.html('');
    var _this = this;
    // get data from each model (which exists inside the collection)
    this.collection.each(function(model) {
      // with that data, we create some html
      var carView = new CarView({ model: model }).render();
      // we add that HTML to the body
      domElement.append(carView);
    });
    $('body').append(this.$el);
  },
  tagName: 'table'
});
