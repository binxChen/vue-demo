const S = 'todo'
export default {
    data:{
        return: {
            data:function () {
                return {
                    title:'this is a todo list',
                    items:[
                        {
                            label:'coding',
                            isFinished:true
                        },{
                            label:'walking',
                            isFinished:false
                        }
                    ],
                    newItem:''
                }
            },
            methods:{
                toggleFinished: function (item) {
                    item.isFinished = !item.isFinished;
                },
                addNew:function () {
                    this.items.push({
                        label:this.newItem,
                        isFinished:false
                    })
                    this.newItem = ''
                }
            }
        }
    }
}
