/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var count = 10; // 10 次
    var speed = 5000; // 5 秒一周期
    var present = new Date().getMinutes();
    var number = 1;
    console.log("Question 1");
    function testTimeHelper(){
        count--;
        var now = new Date().getMinutes();
        if (present != now) {
            console.log("Next Minute");
            return;
        }
        else if (count < 0) {
            return;
        }
        else {
            console.log(number);
            number = number * 2;
            // 递归调用，自己调用自己
            setTimeout(testTimeHelper, speed);
        }
    }
    return testTimeHelper();
}
//testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone, mail) {
    console.log("Question 2");
    if (/^[0-9]+$/.test(telephone) == true && telephone.length == 11) {
        console.log("Telephone ", telephone, " is right.");
    }
    else {
        console.log("Telephone ", telephone, " is wrong.");
    }
    /* 规则
     * 1.第一位为数字或字母，中间为多个数字、字母、“_”、“-”
     * 2.接着是 @ 符号，后面是数字、字母和“.”
     * 3.然后是最后一个“.”加 2-4 个字母结尾
     */
    if (/^([a-zA-Z]|[0-9])(\w|\-)+@([a-zA-Z0-9]|\.)+\.([a-zA-Z]{2,4})$/.test(mail)) {
        console.log("Email ", mail, " is right.");
    }
    else {
        console.log("Email ", mail, " is wrong.");
    }
}

testMail("13262738990", "jnlin16@fudan.edu.cn");

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    /* \b是匹配一个单词的边界
     * ([a-z]+) 是匹配一个到多个小写字母
     * \1是引用第一个括号的内容
     * /ig 不区分大小写，并且全局搜索
     */
    var patt1 = /\b([a-z]+) \1\b/ig;
    var result = str.match(patt1);
    let s = new Set();
    console.log("Question 3");
    console.log("Input: ", str);
    if (result == null) {
        console.log(s);
        return
    }
    else {
        // match 返回一个 Array，因此进行字典排序
        var L = result.length;
        for (i = 0; i < L; i++) {
            for (j = 0; j < L - 1; j++) {
                if (result[j] > result[j + 1]) {
                    temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
        // 取前 10 个放入 s
        if (L <= 10) {
            for (i = 0; i < L; i++) {
                s.add(result[i]);
            }
        }
        else {
            for (i = 0; i < 10; i++) {
                s.add(result[i]);
            }
        }
        console.log(s);
    }
    
}

testRedundancy("C c B b A a");

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    console.log("Question 4");
    console.log("wantInput: ", wantInput, " actualInput: ", actualInput);
    var i = 0, j = 0;
    let s = new Set();
    while (i < wantInput.length) {
        if (wantInput.charAt(i) == actualInput.charAt(j)) {
            if (j < actualInput.length) {
                i++;
                j++;
            }
            else {
                i++;
            }
            
        }
        else {
            if (!s.has(wantInput.charAt(i))) {
                s.add(wantInput.charAt(i));
            }
            i++;
        }
    }
    console.log(s);
}

testKeyBoard("abcdbacdec", "adad");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    console.log("Question 5");
    console.log("Input: ", str);
    // 消除多余空格
    str = str.replace(/\s+/g, " ");
    var result = str.split(" ").reverse().join(" ");
    console.log("Output: ", result)
}

testSpecialReverse("It's   my  duty")

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

// 线性复杂度就哈希得了
function twoSum(nums, target) {
    console.log("Question 6");
    console.log("nums: ", nums, " target: ", target);
    var map = new Map();
    for (i = 0; i < nums.length; i++) {
        comp = target - nums[i];
        if (map.has(comp)) {
            var result = new Array(i, map.get(comp)).reverse();
            console.log(result);
        }
        else {
            map.set(nums[i], i);
        }
    }
}

twoSum([1, 2, 3, 4], 5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var n = str.length, ans = 0;
    var map = new Map();
    var substr;
    console.log("Question 7");
    console.log("Input: ", str);
    // i 为滑窗左端，j 为滑窗右端
    for (i = 0, j = 0; j < n; j++) {
        if (map.has(str.charAt(j))) {
            i = Math.max(map.get(str.charAt(j)) + 1, i);
        }
        if (ans < j - i + 1) {
            ans = j - i + 1;
            substr = str.substr(i, j + 1);
        }
        map.set(str.charAt(j), j);
    }
    console.log("Substr: ", substr, " Length: ", ans);
}

lengthOfLongestSubstring("abbbcda");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.call(this);
    this.sayHi = function() {
        console.log("Hi, I am a developing country.");
    }
}

function PoorCountry() {
    this.prototype = new Country();
    this.saySad = function() {
        console.log("I am a sad poor country.");
    }
}

function DevelopedCountry() {
    this.sayHappy = function() {
        console.log("I am a Happy developed country.");
    }
    this.prototype = Object.create(Country);
}

function testCountry() {
    console.log("Question 8");
    var C1 = new DevelopingCountry();
    PoorCountry.prototype = new Country();
    var C2 = new PoorCountry();
    DevelopedCountry.prototype = Object.create(Country);
    var C3 = new DevelopedCountry();
    C1.sayHi();
    C2.saySad();
    C3.sayHappy();
    //console.log(C1.name);
    //console.log(C2.name);
    //console.log(C3.name);
}

testCountry();