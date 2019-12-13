import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header";

describe('HeaderCorrect', () => {

    const wrapper = mount(Header);

    let monthnames = ["JAN","FEB","MAR","APR","MAY","JUNE","JUL","AUG","SEP","OCT","NOV","DEC"];
    let days = ["SUDNAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    it('Check if Header displays correct things', ()=> {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        let year = today.getFullYear();
        let month = today.getMonth();
        let weekday = today.getDay();
        expect(wrapper.html()).toContain(year);
        expect(wrapper.html()).toContain(date);
        expect(wrapper.html()).toContain(monthnames[month]);
        expect(wrapper.html()).toContain(days[weekday])
    })

});