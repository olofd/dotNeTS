/// <reference path="lodash.d.ts" />

var foodsOrganic = [
    { name: 'banana', organic: true },
    { name: 'beet', organic: false }
];
var foodsType = [
    { name: 'apple', type: 'fruit' },
    { name: 'banana', type: 'fruit' },
    { name: 'beet', type: 'vegetable' }
];
var foodsCombined = [
    { 'name': 'apple', 'organic': false, 'type': 'fruit' },
    { 'name': 'carrot', 'organic': true, 'type': 'vegetable' }
];

var stoogesQuotes = [
    { 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var stoogesAges = [
    { 'name': 'moe', 'age': 40 },
    { 'name': 'larry', 'age': 50 }
];

var stoogesCombined = [
    { 'name': 'curly', 'age': 30, 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
    { 'name': 'moe', 'age': 40, 'quotes': ['Spread out!', 'You knucklehead!'] }
];

var keys = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.bark = function () {
        console.log('Woof, woof!');
    };
    return Dog;
})();

var result;

/*************
* Chaining *
*************/
result = _('test');
result = _(1);
result = _(true);
result = _(['test1', 'test2']);
result = _({ 'key1': 'test1', 'key2': 'test2' });

result = _.chain('test');
result = _('test').chain();
result = _.chain(1);
result = _(1).chain();
result = _.chain(true);
result = _(true).chain();
result = _.chain(['test1', 'test2']);
result = _(['test1', 'test2']).chain();
result = _.chain({ 'key1': 'test1', 'key2': 'test2' });
result = _({ 'key1': 'test1', 'key2': 'test2' }).chain();

//Wrapped array shortcut methods
result = _([1, 2, 3, 4]).concat(5, 6);
result = _([1, 2, 3, 4]).join(',');
result = _([1, 2, 3, 4]).pop();
_([1, 2, 3, 4]).push(5, 6, 7);
result = _([1, 2, 3, 4]).reverse();
result = _([1, 2, 3, 4]).shift();
result = _([1, 2, 3, 4]).slice(1, 2);
result = _([1, 2, 3, 4]).slice(2);
result = _([1, 2, 3, 4]).sort(function (a, b) {
    return 1;
});
result = _([1, 2, 3, 4]).splice(1);
result = _([1, 2, 3, 4]).splice(1, 2, 5, 6);
result = _([1, 2, 3, 4]).unshift(5, 6);

result = _.tap([1, 2, 3, 4], function (array) {
    console.log(array);
});
result = _('test').tap(function (value) {
    console.log(value);
});
result = _([1, 2, 3, 4]).tap(function (array) {
    console.log(array);
});
result = _({ 'key1': 'test1', 'key2': 'test2' }).tap(function (array) {
    console.log(array);
});

result = _('test').toString();
result = _([1, 2, 3]).toString();
result = _({ 'key1': 'test1', 'key2': 'test2' }).toString();

result = _('test').valueOf();
result = _([1, 2, 3]).valueOf();
result = _({ 'key1': 'test1', 'key2': 'test2' }).valueOf();

result = _('test').value();
result = _([1, 2, 3]).value();
result = _({ 'key1': 'test1', 'key2': 'test2' }).value();

// /*************
//  * Arrays *
//  *************/
result = _.compact([0, 1, false, 2, '', 3]);
result = _([0, 1, false, 2, '', 3]).compact();

result = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
result = _([1, 2, 3, 4, 5]).difference([5, 2, 10]);

result = _.rest([1, 2, 3]);
result = _.rest([1, 2, 3], 2);
result = _.rest([1, 2, 3], function (num) {
    return num < 3;
});
result = _.rest(foodsOrganic, 'test');
result = _.rest(foodsType, { 'type': 'value' });

result = _.drop([1, 2, 3]);
result = _.drop([1, 2, 3], 2);
result = _.drop([1, 2, 3], function (num) {
    return num < 3;
});
result = _.drop(foodsOrganic, 'test');
result = _.drop(foodsType, { 'type': 'value' });

result = _.tail([1, 2, 3]);
result = _.tail([1, 2, 3], 2);
result = _.tail([1, 2, 3], function (num) {
    return num < 3;
});
result = _.tail(foodsOrganic, 'test');
result = _.tail(foodsType, { 'type': 'value' });

result = _.findIndex(['apple', 'banana', 'beet'], function (f) {
    return /^b/.test(f);
});
result = _.findIndex(['apple', 'banana', 'beet'], 'apple');
result = _.findIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple' });

result = _.findLastIndex(['apple', 'banana', 'beet'], function (f) {
    return /^b/.test(f);
});
result = _.findLastIndex(['apple', 'banana', 'beet'], 'apple');
result = _.findLastIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple' });

result = _.first([1, 2, 3]);
result = _.first([1, 2, 3], 2);
result = _.first([1, 2, 3], function (num) {
    return num < 3;
});
result = _.first(foodsOrganic, 'organic');
result = _.first(foodsType, { 'type': 'fruit' });

result = _.head([1, 2, 3]);
result = _.head([1, 2, 3], 2);
result = _.head([1, 2, 3], function (num) {
    return num < 3;
});
result = _.head(foodsOrganic, 'organic');
result = _.head(foodsType, { 'type': 'fruit' });

result = _.take([1, 2, 3]);
result = _.take([1, 2, 3], 2);
result = _.take([1, 2, 3], function (num) {
    return num < 3;
});
result = _.take(foodsOrganic, 'organic');
result = _.take(foodsType, { 'type': 'fruit' });

result = _.flatten([1, [2], [3, [[4]]]]);
result = _.flatten([1, [2], [3, [[4]]]], true);
var result;
result = _.flatten(stoogesQuotes, 'quotes');

result = _([1, [2], [3, [[4]]]]).flatten();
result = _([1, [2], [3, [[4]]]]).flatten(true);
result = _(stoogesQuotes).flatten('quotes');

result = _.indexOf([1, 2, 3, 1, 2, 3], 2);
result = _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
result = _.indexOf([1, 1, 2, 2, 3, 3], 2, true);

result = _.initial([1, 2, 3]);
result = _.initial([1, 2, 3], 2);
result = _.initial([1, 2, 3], function (num) {
    return num > 1;
});
result = _.initial(foodsOrganic, 'organic');
result = _.initial(foodsType, { 'type': 'vegetable' });

result = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = _.last([1, 2, 3]);
result = _.last([1, 2, 3], 2);
result = _.last([1, 2, 3], function (num) {
    return num > 1;
});
result = _.last(foodsOrganic, 'organic');
result = _.last(foodsType, { 'type': 'vegetable' });

result = _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
result = _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);

