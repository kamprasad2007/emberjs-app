import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        editUser: function($id){
            
            var self = this;
            
            var email = this.get("model.email");
            var name = this.get("model.name");
            var description = this.get("model.description");
            
            self.store.findRecord('user',$id).then(function(user){
                    user.set('name', name);
                    user.set('email', email);
                    user.set('description', description);
            
                    user.save();
                });
        
            self.transitionToRoute('users');
        }
    }
});
