# 实现目标

实现一个高阶组件的封装，接受一个类型为Component的参数，返回值的类型也是一个Component。他的功能是对于传进来组件如果挂载（mounted生命周期被调用）时，
向控制台输出一个`I have already mounted`。


# 高阶组件要透传的三个重要因素

 * `props` 属性
 
 * `event` 事件
 
 * `slots` 插槽