result = _.zipObject(['moe', 'larry'], [30, 40]);
result = _.object(['moe', 'larry'], [30, 40]);

result = _.pull([1, 2, 3, 1, 2, 3], 2, 3);

result = _.range(10);
result = _.range(1, 11);
result = _.range(0, 30, 5);
result = _.range(0, -10, -1);
result = _.range(1, 4, 0);
result = _.range(0);

result = _.remove([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
});
result = _.remove(foodsOrganic, 'organic');
result = _.remove(foodsType, { 'type': 'vegetable' });

result = _.sortedIndex([20, 30, 50], 40);
result = _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
var sortedIndexDict = {
    'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
};
result = _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word) {
    return sortedIndexDict.wordToNumber[word];
});
result = _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function (word) {
    return this.wordToNumber[word];
}, sortedIndexDict);

result = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = _.uniq([1, 2, 1, 3, 1]);
result = _.uniq([1, 1, 2, 2, 3], true);
result = _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function (num) {
    return this.floor(num);
}, Math);
result = _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = _.unique([1, 2, 1, 3, 1]);
result = _.unique([1, 1, 2, 2, 3], true);
result = _.unique(['A', 'b', 'C', 'a', 'B', 'c'], function (letter) {
    return letter.toLowerCase();
});
result = _.unique([1, 2.5, 3, 1.5, 2, 3.5], function (num) {
    return this.floor(num);
}, Math);
result = _.unique([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);

result = _.zip(['moe', 'larry'], [30, 40], [true, false]);
result = _.unzip(['moe', 'larry'], [30, 40], [true, false]);

// /* *************
//  * Collections *
//  ************* */
result = _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
result = _.at(['moe', 'larry', 'curly'], 0, 2);

result = _.contains([1, 2, 3], 1);
result = _.contains([1, 2, 3], 1, 2);
result = _.contains({ 'name': 'moe', 'age': 40 }, 'moe');
result = _.contains('curly', 'ur');

result = _.include([1, 2, 3], 1);
result = _.include([1, 2, 3], 1, 2);
result = _.include({ 'name': 'moe', 'age': 40 }, 'moe');
result = _.include('curly', 'ur');

result = _.countBy([4.3, 6.1, 6.4], function (num) {
    return Math.floor(num);
});
result = _.countBy([4.3, 6.1, 6.4], function (num) {
    return this.floor(num);
}, Math);
result = _.countBy(['one', 'two', 'three'], 'length');

result = _([4.3, 6.1, 6.4]).countBy(function (num) {
    return Math.floor(num);
});
result = _([4.3, 6.1, 6.4]).countBy(function (num) {
    return this.floor(num);
}, Math);
result = _(['one', 'two', 'three']).countBy('length');

result = _.every([true, 1, null, 'yes'], Boolean);
result = _.every(stoogesAges, 'age');
result = _.every(stoogesAges, { 'age': 50 });

result = _.all([true, 1, null, 'yes'], Boolean);
result = _.all(stoogesAges, 'age');
result = _.all(stoogesAges, { 'age': 50 });

result = _.filter([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
});
result = _.filter(foodsCombined, 'organic');
result = _.filter(foodsCombined, { 'type': 'fruit' });

result = _([1, 2, 3, 4, 5, 6]).filter(function (num) {
    return num % 2 == 0;
}).value();
result = _(foodsCombined).filter('organic').value();
result = _(foodsCombined).filter({ 'type': 'fruit' }).value();

result = _.select([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
});
result = _.select(foodsCombined, 'organic');
result = _.select(foodsCombined, { 'type': 'fruit' });

result = _([1, 2, 3, 4, 5, 6]).select(function (num) {
    return num % 2 == 0;
}).value();
result = _(foodsCombined).select('organic').value();
result = _(foodsCombined).select({ 'type': 'fruit' }).value();

result = _.find([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = _.find(foodsCombined, { 'type': 'vegetable' });
result = _.find(foodsCombined, 'organic');

result = _.detect([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = _.detect(foodsCombined, { 'type': 'vegetable' });
result = _.detect(foodsCombined, 'organic');

result = _.findWhere([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = _.findWhere(foodsCombined, { 'type': 'vegetable' });
result = _.findWhere(foodsCombined, 'organic');

result = _.findLast([1, 2, 3, 4], function (num) {
    return num % 2 == 0;
});
result = _.findLast(foodsCombined, { 'type': 'vegetable' });
result = _.findLast(foodsCombined, 'organic');

result = _.forEach([1, 2, 3], function (num) {
    console.log(num);
});
result = _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    console.log(num);
});

result = _.each([1, 2, 3], function (num) {
    console.log(num);
});
result = _.each({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    console.log(num);
});

result = _([1, 2, 3]).forEach(function (num) {
    console.log(num);
});
result = _({ 'one': 1, 'two': 2, 'three': 3 }).forEach(function (num) {
    console.log(num);
});

result = _([1, 2, 3]).each(function (num) {
    console.log(num);
});
result = _({ 'one': 1, 'two': 2, 'three': 3 }).each(function (num) {
    console.log(num);
});

result = _.forEachRight([1, 2, 3], function (num) {
    console.log(num);
});
result = _.forEachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    console.log(num);
});

result = _.eachRight([1, 2, 3], function (num) {
    console.log(num);
});
result = _.eachRight({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    console.log(num);
});

result = _([1, 2, 3]).forEachRight(function (num) {
    console.log(num);
});
result = _({ 'one': 1, 'two': 2, 'three': 3 }).forEachRight(function (num) {
    console.log(num);
});

result = _([1, 2, 3]).eachRight(function (num) {
    console.log(num);
});
result = _({ 'one': 1, 'two': 2, 'three': 3 }).eachRight(function (num) {
    console.log(num);
});

result = _.groupBy([4.2, 6.1, 6.4], function (num) {
    return Math.floor(num);
});
result = _.groupBy([4.2, 6.1, 6.4], function (num) {
    return this.floor(num);
}, Math);
result = _.groupBy(['one', 'two', 'three'], 'length');

result = _([4.2, 6.1, 6.4]).groupBy(function (num) {
    return Math.floor(num);
});
result = _([4.2, 6.1, 6.4]).groupBy(function (num) {
    return this.floor(num);
}, Math);
result = _(['one', 'two', 'three']).groupBy('length');

result = _.indexBy(keys, 'dir');
result = _.indexBy(keys, function (key) {
    return String.fromCharCode(key.code);
});
result = _.indexBy(keys, function (key) {
    this.fromCharCode(key.code);
}, String);

result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
result = _.invoke([123, 456], String.prototype.split, '');

result = _.map([1, 2, 3], function (num) {
    return num * 3;
});
result = _.map({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    return num * 3;
});
result = _.map(stoogesAges, 'name');

result = _([1, 2, 3]).map(function (num) {
    return num * 3;
}).value();
result = _({ 'one': 1, 'two': 2, 'three': 3 }).map(function (num) {
    return num * 3;
}).value();
result = _(stoogesAges).map('name').value();

result = _.collect([1, 2, 3], function (num) {
    return num * 3;
});
result = _.collect({ 'one': 1, 'two': 2, 'three': 3 }, function (num) {
    return num * 3;
});
result = _.collect(stoogesAges, 'name');

result = _([1, 2, 3]).collect(function (num) {
    return num * 3;
}).value();
result = _({ 'one': 1, 'two': 2, 'three': 3 }).collect(function (num) {
    return num * 3;
}).value();
result = _(stoogesAges).collect('name').value();

result = _.max([4, 2, 8, 6]);
result = _.max(stoogesAges, function (stooge) {
    return stooge.age;
});
result = _.max(stoogesAges, 'age');

result = _.min([4, 2, 8, 6]);
result = _.min(stoogesAges, function (stooge) {
    return stooge.age;
});
result = _.min(stoogesAges, 'age');

result = _.pluck(stoogesAges, 'name');

result = _.reduce([1, 2, 3], function (sum, num) {
    return sum + num;
});

result = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function (r, num, key) {
    r[key] = num * 3;
    return r;
}, {});

result = _.foldl([1, 2, 3], function (sum, num) {
    return sum + num;
});
result = _.foldl({ 'a': 1, 'b': 2, 'c': 3 }, function (r, num, key) {
    r[key] = num * 3;
    return r;
}, {});

result = _.inject([1, 2, 3], function (sum, num) {
    return sum + num;
});
result = _.inject({ 'a': 1, 'b': 2, 'c': 3 }, function (r, num, key) {
    r[key] = num * 3;
    return r;
}, {});

result = _.reduceRight([[0, 1], [2, 3], [4, 5]], function (a, b) {
    return a.concat(b);
}, []);
result = _.foldr([[0, 1], [2, 3], [4, 5]], function (a, b) {
    return a.concat(b);
}, []);

result = _.reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
});
result = _.reject(foodsCombined, 'organic');
result = _.reject(foodsCombined, { 'type': 'fruit' });

