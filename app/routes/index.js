import Route from '@ember/routing/route';

export default Route.extend({

	model(){
		return this.store.findAll('user');
		// store is global storage of all data in application
	}
});
