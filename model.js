var app = new Vue({
  el: '#pr',
  data: {
    message: '',
	personas: [
    ]
  },
  methods: {
    addList: function () {
      this.personas.push({ text:this.message });
    },
	comp:function(){
		this.isActive=!this.Active;
	}
  }
});
