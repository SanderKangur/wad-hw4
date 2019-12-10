import { mount } from '@vue/test-utils'
import List from "../../src/components/List";


describe('NoListItem', () => {

    let list = [];

    const wrapper = mount(List, {
        propsData: {
            list: list
        }
    });



    it('Check if empty list displays Add your first Todo task', () => {
        expect(wrapper.find('h3').text()).toEqual('Add your first Todo task');
    })
});