result = _.sample([1, 2, 3, 4]);
result = _.sample([1, 2, 3, 4], 2);

result = _.shuffle([1, 2, 3, 4, 5, 6]);

result = _.size([1, 2]);
result = _.size({ 'one': 1, 'two': 2, 'three': 3 });
result = _.size('curly');

result = _.some([null, 0, 'yes', false], Boolean);
result = _.some(foodsCombined, 'organic');
result = _.some(foodsCombined, { 'type': 'meat' });

result = _.any([null, 0, 'yes', false], Boolean);
result = _.any(foodsCombined, 'organic');
result = _.any(foodsCombined, { 'type': 'meat' });

result = _.sortBy([1, 2, 3], function (num) {
    return Math.sin(num);
});
result = _.sortBy([1, 2, 3], function (num) {
    return this.sin(num);
}, Math);
result = _.sortBy(['banana', 'strawberry', 'apple'], 'length');

(function (a, b, c, d) {
    return _.toArray(arguments).slice(1);
})(1, 2, 3, 4);

result = _.where(stoogesCombined, { 'age': 40 });
result = _.where(stoogesCombined, { 'quotes': ['Poifect!'] });

/*************
* Functions *
*************/
var saves = ['profile', 'settings'];
var asyncSave = function (obj) {
    return obj.done();
};
var done;

