import todoList from "../../common/todoList.js"
import router from '@system.router';
const BUTTON_STATE_IMAGE =  "/common/img.png";
export default {
    data: {
        // 待办事件列表
        todoList,
        inputTodo: "IDE无法调用输入"
    },
    computed:{
        needTodoNum(){
            let num = 0;
            this.todoList.forEach(item => {
                if(!item.status){
                    num++;
                }
            });
            return num;
        }
    },
    remove(index){
        console.log(index)
        this.todoList.splice(index,1)
    },
    addTodo() {
        this.todoList.push({
            info:this.inputTodo,
            status: false
        })
    },
    checkStatus(index){
        console.log(index);
        this.todoList[index].status = !this.todoList[index].status;
    },
    getNewTodo(e){
        this.inputTodo = e.value;
    },
//    goback(){
//        router.back();
//    }
}