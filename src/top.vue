<<template>
  <div id="top" >
      <breadcrumb-item class="top-title"><img src="./assets/日历.png">vue-calendar</image></breadcrumb-item>
      <breadcrumb-item href="https://github.com/wxsms/uiv" class="top-items"><img src="./assets/github.png">Github</image></breadcrumb-item>
  </div>
</template>
<<script>
import { Breadcrumbs } from 'uiv'
export default {
    components:{Breadcrumbs}

}
</script>

<<style>
#top {
    margin-left:40%;
   display:flex;
}
.top-items{
    margin-left:20%;
    margin-top:10px;
    width: 30%;
    font-size:20px;
}
.top-title{
    color:black;
    /* color:#eef6fc; */
    font-size:35px;
    font-family: Impact, Charcoal, sans-serif;
}
</style>