done = _.after(saves.length, function () {
    console.log('Done saving!');
});

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

done = _(saves.length).after(function () {
    console.log('Done saving!');
}).value();

_.forEach(saves, function (type) {
    asyncSave({ 'type': type, 'complete': done });
});

var funcBind = function (greeting) {
    return greeting + ' ' + this.name;
};
var funcBind2 = _.bind(funcBind, { 'name': 'moe' }, 'hi');
funcBind2();

var funcBind3 = _(funcBind).bind({ 'name': 'moe' }, 'hi').value();
funcBind3();

var view = {
    'label': 'docs',
    'onClick': function () {
        console.log('clicked ' + this.label);
    }
};

view = _.bindAll(view);
jQuery('#docs').on('click', view.onClick);

view = _(view).bindAll().value();
jQuery('#docs').on('click', view.onClick);

var objectBindKey = {
    'name': 'moe',
    'greet': function (greeting) {
        return greeting + ' ' + this.name;
    }
};

var funcBindKey = _.bindKey(objectBindKey, 'greet', 'hi');
funcBindKey();

objectBindKey.greet = function (greeting) {
    return greeting + ', ' + this.name + '!';
};

funcBindKey();

funcBindKey = _(objectBindKey).bindKey('greet', 'hi').value();
funcBindKey();

