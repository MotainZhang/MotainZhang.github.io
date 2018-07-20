---
title: hexo github个人博客搭建
date: 2018-07-19 15:14:47
categories: ['前端','后端']
tags:       
comments: true    
img:               
---
### 一、添加扫描二维码关注功能
打开 themes 目录下的 next 主题配置文件，找到 Wechat Subscriber 标签，将该标签下的配置改成如下形式：

    # Wechat Subscriber
    wechat_subscriber:
      enabled: true			# 打开图片显示功能
      qcode: /images/wechat-qcode.jpg	# 需要显示的二维码图片
      description: 扫描二维码关注微信公众号，了解更多	# 在图片的底部添加描述
    复制代码

配置完成后，切记将所需要扫描的二维码图片放置在 images 文件夹下面，否则系统找不到图片。

结果如下图所示：

![](http://img5.imgtn.bdimg.com/it/u=2112417467,3935614504&fm=27&gp=0.jpg)

### 二、添加文章赞赏功能

打开 themes 目录下的 next 主题配置文件，找到 Reward 标签，将该标签下的配置改成如下形式：

    # Reward
    reward_comment: 赞赏是最好的支持与鼓励！	# 添加打赏描述
    wechatpay: /images/wechatpay.jpg	# 微信收款码图片
    alipay: /images/alipay.jpg		# 支付宝收款码图片
    #bitcoin: /images/bitcoin.png
    复制代码

配置完成后，切记将所需要收款码图片放置在 images 文件夹下面，否则系统找不到图片。

结果如下图所示：

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee049f9fd4913?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 三、添加文章版权声明功能

打开 themes 目录下的 next 主题配置文件，找到 Declare license on posts 标签，将该标签下的配置改成如下形式：

    # Declare license on posts
    post_copyright:
      enable: true		# 激活版权声明模块
      license: CC BY-NC-SA 3.0	# 版权许可协议
      license_url: https://compassblog.github.io/	# 声明的文章的可点击链接（域名）
    复制代码

配置完成后，执行如下 主目录下打开 Git Bash 命令窗口，执行如下命令开启 hexo 服务器：

    hexo s
    复制代码

浏览器访问，显示结果如下图所示：

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee049fb5f655c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 四、添加 Gitalk 评论系统

#### 1、什么是 Gitalk

Gitalk 是一个基于 Github Issue 和 Preact 开发的评论插件，这款评论插件使用 Github 登录，也可以快速提交评论，其实有一款与 Gitalk 类似的评论插件叫 Gitment，然而这款有国内大神编写的评论插件已经不再维护，因此就只能选择国外的 Gitalk 了，并且 Gitalk 支持移动端。

#### 2、为什么要用 Gitalk

我们知道 hexo 博客 的 Next 主题支持多种评论系统的继承，例如 Disqus，畅言，网易云跟帖，多说，来比力，友说，红杏等评论系统，但是这些评论系统要么不再提供服务，要么需要「科学上网」才能够加载，要么就是龟速加载，好吧，我想说的就是 Gitalk ，现在你明白为啥要用 Gitalk 了？

#### 3、Gitalk 评论系统集成

（1）新建一个 GitHub 仓库，用于存放评论的记录，如下图所示：

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee049fb8428a3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

（2）在 GitHub 上新建一个 OAuth application ： [点击这里可以直接新建](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fsettings%2Fapplications%2Fnew)

新建 OAuth application 详细说明：

    Application name //第（1）点建立的仓库名称
    Homepage URL //博客地址
    Application description //可不填
    Authorization callback URL //博客地址
    复制代码

如下图所示：

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee049fb6ab50c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

完成后，我们回获得如下图中的相关信息，后面可能会用到：

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee049fbaf681f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

（3）创建 Gitalk 的 swig 文件，在博客的主目录中打开 `themes/next/layout/_third-party/comments` 文件夹，新建 gitalk.swig 文件，在文件中配置如下代码：

    {% if not (theme.duoshuo and theme.duoshuo.shortname) and not theme.duoshuo_shortname %}
      
      {% if theme.gitalk.enable %}  //_config.yml文件若没有添加enable: true可删除该判断
    
        {% if theme.gitalk.distractionFreeMode  %}      
    	  <link rel='stylesheet' href="https://yiyeti.cc/usr/themes/veryse/css/gitalk.css">
          <script src="https://yiyeti.cc/usr/themes/veryse/css/gitalk.min.js"></script>
          <script type="text/javascript">
              var gitalk = new Gitalk({
                clientID:  '{{theme.gitalk.clientID}}', 
                clientSecret: '{{theme.gitalk.clientSecret}}',
                id: window.location.pathname,
                repo: '{{theme.gitalk.repo}}', 
                owner: '{{theme.gitalk.owner}}', 
                admin: '{{theme.gitalk.admin}}', 
                distractionFreeMode: '{{theme.gitalk.distractionFreeMode}}',
              })
              gitalk.render('gitalk-container')
          </script>
        {% endif %}
    
      {% endif %}
    {% endif %}
    复制代码

（4）在同样的目录下找到并打开 `index.swig` 文件，在文件中配置如下代码引入 gitalk.swig 文件：

    {% include 'gitalk.swig' %}
    复制代码

（5）在博客的主目录中打开 `themes/next/layout/_partials/` 文件夹，找到并打开 `comments.swig` 文件，找到最后一个if分支，即下面这个分支代码：

    {% elseif theme.valine.appid and theme.valine.appkey %}
          <div id="vcomments"></div>
    复制代码

在这个 if 分支后加一个 Gitalk 的分支，代码如下：

    {% elseif theme.gitalk.enable %}
     <div id="gitalk-container"></div>
    复制代码

（6）在 `themes/next/_config.xml` 主题配置文件中加入如下配置：

    gitalk:
      enable: true	# 是否开启 Gitalk 评论
      owner:  	# GitHub 用户名	 
      repo: 		#仓库名称
      ClientID: ******
      ClientSecret: ******
      admin: 	# GitHub 用户名
      distractionFreeMode: true
    复制代码

到这里，Gitalk 评论系统基本就已经集成了。

**后记：** 最近 GitHub 限制了访问 label 的长度，即当我们博客文章的标题标签转换成 Issue超过 50 个字符时，Gitalk 评论系统便无法进行初始化，即对我们博客题目有了限制。而对于这个问题的解决，目前的想法是可以通过 md5 转换的方式封装 id，后续如果有好的解决办法，再更新吧。

扫描二维码关注微信公众号，了解更多


=====================

![](https://user-gold-cdn.xitu.io/2018/4/22/162ee052f2f34569?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)