var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: ''
    },
    watch: {

    },
    created: function() {
      this.keyword = 'JavaScript'
      this.getAnswer()
    },
    methods: {
        getAnswer: function() {
          if(this.keyword === '') {
              this.items = null
              return
          }

          this.message = 'Loading...'
          var vm = this
          var params = { page: 1, per_page: 20, query: this.keyword }
          axios.get('https://qitta.com/api/v2/items', { params })
          .then(function(response){
              console.log(response)
          })
          .catch(function(error) {
              vm.message = 'Error!' + error
          })
          .finally(function() {
              vm.message = ''
          })
        }
    }
})