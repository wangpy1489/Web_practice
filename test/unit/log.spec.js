/**
 * @file app.vue测试用例
 * @author MarxJiao
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import log from '../../src/calen_log.vue';

// 描述要测试的内容
describe('test log.vue', () => {
    
    // 描述要测试的最小单元
    it('初始化msg应为My Plans', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(log).$mount();
        // 断言组件的title是否变为了'Hello world'
        expect(vm.msg).toEqual('My Plans');
    });

    // 描述要测试的最小单元
    it('测试sub_one方法', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(log).$mount();

        // 执行setMessage方法
        vm.sub_one();

        // 断言组件的message是否变为了'你好世界'
        expect(vm.plans.length).toEqual(1);
    });


  

    // 异步数据更新
    it('数据更新后，视图应该改变', done => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let Cor = Vue.extend(log);
        let vm = new Cor().$mount();

        // 挂载后改变title
        vm.msg = 'Test';
        Vue.nextTick(() => {
            let title = vm.$el.getElementsByTagName('h1')[0]
            expect(title.textContent).toEqual('Test')
            done();
        })
    });
});