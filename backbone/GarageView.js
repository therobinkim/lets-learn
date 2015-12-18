var GarageView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    var domElement = this.$el.html('');
    var _this = this;
    // get data from each model (which exists inside the collection)
    this.collection.each(function(model) {
      // with that data, we create some html
      // we add that HTML to the body
      domElement.append(_this.template(model.attributes));
    });
    $('body').append(this.$el);
  },
  tagName: 'table',
  template: _.template('<tr><td>Make: <%= make %></td></tr>')
});
