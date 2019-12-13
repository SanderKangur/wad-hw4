import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe('FooterCorrect', () => {

    const wrapper = mount(Footer)

    wrapper.find('span').trigger('click')

    it('Check if clicking the "+" button, makes the "open" property true', ()=> {
        expect(wrapper.html()).toContain("placeholder")
    })
});