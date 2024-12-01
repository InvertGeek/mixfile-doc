import{_ as r,c as a,a0 as t,o}from"./chunks/framework.p2VkXzrt.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"dev-help.md","filePath":"dev-help.md"}'),i={name:"dev-help.md"};function l(n,e,p,h,s,b){return o(),a("div",null,e[0]||(e[0]=[t('<h2 id="局域网服务器" tabindex="-1">局域网服务器 <a class="header-anchor" href="#局域网服务器" aria-label="Permalink to &quot;局域网服务器&quot;">​</a></h2><p>/api/upload?name=文件名 使用put请求即可上传文件,成功后会返回分享码(长分享码格式) <br> 可添加参数add=false,上传过后不会自动添加到历史记录和收藏 <br> /api/download?s=分享码 可直接下载或预览文件 <br> 可添加参数referer=强制覆盖分享码自带的referer</p><h2 id="uri-api-安卓版" tabindex="-1">URI API(安卓版) <a class="header-anchor" href="#uri-api-安卓版" aria-label="Permalink to &quot;URI API(安卓版)&quot;">​</a></h2><p>MixFile开放了许多uri api,可通过这些uri调用或启动mixfile的服务 <br> uri可通过网页js(直接跳转href即可)或安卓intend启动 <br> mixfile://start 可直接后台启动局域网服务器 <br> 网页点击mf://开头的分享码 可直接弹出文件信息窗口</p><h2 id="自定义线路" tabindex="-1">自定义线路 <a class="header-anchor" href="#自定义线路" aria-label="Permalink to &quot;自定义线路&quot;">​</a></h2><p>需要自行使用其他编程语言开发一个http服务器接收put和get请求 <br> get返回填充的图片(推荐小于10kb),put负责上传 <br> 地址填写<a href="http://xn--zfru1gfr6bz63i" target="_blank" rel="noreferrer">http://服务器地址</a>:端口 <br> referer填写下载时的referer请求头(会编码到生成的分享码中) <br> 可参考项目： <br><a href="https://github.com/InvertGeek/mixfileexamplejs" target="_blank" rel="noreferrer">https://github.com/InvertGeek/mixfileexamplejs</a> <br> 需要安装nodejs,运行npm i 安装依赖后点击start.bat即可启动 <br> 本地运行填写例子: 地址填写<a href="http://xn--ces6a78a93lq86c" target="_blank" rel="noreferrer">http://局域网地址</a>:端口 例如<a href="https://192.168.0.1:50001" target="_blank" rel="noreferrer">https://192.168.0.1:50001</a> <br> referer填写<a href="https://weibo.com/" target="_blank" rel="noreferrer">https://weibo.com/</a> <br> 需要无压缩,如果图片被压缩数据会丢失 <br> 上传默认采用kotlin协程并发上传,默认并发10,也就是10个图片同时上传,如果遇到频率限制调低并发即可</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>命令行自行打包的指令: ./gradlew buildFatJar <br> 推荐网站: <a href="https://curlconverter.com/node-axios/" target="_blank" rel="noreferrer">https://curlconverter.com/node-axios/</a> <br> 可直接把curl转换为axios代码,浏览器中右键复制请求为curl即可</p>',8)]))}const c=r(i,[["render",l]]);export{f as __pageData,c as default};
