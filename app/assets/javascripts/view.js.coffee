class App.View extends Backbone.View
  render: ->
    # Return ourself for chaining
    # _.tap gives you the object that's being called (this)
    # if you want to do chaining, you need to return self from 
    # the end of the method
    # fat arrow means it runs in a global context
    _.tap @, =>
      @$el.html @template @

