<template>
    <div>
    <div class="circle">
      <div class="outCircle">
      <div 
      class="inCircle"
      >{{Math.round((indexQuestion)/data.length*100)}} %</div>
      </div>
    </div>

    </div>
</template>

<script>
import Data from './../assets/data/data.js';

export default {
  props:['id'],
  data() {
    return {
      data: Data,
    }
  },

  computed:{
    indexQuestion(){
      const index = this.data.findIndex(dataQuestion => dataQuestion.id === this.id)
      if (this.id == 108){
          return this.data.length
      }else{
        return index
      }
    },
  },


}
</script>
