import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.route('edit',{path:'/edit/:user_id'});
  });
});

export default Router;
