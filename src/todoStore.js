import {observable} from 'mobx';

class ToDoStore {
    @observable list = ['click to remove', 'to do 2', 'to do 3', 'to do 4'];
    @observable text = '';
    


    addTodo(){
        this.list = [this.text, ...this.list];
       // this.text = '';
    }
}

const todoStore = new ToDoStore();
export default todoStore;