var realNameMap = {
    'curly': 'jerome'
};

var format = function (name) {
    name = realNameMap[name.toLowerCase()] || name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

var greet = function (formatted) {
    return 'Hiya ' + formatted + '!';
};

result = _.compose(greet, format);
result = _(greet).compose(format);

var createCallbackObj = { name: 'Joe' };
result = _.createCallback('name');
result = _.createCallback(createCallbackObj);
result = _('name').createCallback();
result = _(createCallbackObj).createCallback();

result = _.curry(function (a, b, c) {
    console.log(a + b + c);
});

result = _(function (a, b, c) {
    console.log(a + b + c);
}).curry();

result = _.debounce(function () {
}, 150);

jQuery('#postbox').on('click', _.debounce(function () {
}, 300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', _.debounce(function () {
}, 250, {
    'maxWait': 1000
}), false);

result = _(function () {
}).debounce(150);

jQuery('#postbox').on('click', _(function () {
}).debounce(300, {
    'leading': true,
    'trailing': false
}));

source.addEventListener('message', _(function () {
}).debounce(250, {
    'maxWait': 1000
}), false);

var returnedDebounce = _.throttle(function (a) {
    return a * 5;
}, 5);
returnedThrottled(4);

result = _.defer(function () {
    console.log('deferred');
});
result = _(function () {
    console.log('deferred');
}).defer();

var log = _.bind(console.log, console);
result = _.delay(log, 1000, 'logged later');
result = _(log).delay(1000, 'logged later');

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

var data = {
    'moe': { 'name': 'moe', 'age': 40 },
    'curly': { 'name': 'curly', 'age': 60 }
};

var stooge = _.memoize(function (name) {
    return data[name];
}, _.identity);
stooge('curly');

stooge['cache']['curly'].name = 'jerome';
stooge('curly');

var returnedMemoize = _.throttle(function (a) {
    return a * 5;
}, 5);
returnedMemoize(4);

var initialize = _.once(function () {
});
initialize();
initialize();
'';
var returnedOnce = _.throttle(function (a) {
    return a * 5;
}, 5);
returnedOnce(4);

var greetPartial = function (greeting, name) {
    return greeting + ' ' + name;
};
var hi = _.partial(greetPartial, 'hi');
hi('moe');

var defaultsDeep = _.partialRight(_.merge, _.defaults);

