import { mount, Vue } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from "../../src/models/Item";

describe('NoListItem', () => {
    let list = [];

    let testItem = new Item("TASK");
    list.push(testItem);

    const wrapper = mount(List, {
        propsData: {
            list: list
        }
    });

    it('Test to test when an item in the list is marked as done item is updated correctly', async () => {

    	wrapper.find("span").trigger("click");
  		await Vue.nextTick() //This should update but doesnt
        expect(list[0].done).toEqual(true);
        console.log(wrapper.html())
        expect(wrapper.findAll(".list-item.done").length).toEqual(1);
        
    })
});