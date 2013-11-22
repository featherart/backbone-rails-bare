App starting... app.js?body=1:7
App.Collections.Things
function Things() {
      _ref = Things.__super__.constructor.apply(this, arguments);
      return _ref;
    } things.js?body=1:9
things = new App.Collections.Things()
Things {length: 0, models: Array[0], _byId: Object, constructor: function, url: "/things"…}
things.fetch()
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
things
Things {length: 3, models: Array[3], _byId: Object, constructor: function, url: "/things"…}
things.map(function(thing) { return thing.get("content") });
["First Thing", "Second Thing", "Checked Thing"]
things = new App.Collections.Things()
Things {length: 0, models: Array[0], _byId: Object, constructor: function, url: "/things"…}
things.map(function(thing) { return thing.get("content") });
[]
things.fetch()
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
things.map(function(thing) { return thing.get("content") });
["First Thing", "Second Thing", "Checked Thing"]
things.fetch().done(function() { console.log(things.map(function(thing) { return thing.get("content") })); });
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
["First Thing", "Second Thing", "Checked Thing"] VM551:2
thing.first
ReferenceError: thing is not defined
things.first
function () {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    } backbone.js?body=1:953
things.first()
Backbone.Model {cid: "c4", attributes: Object, collection: Things, _changing: false, _previousAttributes: Object…}
things.first().set('content', 'new content');
Backbone.Model {cid: "c4", attributes: Object, collection: Things, _changing: false, _previousAttributes: Object…}
Thing.find(1).content
ReferenceError: Thing is not defined
things.find(1).content
TypeError: Cannot read property 'content' of undefined
things.first().content
undefined
things.last()
Backbone.Model {cid: "c6", attributes: Object, collection: Things, _changing: false, _previousAttributes: Object…}
aThing = things.last()
Backbone.Model {cid: "c6", attributes: Object, collection: Things, _changing: false, _previousAttributes: Object…}
aThing.set('content', 'seriously checked thing');
Backbone.Model {cid: "c6", attributes: Object, collection: Things, _changing: false, _previousAttributes: Object…}
aThing.save();
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
aThing.find(3);
TypeError: Object [object Object] has no method 'find'
aThing.id
3
setInterval(function() { things.fetch(); }, 1000 });
SyntaxError: Unexpected token }
setInterval(function() { things.fetch(); }, 1000 );
1
aThing.destroy();
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
things.all
function () {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    } backbone.js?body=1:953
things.length
2
aThing = new Backbone.Model({ content: 'created thing', checked: true });
Backbone.Model {cid: "c7", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
things.length
2
things.push(aThing);
Backbone.Model {cid: "c7", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
things.length;
2
things.map(function(thing) { return thing.get("content"); });
["First Thing", "Second Thing"]
aThing.save();
Error: A "url" property or function must be specified
things.sync()
Error: A "url" property or function must be specified
things.push(aThing);
Backbone.Model {cid: "c7", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
aThing.save();
Error: A "url" property or function must be specified
aThing.urlRoot = '/things';
"/things"
aThing.save();
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
things.length
3
aThing.id
4
aThing = new Backbone.Model({ content: 'party like your hair is on fire!', checked: true });
Backbone.Model {cid: "c9", attributes: Object, _changing: false, _previousAttributes: Object, changed: Object…}
aThing.save();
Error: A "url" property or function must be specified
aThing.urlRoot = '/things';
"/things"
aThing.save();
Object {readyState: 1, getResponseHeader: function, getAllResponseHeaders: function, setRequestHeader: function, overrideMimeType: function…}
aThing.id
5
things.length
4
things.map(function(thing) { return thing.get("content"); });
["First Thing", "Second Thing", "created thing", "party like your hair is on fire!"]