GIT提交规则
## Commit 格式(暂定)

为了方便参与者理解, 并统一 commit message 的格式, 参考其他开源项目, 暂时遵循如下的格式(冒号后有空格):
${action}: ${message body}

所有英文字母都为小写, 其中 ${action} 暂定如下几种:

* feature: 添加新的特性, 新的系统功能等
* fix: 修复某个 bug, 如果有 bug 编号, 需要在 message body 中包含对应的编号
* modify: 修改已有的某个功能
* op: 优化已有功能, 但是不更改功能
* test: 增加或是修改测试用例
* etc: 其他, 不包含以上场景的提

### 示例

```
fix: #156 can't get user info
```

```
feature: add find user by name api
```

```
etc: batch change file structure under tmp directory

开发规范：
* 一定要在dev分支上写、修改自己的文件, 不允许第一时间写在master分支内
* 必须使用JQuery, 不允许使用原生JS
* 可以引用框架例如Vue.js、Angular.js
* 规范的编写注释, 注释内容应当简洁明了
* html文件应放入html文件夹内, css文件应放入css文件夹内, js文件应放入js文件夹内, 图片应放入
* 文件命名必须要以英文命名, 不能使用汉语拼音, 例如:首页的html文件应写成index.html, css文件应写成index.css
* html、css标签编写规范:(详情见https://www.cnblogs.com/Lmey/p/7144098.html)
  page：代表整个页面，用于最外层；wrap：外套，将所有元素包在一起的一个外围包，用于最外层；wrapper：页面外围控制整体布局宽度，用于最外层
  container：一个整体容器，用于最外层；head、header：页头区域，用于头部；nav：导航条；content：内容，网站中最重要的内容区域，用于网页中部主体
  main：网站中的主要区域（表示最重要的一块位置），用于中部主体内容；column：栏目；sidebar：侧栏；
  foot、footer：页尾、页脚。网站一些附加信息放置区域，（或命名为copyright）用于底部
* html、css标签的命名最好都小写
* git的基本操作:
	(1)克隆远程仓库至本地: git clone https://github.com/CuteCookie123/CuteCookie123.git   (如果进行过这步操作则可以跳过)
	(2)本地创建dev分支并切换至dev分支: git checkout -b dev     (如果本地已经创建并切换了dev分支则可以跳过)
	(3)将github上dev分支的内容同步至本地dev分支: git pull origin dev   (如果本地已经同步了仓库上的dev分支内容则可以省略)
	(4)*从github仓库上更新数据至本地仓库: git pull origin dev   (这步一定要写, 防止数据没有及时更新, 这步和第3步的意义不同,不可省略)
	(5)修改好文件或编写好文件上传至缓存区: git add .
	(6)缓存区提交文件: git commit -m "备注"    (备注格式见最上方git提交规则)
	(7)将文件从缓存区提交至远程github仓库: git push origin dev
