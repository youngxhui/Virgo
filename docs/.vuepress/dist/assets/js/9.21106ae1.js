(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(t,v,_){"use strict";_.r(v);var a=_(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"模块划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块划分","aria-hidden":"true"}},[t._v("#")]),t._v(" 模块划分")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("模块名称")]),t._v(" "),_("th",[t._v("模块介绍")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("用户中心")]),t._v(" "),_("td",[t._v("为用户提供授权，信息更改等模块")])]),t._v(" "),_("tr",[_("td",[t._v("试卷中心")]),t._v(" "),_("td",[t._v("学生获取试卷，提交试卷，测评试卷")])])])]),t._v(" "),_("h2",{attrs:{id:"用户中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户中心","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户中心")]),t._v(" "),_("h3",{attrs:{id:"登录授权模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#登录授权模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 登录授权模块")]),t._v(" "),_("p",[t._v("学生(教师)通过学号(工号)和密码进行登录，登录成功后会返回一个 JWT 该 token 里包含了用户的一些详细信息。")]),t._v(" "),_("p",[t._v("用户密码采用 "),_("code",[t._v("BCryptPasswordEncoder")]),t._v(" 进行加密。")]),t._v(" "),_("p",[t._v("JWT 可以为我们以后的系统扩展和其他系统对接提供方便。")]),t._v(" "),_("p",[t._v("默认 token 过期时间为 7 天，采用 "),_("code",[t._v("HS256")]),t._v(" 进行加密")]),t._v(" "),_("h3",{attrs:{id:"信息更改模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信息更改模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 信息更改模块")]),t._v(" "),_("p",[t._v("todo()")]),t._v(" "),_("h2",{attrs:{id:"试卷中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#试卷中心","aria-hidden":"true"}},[t._v("#")]),t._v(" 试卷中心")]),t._v(" "),_("h3",{attrs:{id:"获取情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取情况")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/page/exams/{classId}")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("获取该班级考试情况")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("classId")]),t._v(" "),_("td",[t._v("Long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("登录用户考试班级")])])])]),t._v(" "),_("p",[t._v("通过该接口可以获取考试情况，不同的考试，其中可能会有考试开始，考试结束，和正在进行的考试等情况。")]),t._v(" "),_("h3",{attrs:{id:"获取试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取试题","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取试题")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/page/exam/")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("获取试卷考试试题")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pageId")]),t._v(" "),_("td",[t._v("Long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("考试试卷id")])]),t._v(" "),_("tr",[_("td",[t._v("classId")]),t._v(" "),_("td",[t._v("Long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("该学生班级id")])])])]),t._v(" "),_("p",[t._v("通过该接口可以获取考试试题，但是调用该接口的时候会先进行试卷是否已经提交过的判断，如果试卷已经提交过，则该接口会返回一个试卷已经提交的错误信息。")]),t._v(" "),_("h3",{attrs:{id:"提交试卷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提交试卷","aria-hidden":"true"}},[t._v("#")]),t._v(" 提交试卷")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/page/addAns")]),t._v(" "),_("td",[t._v("post")]),t._v(" "),_("td",[t._v("提交试卷答案接口")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("json")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("试卷答案")])])])]),t._v(" "),_("p",[t._v("提交试卷答案如下格式")]),t._v(" "),_("div",{staticClass:"language-json line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       studentId"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       pageId"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       answer"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           id"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("'"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           ans"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'A'\n       "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           id"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v("'"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           ans"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '&amp;nbsp;'\n       "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           id"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("'"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           ans"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(' "（'),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("） Grinderxxxx。xxxxxx\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br")])]),_("h3",{attrs:{id:"获取学生所有考试分数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取学生所有考试分数","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取学生所有考试分数")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/page/scores/{studentId}")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("获取单个学生成绩")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("studentId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("学生id")])])])]),t._v(" "),_("p",[t._v("通过该接口可以获取单个学生所有考试成绩，包括分数，班级排名，学校排名等信息")]),t._v(" "),_("h3",{attrs:{id:"单项学生成绩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单项学生成绩","aria-hidden":"true"}},[t._v("#")]),t._v(" 单项学生成绩")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/Score/{pageId}/{studentId}")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("获取单个学生单项考试成绩")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("pageId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("试卷id")])]),t._v(" "),_("tr",[_("td",[t._v("studentId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("学生id")])])])]),t._v(" "),_("p",[t._v("获取试卷详细，包括 分数 试卷标题，学科，试题等")]),t._v(" "),_("h3",{attrs:{id:"校验试卷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#校验试卷","aria-hidden":"true"}},[t._v("#")]),t._v(" 校验试卷")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/verifyPage")]),t._v(" "),_("td",[t._v("post")]),t._v(" "),_("td",[t._v("校验试卷是否已经提交")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("verifyPageParams")]),t._v(" "),_("td",[t._v("对象")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("对象类型下面有参数")])])])]),t._v(" "),_("p",[t._v("该对象里包含两个参数 studentId 和 pageId 都是 long 类型")]),t._v(" "),_("h2",{attrs:{id:"班级中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#班级中心","aria-hidden":"true"}},[t._v("#")]),t._v(" 班级中心")]),t._v(" "),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("教师id 和 教师工号(jobNumber)并非同一属性")])]),t._v(" "),_("h3",{attrs:{id:"教师所教授班级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#教师所教授班级","aria-hidden":"true"}},[t._v("#")]),t._v(" 教师所教授班级")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/teacher/{teacherId}")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("通过教师id获取班级列表")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("teacherId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("教师id")])])])]),t._v(" "),_("p",[t._v("获取教师所教授班级信息")]),t._v(" "),_("h3",{attrs:{id:"成绩分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#成绩分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 成绩分析")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接口")]),t._v(" "),_("th",[t._v("请求方式")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("/classScore/{classId}/{pageId}")]),t._v(" "),_("td",[t._v("get")]),t._v(" "),_("td",[t._v("————")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("classId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("班级id")])]),t._v(" "),_("tr",[_("td",[t._v("pageId")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("试卷id")])])])]),t._v(" "),_("p",[t._v("获取指定试卷的各个阶段的分数人数")]),t._v(" "),_("h3",{attrs:{id:"试卷前-10-名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#试卷前-10-名","aria-hidden":"true"}},[t._v("#")]),t._v(" 试卷前 10 名")])])}],!1,null,null,null);v.default=s.exports}}]);