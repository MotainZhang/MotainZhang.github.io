---
title: charles
date: 2018-07-19 15:14:47
categories: ['工具']
tags:       
comments: true    
img:             
---
<article data-v-13f76525="" itemscope="itemscope" itemtype="http://schema.org/Article" class="article" data-v-3f216172=""><meta itemprop="url" content="https://juejin.im/post/5b4f005ae51d45191c7e534a"><meta itemprop="headline" content="Charles抓包工具二三谈"><meta itemprop="keywords" content="Node.js,Java,百度,Charles"><meta itemprop="datePublished" content="2018-07-18T09:03:51.151Z"><meta itemprop="image" content="https://user-gold-cdn.xitu.io/2018/7/18/164aca09d3137b4e?w=900&amp;h=700&amp;f=png&amp;s=273867"><div itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><meta itemprop="name" content="杭城小刘"><meta itemprop="url" content="https://juejin.im/user/57c108b8a633bd005d67e4a6"></div><div itemprop="publisher" itemscope="itemscope" itemtype="http://schema.org/Organization"><meta itemprop="name" content="掘金"><div itemprop="logo" itemscope="itemscope" itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://b-gold-cdn.xitu.io/icon/icon-white-180.png"><meta itemprop="width" content="180"><meta itemprop="height" content="180"></div></div><div data-v-13f76525="" class="author-info-block">[<div data-v-b2db8566="" data-v-1b9df826="" data-v-13f76525="" data-src="https://user-gold-cdn.xitu.io/2018/6/13/163f9d3d25f8b421?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" class="lazy avatar avatar loaded" title="" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2018/6/13/163f9d3d25f8b421?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1&quot;);"></div>](/user/57c108b8a633bd005d67e4a6)<div data-v-13f76525="" class="author-info-box">[杭城小刘](/user/57c108b8a633bd005d67e4a6)<div data-v-13f76525="" class="meta-box"><time data-v-13f76525="" datetime="2018-07-18T09:03:51.151Z" title="Wed Jul 18 2018 17:03:51 GMT+0800 (中国标准时间)" class="time">2018年07月18日</time><span data-v-13f76525="" class="views-count">阅读 1003</span><!----></div></div></div><div data-v-b2db8566="" data-v-009ea7bb="" data-v-13f76525="" data-src="https://user-gold-cdn.xitu.io/2018/7/18/164aca09d3137b4e?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1" class="lazy thumb article-hero loaded" style="background-image: url(&quot;https://user-gold-cdn.xitu.io/2018/7/18/164aca09d3137b4e?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1&quot;); background-size: cover;"></div>

# Charles抓包工具二三谈
<div data-v-13f76525="" itemprop="articleBody" class="article-content">

### 一、 下载地址

Charles的下载地址：[charles](https://link.juejin.im?target=https%3A%2F%2Fpan.baidu.com%2Fs%2F1fkeKeIz1Yvz2HRFjk3P-0g)
因为Charles只有30天的试用期，所以在这里给一个破解版的包：[
破解包](https://link.juejin.im?target=https%3A%2F%2Fpan.baidu.com%2Fs%2F1QqSiEwMGIFrxwyKYg_6Kdw)

### 二、破解方法

*   像正常安装应用一样，点击安装，之后将应用包拖到Application目录中。
*   右击Charles.app，显示包内容，然后将第二个链接下载下来的破解包复制黏贴到此目录下替换。

### 三、使用教程

*   Charles上的设置。

    在Charles的菜单栏上选择"Proxy" -&gt; "Proxy Settings",填入代理端口8888，并且勾选"Enable transparent HTTP proxying",就完成了Charles上的设置，如下图所示：

    <figure>![步骤1](https://user-gold-cdn.xitu.io/2018/7/18/164ac9aa738ccd2a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
<figure>![步骤2](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a9bf3ea1ac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>

*   在电脑“系统偏好设置”中心打开网络查看本机ip地址，打开手机“设置”-&gt;“无线局域网”，进入选中的网络，HTTP代理选中“手动”。服务器处填写电脑ip地址，端口写8888。设置好后，我们打开iPhone上的任意需要网络通讯的程序，就可以看到Charles弹出请求的确认菜单，单击"Allow"按钮，即可完成设置。
<figure>![手机设置](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a9b90f9dcc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>

### 四、使用 Charles mock 接口数据

发现有些时候我们需要对一个接口进行黑盒测试，我们可以通过 Charles 进行模拟，或者对某些 App 查看判断业务逻辑也可以用此方法。

*   选中 Charles 的具体某个接口，右击选择 “Map Local”。
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9fb5d5c214f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
*   在弹出的对话框中，点击红色圈出来的按钮，然后选择本地准备好的 JSON 文件
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a9a68f71a8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
这2个步骤做完后就可以 mock 接口数据了，每次要做操作，只需要修改本地的 JSON 文件即可
当然，这是对于简单的调试，最好还是会写一些接口开发，比如 Node.js 、PHP、Java、Python等等

### 五、抓取 HTTPS 数据

*   在电脑端 Charles 上菜单栏 Help -&gt; SSl Proxying -&gt; Install Charles Root Certificate
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9aa40822368?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
*   在 keychain 处将新安装的证书设置为永久信任
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9aab5332151?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
*   在 Charles 菜单栏 Proxy -&gt; SSL Proxying Setting -&gt; 点击 Add 按钮 -&gt; 在弹出的对对话框设置需要监听的 HTTPS 域（*:代表通配符）
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9aaad2c0ff8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
*   在手机上链接好电脑对应的 ip 和端口
*   在手机浏览器访问 Chls.pro/ssl 安装证书，并信任
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a99ea05b2e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
*   iPhone 打开设置 -&gt; 通用 -&gt; 关于本机 -&gt; 证书信任设置 -&gt; 开启开关
<figure>![](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a9ca26c907?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>
尽情玩乐吧
<figure>![抓取京东HTTPS数据](https://user-gold-cdn.xitu.io/2018/7/18/164ac9a9a966fafe?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)<figcaption></figcaption></figure>

* * *

看到下方评论说“手机如果有vpn的话，需要现将vpn关闭才能成功”。如果各位在手机开着 VPN 的情况下无法抓包，那么尝试关闭 VPN。（具体未尝试）

</div></article>