var optionsPartialRight = {
    'variable': 'data',
    'imports': { 'jq': $ }
};

defaultsDeep(optionsPartialRight, _.templateSettings);

var throttled = _.throttle(function () {
}, 100);
jQuery(window).on('scroll', throttled);

jQuery('.interactive').on('click', _.throttle(function () {
}, 300000, {
    'trailing': false
}));

var returnedThrottled = _.throttle(function (a) {
    return a * 5;
}, 5);
returnedThrottled(4);

var helloWrap = function (name) {
    return 'hello ' + name;
};
var helloWrap2 = _.wrap(helloWrap, function (func) {
    return 'before, ' + func('moe') + ', after';
});
helloWrap2();

result = _.assign({ 'name': 'moe' }, { 'age': 40 });
result = _.assign({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = _({ 'name': 'moe' }).assign({ 'age': 40 });
result = _({ 'name': 'moe' }).assign({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = _.extend({ 'name': 'moe' }, { 'age': 40 });
result = _.extend({ 'name': 'moe' }, { 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = _({ 'name': 'moe' }).extend({ 'age': 40 });
result = _({ 'name': 'moe' }).extend({ 'age': 40 }, function (a, b) {
    return typeof a == 'undefined' ? b : a;
});

result = _.clone(stoogesAges);
result = _.clone(stoogesAges, true);
result = _.clone(stoogesAges, true, function (value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

result = _.cloneDeep(stoogesAges);
result = _.cloneDeep(stoogesAges, function (value) {
    return _.isElement(value) ? value.cloneNode(false) : undefined;
});

var foodDefaults = { 'name': 'apple' };
result = _.defaults(foodDefaults, { 'name': 'banana', 'type': 'fruit' });
result = _(foodDefaults).defaults({ 'name': 'banana', 'type': 'fruit' });

result = _.findKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function (num) {
    return num % 2 == 0;
});

result = _.findLastKey({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 }, function (num) {
    return num % 2 == 1;
});

result = _.forIn(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = _(new Dog('Dagny')).forIn(function (value, key) {
    console.log(key);
});

result = _.forInRight(new Dog('Dagny'), function (value, key) {
    console.log(key);
});

result = _(new Dog('Dagny')).forInRight(function (value, key) {
    console.log(key);
});

result = _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function (num, key) {
    console.log(key);
});

result = _({ '0': 'zero', '1': 'one', 'length': 2 }).forOwn(function (num, key) {
    console.log(key);
});

result = _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function (num, key) {
    console.log(key);
});

result = _({ '0': 'zero', '1': 'one', 'length': 2 }).forOwnRight(function (num, key) {
    console.log(key);
});

result = _.functions(_);
result = _.methods(_);

result = _(_).functions();
result = _(_).methods();

result = _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');

result = _.invert({ 'first': 'moe', 'second': 'larry' });

(function () {
    var args = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        args[_i] = arguments[_i + 0];
    }
    return _.isArguments(arguments);
})(1, 2, 3);

(function () {
    return _.isArray(arguments);
})();
result = _.isArray([1, 2, 3]);

result = _.isBoolean(null);

result = _.isDate(new Date());

result = _.isElement(document.body);

result = _.isEmpty([1, 2, 3]);
result = _.isEmpty({});
result = _.isEmpty('');

var moe = { 'name': 'moe', 'age': 40 };
var copy = { 'name': 'moe', 'age': 40 };

result = _.isEqual(moe, copy);

var words = ['hello', 'goodbye'];
var otherWords = ['hi', 'goodbye'];

result = _.isEqual(words, otherWords, function (a, b) {
    var reGreet = /^(?:hello|hi)$/i, aGreet = _.isString(a) && reGreet.test(a), bGreet = _.isString(b) && reGreet.test(b);

    return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
});

result = _.isFinite(-101);
result = _.isFinite('10');
result = _.isFinite(true);
result = _.isFinite('');
result = _.isFinite(Infinity);

result = _.isFunction(_);

result = _.isNaN(NaN);
result = _.isNaN(new Number(NaN));
result = _.isNaN(undefined);

result = _.isNull(null);
result = _.isNull(undefined);

result = _.isNumber(8.4 * 5);

result = _.isObject({});
result = _.isObject([1, 2, 3]);
result = _.isObject(1);

var Stooge = (function () {
    function Stooge(name, age) {
        this.name = name;
        this.age = age;
    }
    return Stooge;
})();

result = _.isPlainObject(new Stooge('moe', 40));
result = _.isPlainObject([1, 2, 3]);
result = _.isPlainObject({ 'name': 'moe', 'age': 40 });

result = _.isRegExp(/moe/);

result = _.isString('moe');

result = _.isUndefined(void 0);

result = _.keys({ 'one': 1, 'two': 2, 'three': 3 });

var mergeNames = {
    'stooges': [
        { 'name': 'moe' },
        { 'name': 'larry' }
    ]
};

var mergeAges = {
    'stooges': [
        { 'age': 40 },
        { 'age': 50 }
    ]
};

result = _.merge(mergeNames, mergeAges);

var mergeFood = {
    'fruits': ['apple'],
    'vegetables': ['beet']
};

var mergeOtherFood = {
    'fruits': ['banana'],
    'vegetables': ['carrot']
};

;

result = _.merge(mergeFood, mergeOtherFood, function (a, b) {
    return _.isArray(a) ? a.concat(b) : undefined;
});

result = _.omit({ 'name': 'moe', 'age': 40 }, 'age');
result = _.omit({ 'name': 'moe', 'age': 40 }, ['age']);
result = _.omit({ 'name': 'moe', 'age': 40 }, function (value) {
    return typeof value == 'number';
});

result = _.pairs({ 'moe': 30, 'larry': 40 });

result = _.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
result = _.pick({ 'name': 'moe', '_userid': 'moe1' }, ['name']);
result = _.pick({ 'name': 'moe', '_userid': 'moe1' }, function (value, key) {
    return key.charAt(0) != '_';
});

result = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (r, num) {
    num *= num;
    if (num % 2) {
        return r.push(num) < 3;
    }
});

// → [1, 9, 25]
result = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function (r, num, key) {
    r[key] = num * 3;
});

result = _.values({ 'one': 1, 'two': 2, 'three': 3 });

/**********
* Utilities *
***********/
result = _.escape('Moe, Larry & Curly');

result = _.identity({ 'name': 'moe' });

_.mixin({
    'capitalize': function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
});

var lodash = _.noConflict();

result = _.parseInt('08');

result = _.random(0, 5);
result = _.random(5);
result = _.random(5, true);
result = _.random(1.2, 5.2);
result = _.random(0, 5, true);

var object = {
    'cheese': 'crumpets',
    'stuff': function () {
        return 'nonsense';
    }
};

result = _.result(object, 'cheese');
result = _.result(object, 'stuff');

var tempObject = {};
result = _.runInContext(tempObject);

result = _.template('hello <%= name %>');
result = _.template('<b><%- value %></b>', { 'value': '<script>' });

var listTemplate = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
result = _.template(listTemplate, { 'people': ['moe', 'larry'] });
result = _.template('hello ${ name }', { 'name': 'curly' });
result = _.template('<% print("hello " + name); %>!', { 'name': 'larry' });

var listTemplate = '<% $.each(people, function(name) { %><li><%- name %></li><% }); %>';
result = _.template(listTemplate, { 'people': ['moe', 'larry'] }, { 'imports': { '$': jQuery } });
result = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });

result = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
result = result.source;

var Mage = (function () {
    function Mage() {
    }
    Mage.prototype.castSpell = function (n) {
        return n;
    };

    Mage.prototype.cast = function (n) {
        return n;
    };
    return Mage;
})();

var mage = new Mage();
result = _.times(3, _.partial(_.random, 1, 6));
result = _.times(3, function (n) {
    mage.castSpell(n);
});
result = _.times(3, function (n) {
    this.cast(n);
}, mage);

result = _.unescape('Moe, Larry &amp; Curly');

result = _.uniqueId('contact_');
result = _.uniqueId();

/**********
* Utilities *
***********/
result = _.VERSION;
result = _.support;
result = _.templateSettings;
//# sourceMappingURL=lodash-tests.disabled.js.map
