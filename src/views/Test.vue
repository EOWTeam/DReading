<template>

</template>


<script>
//import {transfer} from '@/api/index'

import axios from 'axios'

export default {
  created() {
    axios.get("/ipcontract/create").then(function(response) {
      console.log(response.data);
    });
  }
};
</script>
