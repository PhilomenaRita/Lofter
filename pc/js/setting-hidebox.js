new Vue({
    el:"#nav-title",
    data:{
        box:"隐藏",
        isShow:false
    },
    methods:{
        showToggle:function(){
            this.isShow = !this.isShow;
            if(this.isShow){
                this.btnText = "隐藏"
            }else{
                this.btnText = "显示"
            }
        }
    }
});
