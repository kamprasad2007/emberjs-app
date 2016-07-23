import Ember from 'ember';

export default Ember.Controller.extend({
    actions :{
        addUser: function(){
            var email = this.get("email");
            var name = this.get("name");
            var description = this.get("descrip");
          
            
            var newUser = this.store.createRecord('user',{
                email:email,
                name:name,
                description:description
            });
            
            
            newUser.save();
            
            this.setProperties({
                name :'',
                email : '',
                descrip :''
            });
        }
    }
});
