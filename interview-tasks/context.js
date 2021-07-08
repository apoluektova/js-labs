const main = () => {
    const obj = {
        t: 1,
        fn1: () => this.t,
        fn2: function() {
            return this.t;
        }
    };

    console.log('fn1', obj.fn1());
    console.log('fn2', obj.fn2());
};

const main2 = () => {
    const obj = {
        t: 1,
        fn1: () => this.t,
        fn2: function() {
            return this.t;
        }
    };

    const func = (name, callback) => {
        console.log(name, callback());
    };

    setTimeout(obj.fn2, 0);
    window.addEventListener('click', obj.fn2);

    func('fn1', obj.fn1);
    func('fn2', obj.fn2);
};

const main3 = () => {
    const obj = {
        t: 1,
        fn1: () => this.t,
        fn2: function() {
            return this.t;
        }
    };

    const func = (name, callback) => {
        console.log(name, callback());
    };

    func('fn1', obj.fn1);
    func('fn2', obj.fn2.bind(obj));
    func('fn2', obj.fn2.bind(func));
};

const main4 = () => {
    const obj2 = {
        t: 2
    };
    const obj = {
        t: 1,
        fn1: (a, b, c) => this.t,
        fn2: function() {
            return this.t;
        }
    };

    const func = (name, callback) => {
        console.log(name, callback());
    };

    // Так делать не надо
    console.log('fn2', obj.fn2.call(obj2));
    console.log('fn2', obj.fn2.apply(obj2));
};

const main5 = () => {
    const str = 'hello';
    const array = [];

    console.log('fn2', array.filter.call(str, (item) => item !== 'h'));
};

const main6 = () => {
    var f = function() {
        this.x = 5;
        (function() {
            this.x = 3;
        })();
        console.log(this.x);
    };

    var obj = {
        x: 4,
        m: function() {
            console.log(this.x);
        }
    };

    f();
    obj.m();
    f.call(f);
    obj.m.call(f);
    // new f();
    // new obj.m();
};

console.log('main');
main();

console.log('main2');
main2();

console.log('main3');
main3();

console.log('main4');
main4();

console.log('main5');
main5();

console.log('main6');
main6();
