# lets-learn-backbone
a super barebones backbone app

---

This app assumes you understand the basic ideas behind a Backbone model, collection, and view.

Put simply:
* a model is a thing that holds data
* a collection is a thing that holds models (as if the collection was a basket of models)
* a view is a thing that puts pretty visuals on the browser

This commit history shows a general progression of the app that
* starts with two instances of a Backbone model, a collection, and a view that displays the data (from each model in the collection) to the browser
* which is refactored to use templates and a separate view for each model
