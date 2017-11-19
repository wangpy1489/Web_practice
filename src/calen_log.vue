<<template>
  <div id="Log">
    <div>
      <h1 class="log-title"> {{msg}}</h1>
    </div>
    <div class="logs">  
        <form class="bar">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Event" v-model="event">
            <input type="text" class="form-control" placeholder="Time (in 24h format)" v-model="time">
            <btn type="primary" @click="add_one">Add</btn>
            <btn type="primary" @click= "sub_one" >Sub</btn>
          </div>
          
        </form>
        <ul class="events">
          <li v-for="item in plans" class="event">
            {{item.text}}-{{item.time}}
          </li>
        </ul>
  
      
    </div>   
    </div>
</template>
<<script>
import * as uiv from 'uiv'
 var m_data={
      msg:"My Plans",
      plans:[],
      showNavbar:true,
      event:"",
      time:"",
    };
export default {
   
    data () {
      return m_data
  },

   components:{uiv},

   created:function () {
     for (let i = 0; i <2; i++) {

        this.plans.push({text:"去图书馆 ",time:"13:00"});
     }
 
   },

   methods: {
      add_one : function(){
        if (this.event!="" && this.time != "")
        {
           this.plans.push({text:this.event,time:this.time});
        }
       
     },
     sub_one: function(){
        this.plans.splice(0, 1);
     }
   }

  
}
</script>
<<style>
#Log {
  margin-top: 3%;
  height:400px;
}

.log-title {
   font-family: Tahoma, Geneva, sans-serif;
  font-weight: bold;
  font-size:4rem;
}
.bar{
   width: 50%;
   margin:0 auto ;
}

.logs{
    width:65%;
    margin: 0 auto;
    background:#CCFFFF;
    box-shadow: 0 13px 3px 0 rgba(0,0,0,0.14), 0 3px 13px -2px rgba(0,0,0,0.1), 0 3px 15px 0 rgba(0,0,0,0.12);
    opacity: 0.8;
}
.form-group{
  display:list-item;
  
}

.add{
  display:inline;
}
.time-c{
  width: 50%;
   margin:0 auto;
}
.event{
  font-family: 'Comic Sans MS', cursive;
  font-weight:bold;
  font-size:2rem;
  display:list-item;
}
</style>
