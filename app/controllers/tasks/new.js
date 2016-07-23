import Ember from 'ember';

export default Ember.Controller.extend({
    actions :{
        addEmployee : function(){
            var email = this.get("email");
            var name = this.get("name");
            var description = this.get("descrip");
          
            
            var newTask = this.store.createRecord('task',{
                email:email,
                name:name,
                description:description
            });
            
            
            newTask.save();
            
            this.setProperties({
                name :'',
                email : '',
                descrip :''
            });
        }
    }
});
