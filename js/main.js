// 把code 写到#code 和style 标签里
function writeCode(prefix, code, fn){
	let domCode = document.querySelector('#code')
	let n = 0
	let id = setInterval(()=> {
		n += 1
 		domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
		styleTag.innerHTML = prefix + code.substring(0, n)
		domCode.scrollTop = domCode.scrollHeight
		if(n >= code.length){
			window.clearInterval(id)
			fn && fn.call()
		}
	},70)
}

function writeMarkdown(markdown, fn){
	let domPaper = document.querySelector('#paper>.content')
	let n = 0
	let id = setInterval(()=> {
		n += 1
 		domPaper.innerHTML = markdown.substring(0, n)
		domPaper.scrollTop = domPaper.scrollHeight
		if(n >= markdown.length){
			window.clearInterval(id)
			fn && fn.call()
		}
	},35)
}


var result = `/*
* 面试官你好，我是任艺
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调
* 我就用代码来介绍吧
* 首先准备一些样式
*/


*{
	transition: all 1s;
}

html{
	background: #eee;
}
#code{
	border: 1px solid #aaa;
	padding: 16px;
}
/* 我需要一点高亮 */

.token.selector{color: #690;}
.token.property{color: #905;}
.token.function{color: #DD4A68;}

/* 加点 3D 效果 */
#code{
	animation: breath 0.5s infinite alternate-reverse;
}


/* 不玩了，我来介绍我自己吧 */
/* 我需要一张白纸 */
#code-wrapper{
	position: fixed;
	left: 0;
	width: 50%;
	height: 100%
}
#paper > .content{
	display: block;
}
`

var result2 = `

/*
* 接下来把 markdown 编程 HTML - marked.js
*/




/*
* 接下来把 给 HTML 加样式
*/
`


var md = `
# 自我介绍

我叫 任艺
1993 年 4 月出生
自学前端半年
希望应聘

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1.轮播
2.简历
3.画板

# 联系方式

QQ xxxxxx
Email xxxxxx
手机 xxxxxx
`


let result3 =`
/*
* 这就是我的会动的简历
* 谢谢观看
*/
`







writeCode('', result, () => {
	createPaper(() => {
		writeCode(result, result2, () => {
			writeMarkdown(md, () => {
				markdownToHtml(() => {
					writeCode(result + result2, result3,() => {
						console.log('完成')
					})
				})
			})
		})
	})
})





function createPaper(fn){
  	var paper = document.createElement('div')
  	paper.id = 'paper'
  	var content = document.createElement('pre')
  	content.className = 'content'
  	paper.appendChild(content)
  	document.body.appendChild(paper)
  	fn && fn.call()
}


function markdownToHtml(fn){
	var div = document.createElement('div')
	div.className = 'html markdown-body'
	div.innerHTML = marked(md)
	let markdownContainer = document.querySelector('#paper > .content')
	markdownContainer.replaceWith(div)
	fn && fn.call()
}