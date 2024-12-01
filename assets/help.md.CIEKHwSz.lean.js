import{_ as e,c as r,a0 as i,o as l}from"./chunks/framework.p2VkXzrt.js";const m=JSON.parse('{"title":"MixFile介绍","description":"","frontmatter":{},"headers":[],"relativePath":"help.md","filePath":"help.md"}'),t={name:"help.md"};function o(d,a,p,h,n,b){return l(),r("div",null,a[0]||(a[0]=[i('<p><img src="https://gitlab.com/ivgeek/mixfile/-/wikis/uploads/a7fb84d133a793b51472d58ebbad909b/icons8-apache-netbeans-96.png" alt="icons8-apache-netbeans-96"></p><h1 id="mixfile介绍" tabindex="-1">MixFile介绍 <a class="header-anchor" href="#mixfile介绍" aria-label="Permalink to &quot;MixFile介绍&quot;">​</a></h1><p>MixFile是一款可以上传加密文件并分享的安卓APP <br> 可实现本地加密上传,加密下载文件,在线播放加密视频 <br> 加密时会自动生成随机密钥进行加密,上传完成后,密钥 文件地址 文件大小等信息会附加在分享码中 <br> 将分享码发送给他人即可实现分享文件 <br> 局域网内只要一台设备安装了此软件,其他设备均可通过网页端,上传/下载/播放加密文件 <br> 已发布版本: <a href="https://github.com/InvertGeek/MixFile/releases" target="_blank" rel="noreferrer">https://github.com/InvertGeek/MixFile/releases</a></p><h2 id="局域网服务器" tabindex="-1">局域网服务器 <a class="header-anchor" href="#局域网服务器" aria-label="Permalink to &quot;局域网服务器&quot;">​</a></h2><p>MixFile启动时会自动运行文件服务器,用于代理加密解密上传下载的流量,可实现同一局域网设备中直接下载上传加密文件 <br> 在同一局域网的设备访问文件服务器地址即可直接访问MixFile网页版 <br> 可通过局域网服务器直接上传下载文件,另外提供http api <br> /api/upload?name=文件名 使用put请求即可上传文件,成功后会返回分享码(长分享码格式) <br> /api/download?s=分享码 可直接下载或预览文件 <br> 如果默认播放器功能不够多,或者需要同时下载多个文件,以及文件管理等功能 <br> 可直接复制文件的局域网地址到任何浏览器中播放/下载 <br> 可在桌面长按app图标在后台启动局域网服务器 <br> 给予自启动权限后,即可让局域网服务器自动运行 <br> 局域网服务器如果无响应请尝试重启APP</p><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>请到手机的应用设置中关闭本应用的省电限制,以及允许通知权限,否则局域网服务器无法在后台运行 <br> 推荐使用安卓10以上运行本APP，旧版本可能出现无法下载文件的问题</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>上传文件之前会在本地使用aes-gcm-128算法使用随机密钥加密后再上传, <br> 注意: 所有的文件都是以图片的方式上传的,例如100MB的文件,会自动按照1mb大小分割成100份 <br> 每份文件单独使用aes加密后隐藏封装到一张空白图片中,所有文件上传完毕后,获得100个地址url <br> 最后再把这100个地址url的数据使用gzip压缩aes加密后 <br> 封装到一张图片中作为索引,1mb索引大概能储存20G文件信息的url <br> 下载时会根据索引解析,视频播放时会智能识别对应进度条的索引文件解析后返回给客户端 <br> 上传完成后,本次加密使用的随机密钥会携带在分享码中(分享码默认使用不可见字符附加信息) <br> 解密时同理,只要不泄漏分享码，即使是储存文件的服务器也无法知晓你储存的文件内容</p><h2 id="安全性" tabindex="-1">安全性 <a class="header-anchor" href="#安全性" aria-label="Permalink to &quot;安全性&quot;">​</a></h2><p>文件是在本地加密后上传的,不泄漏分享码任何人无法解密 <br> aes-128算法使用现代的计算机每秒尝试一亿次,破解时间远大于已知宇宙年龄,除非出现量子计算机 <br> gcm模式自带标签校验,即使上传后的文件被恶意篡改一个字节,校验也会失败,导致无法成功下载 <br> 注意: 上传的文件无法删除</p><h2 id="分享码" tabindex="-1">分享码 <a class="header-anchor" href="#分享码" aria-label="Permalink to &quot;分享码&quot;">​</a></h2><p>分享码中包含了文件名,文件地址,文件大小,密钥等信息,默认采用零宽空白字符进行编码,可到设置中关闭 <br> 兼容性: 即使您二次开发增加了自定义的上传节点,生成的分享码也可被任何其他版本的APP解析</p><h2 id="上传失败" tabindex="-1">上传失败 <a class="header-anchor" href="#上传失败" aria-label="Permalink to &quot;上传失败&quot;">​</a></h2><p>如果上传到一半中断请确保网络稳定,可以到设置中增加失败重试次数,网速较慢请调低上传并发 <br> 默认上传并发是10,也就是10个分片同时上传,例如如果网速为5mb/s建议调整为5</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>上传视频无法播放,播放没有声音,或者只有声音黑屏怎么办? <br> 浏览器不支持视频编码导致,推荐使用uc浏览器或者下载potplayer,点击potplayer中的打开,打开链接,粘贴局域网地址播放 <br> 如果需要字幕.potplayer也可直接添加字幕 <br> 文件使用了免费的第三方服务进行储存,不保证能永久保存,也不保证服务稳定性,文件可能随时失效 <br> 如果出现无法上传或下载失败等问题,可进行更新或反馈issue</p><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><h3 id="测试视频-coraline-分享码-手机安装mixfile后点击可直接弹出文件信息" tabindex="-1">测试视频(coraline)分享码(手机安装mixfile后点击可直接弹出文件信息): <a class="header-anchor" href="#测试视频-coraline-分享码-手机安装mixfile后点击可直接弹出文件信息" aria-label="Permalink to &quot;测试视频(coraline)分享码(手机安装mixfile后点击可直接弹出文件信息):&quot;">​</a></h3><p>mf://demmGp0ywJ1A29dfuKpqbCCdBe6fmd15daMSjYm8UIvTxcZMXOS8u5r4ruWjPb8U4EF2Qdw2mvr07qpIKS37SMlfQpKS9OQc1vLDlReDGGAQqDmdlqp9snNTx5xk4BdaHGkLf0CYPqFStejRC7GpiDFwBoCRyGkeGZ4CaK75hM1ff4pIGwdVawE6ItsGPOeUSnWsJuE1n2xK5HXimrHrAqzNlQUoO8YWm4JfwGEdfSl</p><h3 id="点击直接播放-需要在后台运行mixfile并且取消省电限制" tabindex="-1">点击直接播放(需要在后台运行mixfile并且取消省电限制): <a class="header-anchor" href="#点击直接播放-需要在后台运行mixfile并且取消省电限制" aria-label="Permalink to &quot;点击直接播放(需要在后台运行mixfile并且取消省电限制):&quot;">​</a></h3><p><a href="http://127.0.0.1:4719/api/download?s=demmGp0ywJ1A29dfuKpqbCCdBe6fmd15daMSjYm8UIvTxcZMXOS8u5r4ruWjPb8U4EF2Qdw2mvr07qpIKS37SMlfQpKS9OQc1vLDlReDGGAQqDmdlqp9snNTx5xk4BdaHGkLf0CYPqFStejRC7GpiDFwBoCRyGkeGZ4CaK75hM1ff4pIGwdVawE6ItsGPOeUSnWsJuE1n2xK5HXimrHrAqzNlQUoO8YWm4JfwGEdfSl" target="_blank" rel="noreferrer">http://127.0.0.1:4719/api/download?s=demmGp0ywJ1A29dfuKpqbCCdBe6fmd15daMSjYm8UIvTxcZMXOS8u5r4ruWjPb8U4EF2Qdw2mvr07qpIKS37SMlfQpKS9OQc1vLDlReDGGAQqDmdlqp9snNTx5xk4BdaHGkLf0CYPqFStejRC7GpiDFwBoCRyGkeGZ4CaK75hM1ff4pIGwdVawE6ItsGPOeUSnWsJuE1n2xK5HXimrHrAqzNlQUoO8YWm4JfwGEdfSl</a></p><h3 id="webdav挂载" tabindex="-1">WebDAV挂载 <a class="header-anchor" href="#webdav挂载" aria-label="Permalink to &quot;WebDAV挂载&quot;">​</a></h3><p><a href="https://github.com/InvertGeek/mixfile_webdav" target="_blank" rel="noreferrer">https://github.com/InvertGeek/mixfile_webdav</a></p>',24)]))}const f=e(t,[["render",o]]);export{m as __pageData,f as default};
