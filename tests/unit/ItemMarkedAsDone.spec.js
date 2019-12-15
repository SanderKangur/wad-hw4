import { mount, Vue } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from "../../src/models/Item";

describe('DoneItem', () => {
    let list = [];

    let testItem = new Item("TASK");
    list.push(testItem);

    const wrapper = mount(List, {
        propsData: {
            list: list
        }
    });

    it('Test to test when an item in the list is marked as done item is updated correctly', () => {

        expect(list[0].done).toEqual(false);
    	wrapper.find("span").trigger("click");
        expect(list[0].done).toEqual(true);
        
    })
});