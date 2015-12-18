var CarView = Backbone.View.extend({
  render: function() {
    // not wrapping the HTML with `this.$el.html()` will break the app; try it!
    return this.$el.html(this.template(this.model.attributes));
  },
  tagName: 'tr',
  template: _.template('<td>Make: <%= make %></td>')
});
