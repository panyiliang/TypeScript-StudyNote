"use strict";
/**
 * TS基础数据类型
 * 布尔值（boolean）
 * 数字（number）
 * 字符串（string）
 * 数组（[]/Array()）
 * 元组（Tuple）
 * 枚举（enum）
 * 任意类型（Any）
 * Void
 * never
 * Null 和 undefind
 */
// 布尔型(boolean)      true  false
var flag = true;
flag = false;
// 数字（number）
var a = 123;
// var a = "string"  //错误写法，a在上文中已被定义为Number类型，无法重新赋予String类型
var a = 12.33; //正确写法， 在TypeScript中，Number类型包括了 整型 和 浮点型数字
// 字符串（string）
var str = "123";
// str = 123    //错误写法
// 数组（[]/Array()）
// var arr = [1, "123", false];     //ES5写法
// 第一种定义数组的方法
// let arr:number[] = [1, 3, 5, 6] // 数字数组 数组里只允许存在数字类型的元素
// let arr:string[] = ['1', '3', '10'] //字符串数组 数组里只允许存在字符串类型的元素
// 第二种定义数组的方法
// let arr:Array<number> = [1, 3, 5, 6] // 数字数组 数组里只允许存在数字类型的元素 与 arr:number[]结果一样
// let arr:Array<string> = ['1', '3', '10'] //字符串数组 数组里只允许存在字符串类型的元素
//如果要实现混杂数据类型的数组 可以使用any类型, 但是一般来说尽量不要使用any类型去定义数组
// let arr:any[] = [1, "2", true]
// let arr:Array<any> = [1, "2", true]
// 元组（Tuple）属于数组的一种， 可以指定数组里每个元素的类型
var arr = [1.1213, "", true]; //需要注意的是，数组内元素的类型顺序必须与元组数组定义时的顺序保持一致
// 枚举（enum） 枚举类型可以为一组数值赋予友好的名字。
/**
 * 枚举类型可以为一组数值赋予友好的名字。
 * enum 枚举名{
 *          标识符[=整型常数]
 *          标识符[=整型常数]
 *          ...
 *          标识符[=整型常数]
 *          }
 *
 * 例如：
 * pay_status     0 未支付 1 支付中 2 交易成功
 * flag          1 true -1 false
 */
// enum Flag {true=1, false = -1}
// var f:Flag = Flag.true
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;     // 输出1，没有赋值的情况下，默认从0开始递增
// enum Color {Red, Green = 5, Blue}
// let c: Color = Color.Blue;     // 输出6，Color.Red输出0，Color.Green输出5，Bule未指定值的情况下自动从前一个增加1
// 任意类型（Any）
// let anum:any = 1
// anum = "213"
// anum = true
//任意类型的使用场景
// 当目标对象是一个Object的时候可以使用Any类型，因为TS里没有Object类型
// var oBox = document.getElementById('box');
// oBox.style.color="red";
var oBox = document.getElementById('box');
oBox.style.color = "red";
// Void类型     TS中void没有表示任何类型，一般用于定义方法的时候方法没有返回值
//ES5定义方法
// function run() {
//     console.log("run");
// }
// run();
// never 其他类型
// Null 和 undefind 属于其他类型（never）的子类型
// var num:number
// console.log(num) //undefined 报错 已定义未赋值
// var num:undefined
// console.log(num)  //输出 undefined 但是没有报错
// var num:number | undefined
// console.log(num) // num未定义 输出undefined未报错
// num = 123.11
// console.log(num) // 输出 123.11
// var num:null
// num = 1    // 报错
// num = null //正确
var num; //一个元素可能是Number类型，也可能是Null，也可能是undefined
