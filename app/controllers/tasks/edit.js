import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        
        editEmployee: function($id){
            
            var self = this;
            
            var email = this.get("model.email");
            var name = this.get("model.name");
            var description = this.get("model.descrip");
            
            self.store.findRecord('task',$id).then(function(task){
                    task.set('name', name);
                    task.set('email', email);
                    task.set('description', description);
            
                    task.save();
                });
        
            self.transitionToRoute('tasks');
        }
    }
});
