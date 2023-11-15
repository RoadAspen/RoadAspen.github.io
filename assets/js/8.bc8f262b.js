(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(a,r,n){a.exports=n.p+"assets/img/monorepo.9d3de06b.jpg"},361:function(a,r,n){a.exports=n.p+"assets/img/monorepo-git.9a41147d.jpg"},424:function(a,r,n){"use strict";n.r(r);var t=n(24),s=Object(t.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"什么是-monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-monorepo"}},[a._v("#")]),a._v(" 什么是 Monorepo")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("最近入职了一家新公司，公司代码采用了前端 React、后端 nest.js 的技术栈，很多方法都是可以前后端公用的，前后端所有的代码都放在同一个代码仓库中，采用了 monorepo 的代码管理方案，在这里开始了解一下什么是 monorepo，以及 对应的 multi-repo 有什么区别。")]),a._v(" "),t("h2",{attrs:{id:"什么是-monorepo-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-monorepo-2"}},[a._v("#")]),a._v(" 什么是 Monorepo")]),a._v(" "),t("p",[a._v("所谓的 "),t("code",[a._v("Monorepo")]),a._v(" 就是一个 git 仓库，里面存放着多个项目，这样的项目被称为工作空间或者包,这些包可以相互依赖，也可以完全不相关。与此相反，使用多个 git 仓库，每个 git 仓库只存放一个项目，称为 "),t("code",[a._v("Multi-repo")]),a._v(" 方式。也可以将这两种方式的结合起来使用。\n越来越多的公司开始使用 Monorepo 作为公司代码仓库的管理方案，包括 Google、Facebook、Twitter 。想象一下，想 Babel、React、Ember 这样的项目，他们由一\n个核心的包组成，可以通过包形式的附加组件和功能进行扩展，在一个存储库中同时管理项目的 Core 和 plugin 使得维护代码的代价更小，也能更好的保持所有版本依赖保持同步。")]),a._v(" "),t("h2",{attrs:{id:"monorepo-的进化之路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-的进化之路"}},[a._v("#")]),a._v(" Monorepo 的进化之路")]),a._v(" "),t("p",[t("strong",[a._v("阶段一：单仓库巨石应用")]),a._v(" 一个 git 仓库维护所有的代码，随着代码量的逐渐扩大和业务量的逐步上升，项目代码会越来越大，越来越复杂，大量代码的构建效率降低，最后导致了单仓库巨石应用，称为 "),t("code",[a._v("Monolith")]),a._v("。"),t("br"),a._v(" "),t("strong",[a._v("阶段二：多仓库多模块应用")]),a._v(" 随着代码量的增多，将整体业务拆解成为多个业务模块，各自做为一个 "),t("code",[a._v("git仓库管理")]),a._v(",模块之间解耦合，降低了 巨石应用的复杂度，每个模块都可以单独编码、测试、发版，构建效率得到很大的提升，这种代码管理方式称为 "),t("code",[a._v("Multi-repo")]),a._v("."),t("br"),a._v(" "),t("strong",[a._v("阶段三：单仓库多模块应用")]),a._v(" 随着业务模块继续增加，模块仓库的数量也在不断增多，Multi-repo 方式虽然从业务上解耦合，但也增加了项目工程管理的难度，随着模块仓库达到一定的数量级，会有几个问题： 跨仓库代码很难共享，分散在单仓库的模块依赖管理复杂，\n底层模块升级，上层依赖模块都要及时更新，否则就存在依赖问题，增加了构建耗时（一个底层模块提交更新，所有依赖模块都要做依赖更新及 git 提交，发版，非常耗时耗力），于是将多个项目集成到一个仓库下，共享仓库配置，共享模块代码，共享第三方依赖（保证了三方依赖的版本统一）称为趋势，这种代码管理方式称之为 "),t("code",[a._v("MonoRepo")]),a._v(".")]),a._v(" "),t("p",[t("img",{attrs:{src:n(360),alt:"monorepo"}})]),a._v(" "),t("h3",{attrs:{id:"monorepo-的优劣"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-的优劣"}},[a._v("#")]),a._v(" Monorepo 的优劣")]),a._v(" "),t("p",[t("img",{attrs:{src:n(361),alt:"monorepo和multi-repo的区别"}})]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("场景")]),a._v(" "),t("th",[a._v("MultiRepo")]),a._v(" "),t("th",[a._v("MonoRepo")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("代码可见性")]),a._v(" "),t("td",[a._v("✅ 代码隔离，研发者只需要关注自己负责的仓库"),t("br"),a._v(" ❌ 管理按照各自的 Owner 划分，当出现问题时，需要到依赖包中进行判断并解决")]),a._v(" "),t("td",[a._v("✅ 一个仓库中由多个相关项目，可以看到整个代码库的变化趋势，更好的团队协作 "),t("br"),a._v("❌ 增加了非 Owner 代码改动的风险")])]),a._v(" "),t("tr",[t("td",[a._v("依赖管理")]),a._v(" "),t("td",[a._v("❌ 多个仓库都有自己的 node_modules")]),a._v(" "),t("td",[a._v("✅ 所有的项目在一个文件夹中，依赖提升，共享一个 node_modules")])]),a._v(" "),t("tr",[t("td",[a._v("代码权限")]),a._v(" "),t("td",[a._v("✅ 每个仓库都可以设置自己的代码权限，不会出现项目被误改的情况")]),a._v(" "),t("td",[a._v("❌ 多个项目代码在同一个仓库中，没有项目粒度的权限 ，一个项目出问题，可能影响到所有项目")])]),a._v(" "),t("tr",[t("td",[a._v("开发迭代")]),a._v(" "),t("td",[a._v("✅ 仓库体积小，模块划分清晰，可维护性强 "),t("br"),a._v("❌ 多仓库来回切换（编辑器和命令行），项目多时效率很低，存在相同依赖时，需要手动 npm link，操作繁琐 "),t("br"),a._v("❌ 依赖管理不便，多个依赖可能在不同的项目中存在不同的版本，重复安装，npm link 时不同项目的依赖会存在冲突")]),a._v(" "),t("td",[a._v("✅ 多个代码在同一个仓库中，可以看到相关项目的全貌，编码非常方便"),t("br"),a._v(" ✅ 代码复用高，方便进行重构 ❌ 多个项目在同一个项目中，代码体积很大，git clone 操作时间很长， 在开发过程中 rebase 会很耗费时间，需要经常 rebase，特别是多人开发相同模块的时候，容易冲突 "),t("br"),a._v(" ✅ 依赖调试方便，在迭代依赖包的时候，只需要 npm link 一次，就可以在多个项目中查看修改效果，简化了操作流程")])]),a._v(" "),t("tr",[t("td",[a._v("工程配置")]),a._v(" "),t("td",[a._v("❌ 各个仓库各自维护一套构建、打包、代码校验，不一致时或者需要构建优化时可能导致代码差异和构建差异")]),a._v(" "),t("td",[a._v("✅ 多个项目在同一个仓库，共用同一套工程配置逻辑，代码风格、代码质量标准容易把控")])]),a._v(" "),t("tr",[t("td",[a._v("构建部署")]),a._v(" "),t("td",[a._v("❌ 各个仓库存在相同的依赖升级时，需要手动到各个仓库修改依赖版本，构建和部署，非常消耗时间")]),a._v(" "),t("td",[a._v("✅ 构建 Monorepo 工具可以配置依赖项目的构建优先级，可以实现一次命令完成所有部署")])])])]),a._v(" "),t("h2",{attrs:{id:"monorepo-的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-的场景"}},[a._v("#")]),a._v(" MonoRepo 的场景")]),a._v(" "),t("p",[a._v("综合以上所述， MonoRepo 的管理方式更适用于 "),t("code",[a._v("中大型项目，多模块项目")]),a._v("，在开发效率、协作效率、综合管理、代码一致性等方面都有很大收益")]),a._v(" "),t("h2",{attrs:{id:"monorepo-踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-踩坑"}},[a._v("#")]),a._v(" MonoRepo 踩坑")]),a._v(" "),t("p",[a._v("一、"),t("strong",[a._v("幽灵依赖")])]),a._v(" "),t("p",[t("strong",[a._v("问题：")]),a._v(" npm、yarn 安装的依赖，存在依赖提升，即所有的依赖全部摊平到同一层级，这就导致一些没有在 package.json 中引入的依赖包，也可以在项目中直接使用，这种行为就叫做 "),t("strong",[a._v('"幽灵依赖"')]),a._v("，幽灵依赖最大的问题在于，如果某个幽灵依赖不再被其他包使用，不再被安装，那么项目就会因为无法找到依赖而报错。")]),a._v(" "),t("p",[t("strong",[a._v("解决方案：")]),a._v(" 基于 npm、yarn 的 Monorepo 的方案依然存在幽灵依赖的问题，目前可以使用 "),t("code",[a._v("pnpm")]),a._v("彻底解决这个问题。")]),a._v(" "),t("p",[a._v("二、"),t("strong",[a._v("依赖安装耗时长")])]),a._v(" "),t("p",[t("strong",[a._v("问题：")]),a._v(" MonoRepo 中每个项目都有自己的 package.json 依赖表，嘴着 MonoRepo 中依赖增常，每次 install 的耗时会越来愈长"),t("br"),a._v(" "),t("strong",[a._v("方案：")]),a._v(" 相同版本的依赖可以提升到 MonoRepo 根目录下，减少冗余依赖的安装，使用 pnpm 按需安装及依赖缓存")]),a._v(" "),t("p",[a._v("三、"),t("strong",[a._v("构建打包时间长")]),t("br"),a._v(" "),t("strong",[a._v("问题：")]),a._v(" 多个项目构建任务存在依赖时，往往是串行构建或者全量构建，导致构建时间长"),t("br"),a._v(" "),t("strong",[a._v("方案：")]),a._v(" 增量构建，而非全量构建，也可以将串行构建优化成并行构建。")]),a._v(" "),t("h2",{attrs:{id:"monorepo-选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-选型"}},[a._v("#")]),a._v(" Monorepo 选型")]),a._v(" "),t("h3",{attrs:{id:"构建型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建型"}},[a._v("#")]),a._v(" 构建型")]),a._v(" "),t("p",[a._v("目前市面上有很多基于 Monorepo 思想构建的工具，主要解决大仓库 Monorepo 构建效率低的问题。项目代码越来越大，工作流程（项目 init、构建、单元测试、集成测试）越来越慢；这类工具就是针对这样的场景进行极致的性能优化。适用于包非常多、代码量非常庞大的 Monorepo 项目。")]),a._v(" "),t("h3",{attrs:{id:"轻量型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轻量型"}},[a._v("#")]),a._v(" 轻量型")]),a._v(" "),t("h4",{attrs:{id:"lerna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna"}},[a._v("#")]),a._v(" Lerna")]),a._v(" "),t("p",[t("strong",[a._v("Lerna 是什么？")])]),a._v(" "),t("ul",[t("li",[a._v("Lerna 是 Babel 为实现 MonoRepo 开发的工具；最擅长依赖关系和发布")]),a._v(" "),t("li",[a._v("Lerna 优化了多包工作流，解决了多包依赖、发版手动维护等问题")]),a._v(" "),t("li",[a._v("Lerna 不提供构建、测试等任务，工程能力较弱，项目中往往需要基于它进行顶层能力的封装")])]),a._v(" "),t("p",[t("strong",[a._v("Lerna 主要做的三件事")])]),a._v(" "),t("ul",[t("li",[a._v("为单个包或者多个包运行命令 （lerna run）")]),a._v(" "),t("li",[a._v("管理依赖项 （lerna bootstrap）")]),a._v(" "),t("li",[a._v("发布依赖包，处理版本管理，并声称变更日志（lerna publish）")])]),a._v(" "),t("p",[t("strong",[a._v("Lerna 解决了什么问题？")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("代码共享、调试便捷：")]),a._v(" 一个依赖包更新，其他依赖包无需安装最新版本，因为 lerna 会自动 link")]),a._v(" "),t("li",[t("strong",[a._v("安装依赖，减少冗余")]),a._v(" 多个包使用相同版本的依赖包时，Lerna 优先将依赖包安装在根目录")]),a._v(" "),t("li",[a._v("**规范版本管理：**Lerna 通过 Git 检测代码变动，自动发版，更新版本好，两种模式管理多个依赖包的版本号")]),a._v(" "),t("li",[t("strong",[a._v("自动生成发版日志：")]),a._v(" 使用插件，根据 Git commit 记录，自动生成 ChangeLog")])]),a._v(" "),t("p",[t("strong",[a._v("Lerna 自动检测发布，判断逻辑")])]),a._v(" "),t("ol",[t("li",[a._v("校验本地是否有没有被 commit 内容？")]),a._v(" "),t("li",[a._v("判断当前的分支是否正常？")]),a._v(" "),t("li",[a._v("判断当前分支是否在 remote 存在？")]),a._v(" "),t("li",[a._v("判断当前分支是否在 lerna.json 允许的 allowBranch 设置之中？")]),a._v(" "),t("li",[a._v("判断当前分支提交是否落后于 remote")])]),a._v(" "),t("p",[t("strong",[a._v("Lerna 工作模式")]),t("br"),a._v("\nLerna 可以使用两种模式来管理项目 "),t("strong",[a._v("固定模式")]),a._v(" 所有的包都拥有同样的版本、"),t("strong",[a._v("独立模式")]),a._v(" 包可以拥有自己的单独版本号")]),a._v(" "),t("h4",{attrs:{id:"yarn-npm-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-npm-workspace"}},[a._v("#")]),a._v(" yarn\\npm + workspace")]),a._v(" "),t("p",[a._v("yarn 1.x 及以上版本，新增 workspace 能力，不借助 Lerna ，也可以提供原声的 Monorepo 支持，需要在根目录下 package.json 中，声明 workspace")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"private"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 必须是私有项目")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"workspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages/backend"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages/frontend"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packages/shared"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"vendors/**"')]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[t("strong",[a._v("yarn workspace VS Lerna")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("yarn workspace 更突出对依赖的管理： 依赖提升到根目录的 node_modules 下，安装更快，体积更小")])]),a._v(" "),t("li",[t("p",[a._v("Lerna 更突出工作流方面：使用 Lerna 命令来优化多个包的管理，如：依赖发包、版本管理，批量执行脚本")])])]),a._v(" "),t("p",[a._v("将二者结合起来使用，会形成更佳方案： "),t("strong",[a._v("yarn workspace + Lerna")])]),a._v(" "),t("p",[a._v("能力分工：Lerna 将依赖管理交给 yarn workspace；Lerna 承担依赖发布能力。")]),a._v(" "),t("p",[t("strong",[a._v("操作步骤：")])]),a._v(" "),t("ol",[t("li",[a._v('配置 Lerna 使用 Yarn 管理依赖：learn.json 中配置 "npmClient": "yarn"')]),a._v(" "),t("li",[a._v("配置 Lerna 启用 Yarn Workspaces：")])]),a._v(" "),t("blockquote",[t("p",[a._v('配置 lerna.json/useWorkspaces = true\n配置根目录 package.json/workspaces = ["packages/*"] , 此时 lerna.json 中的 packages 配置项将不再使用.\n配置根目录 package.json/private = true')])]),a._v(" "),t("p",[a._v("说明：\n上面三个配置项需同时开启, 只开启一个 lerna 会报错\n此时执行 lerna bootstrap 相当于执行 yarn install，等同于执行 lerna bootstrap --npm-client yarn --use-workspaces\n由于 yarn 会自动 hosit 依赖包, 无需再 lerna bootstrap 时增加参数 --hoist (加了参数 lerna 也会报错)")]),a._v(" "),t("p",[a._v("不需要发包的项目，配置 package.json/private = true")]),a._v(" "),t("h4",{attrs:{id:"lerna-pnpm-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-pnpm-workspace"}},[a._v("#")]),a._v(" Lerna + pnpm + workspace")]),a._v(" "),t("p",[t("strong",[a._v("pnpm 是新一代 Node 包管理器")]),a._v("，它由 npm/yarn 衍生而来，解决了 npm/yarn 内部潜在的风险，并且极大提升依赖安装速度。pnpm 内部使用基于内容寻址的文件系统，来管理磁盘上依赖，减少依赖安装；node_modules/.pnpm 为虚拟存储目录，该目录通过"),t("package-name",[a._v("@"),t("version",[a._v("来实现相同模块不同版本之间隔离和复用，由于它只会根据项目中的依赖生成，并不存在提升。\n"),t("strong",[a._v("CAS 内容寻址存储")]),a._v("，是一种存储信息的方式，根据内容而不是位置进行检索信息的存储方式。"),t("br"),a._v(" "),t("strong",[a._v("Virtual store 虚拟存储")]),a._v("，指向存储的链接的目录，所有直接和间接依赖项都链接到此目录中，项目当中的.pnpm 目录")])],1)],1),a._v(" "),t("p",[t("strong",[a._v("pnpm 相比于 npm、yarn 的包管理器，优势如下，同理是 Lerna + yarn + workspace 优势：")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("装包速度极快")]),a._v("： 缓存中有的依赖，直接硬链接到项目的 node_module 中；减少了 copy 的大量 IO 操作")]),a._v(" "),t("li",[t("strong",[a._v("磁盘利用率极高")]),a._v("： 软/硬链接方式，同一版本的依赖共用一个磁盘空间；不同版本依赖，只额外存储 diff 内容")]),a._v(" "),t("li",[t("strong",[a._v("解决了幽灵依赖")]),a._v("： node_modules 目录结构 与 package.json 依赖列表一致")])]),a._v(" "),t("h2",{attrs:{id:"选型建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选型建议"}},[a._v("#")]),a._v(" 选型建议")]),a._v(" "),t("p",[a._v("建议采用渐进式架构方案，即对于轻量级 Monorepo 项目，我们初期可以选择 "),t("code",[a._v("Lerna + pnpm workspace + lerna-changelog")]),a._v("，解决了依赖管理、发版管理等问题，为开发者带来便利；随着后续项目迭代，代码变多或多个项目间依赖关系复杂，可以很平滑的接入 Nx 来提升构建打包效率。")])])}),[],!1,null,null,null);r.default=s.exports}}]);