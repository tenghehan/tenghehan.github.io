---
layout: default
title: 学生清华小程序
assets_root: /assets/projects/sthu
---
# {{ page.title }}

* 清华校内学生使用的微信小程序，服务包括新闻播报、活动室申请、展板申请、路演申请等
* 负责在基于 Typescript 的小程序后端中实现活动室预约、活动申请等多项功能
* 对涉及 PostgreSQL 慢查询的接口，利用 Redis 实现 cache 机制提升响应速度

组成模块与技术栈：
*	前端：WXML WXSS JavaScript 
*	后端：TypeScript PostgreSQL Redis

## 界面展示

<div>
  <img src="{{ page.assets_root }}/首页.jpeg" class="mobile-ui" />
  <img src="{{ page.assets_root }}/活动室预约.jpeg" class="mobile-ui" />
  <img src="{{ page.assets_root }}/新闻.jpeg" class="mobile-ui" />
</div>