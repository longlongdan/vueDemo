export default {
		addPerson (state,info) {
			state.data.push(info)
		},
		changePerson(state,obj) {
			state.data[obj.num].using = obj.using
		},
		delPerson (state,index) {
			state.data.splice(index,1)
		}
  	
}