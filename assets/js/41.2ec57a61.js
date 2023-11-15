(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{408:function(s,t,a){"use strict";a.r(t);var e=a(24),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[s._v("#")]),s._v(" CommitLint")]),s._v(" "),a("h2",{attrs:{id:"commitlint-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint-是什么"}},[s._v("#")]),s._v(" commitLint 是什么")]),s._v(" "),a("p",[s._v("在多人协作的背景下，git 仓库和 workflow 的作用很重要，对于 git commit message 的信息说明就要有一定的规范，否则每个人一个写法，就会显得特别的混乱。commitlint 作为一个 git 提交时用于检测 message 格式的 git hooks 插件，配合 husky 一起使用。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"安装-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-husky"}},[s._v("#")]),s._v(" 安装 husky")]),s._v(" "),a("p",[s._v("husky 是一个 git hook 的管理工具。可以在 git 操作时触发相应的配置。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev husky\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装-commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-commitlint"}},[s._v("#")]),s._v(" 安装 commitLint")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"}},[s._v("commitlint"),a("OutboundLink")],1),s._v(" 文档有很详细的说明。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装 commitlint")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("conventional @commitlint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("ol",[a("li",[s._v("项目根目录创建 commitlint.config.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@commitlint/config-conventional"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这里表示继承了 "),a("code",[s._v("@commitlint/config-conventional")]),s._v(" 的默认配置。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在 package.json 中配置 husky")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commitlint -E HUSKY_GIT_PARAMS"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("通过 HUSKY_GIT_PARAMS 传递参数。在 commit-msg 阶段执行。")]),s._v(" "),a("h2",{attrs:{id:"规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[s._v("#")]),s._v(" 规则")]),s._v(" "),a("h3",{attrs:{id:"commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-message"}},[s._v("#")]),s._v(" commit message")]),s._v(" "),a("p",[s._v("由三个部分组成， header，body，footer。\n其中 header 必选， body，footer 是可选的。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("空一行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("空一行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfooter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[s._v("#")]),s._v(" header")]),s._v(" "),a("p",[s._v("header 的组成规则是：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("type 表示本次操作的标识， subject 则是本次操作的具体描述,不能超过 50 个字符，且结尾不加英文句号")]),s._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("feat")]),s._v("：新功能（feature）提交")]),s._v(" "),a("li",[a("code",[s._v("fix")]),s._v("：修补 bug， 专门为了修改 bug")]),s._v(" "),a("li",[a("code",[s._v("docs")]),s._v("：文档（documentation）相关更改")]),s._v(" "),a("li",[a("code",[s._v("style")]),s._v("： 格式方面的优化， css 更改")]),s._v(" "),a("li",[a("code",[s._v("refactor")]),s._v("：重构代码，并没有新增新功能")]),s._v(" "),a("li",[a("code",[s._v("test")]),s._v("：新增测试文件")]),s._v(" "),a("li",[a("code",[s._v("chore")]),s._v("：构建过程或辅助工具的变化")])])])}),[],!1,null,null,null);t.default=n.exports}}]);