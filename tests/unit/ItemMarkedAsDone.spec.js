import { mount } from '@vue/test-utils'
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
	wrapper.find("span").trigger("click");

    it('Test to test when an item in the list is marked as done  item is updated correctly', () => {
        expect(list[0].done).toEqual(true);
        expect(wrapper.findAll(".list-item.done").length).toEqual(1);
        
    })
});