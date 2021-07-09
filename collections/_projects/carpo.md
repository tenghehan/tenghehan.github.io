---
layout: default
title: 模型研发平台 Carpo
assets_root: /assets/projects/carpo
---
# {{ page.title }}

用户可交互的人工智能模型研发平台，通过网页操作便捷的完成模型训练等工作。
负责平台各模块间运行的通信机制的开发及部分模块的前后端功能开发。

## 功能介绍

模型的创建与管理：提供多种训练任务类型，包括图像分类、物体检测等。自由选择训练数据、预处理操作以及自由设置超参数、损失函数。实时呈现训练状态曲线，可下载完成训练的模型及训练日志。可以对完成训练的模型进行测试。

![]({{ page.assets_root }}/模型创建.png)

![]({{ page.assets_root }}/模型管理.png)

![]({{ page.assets_root }}/模型检验.png)

数据集的上传与管理：将数据集上传至平台并进行管理，可选择与其他用户分享自己的数据集，同时也可以下载其他用户分享的数据集。

组成模块与技术栈：
*	前端 carpe-vue  Vue前端框架
*	后端 carpo-laravel Laravel后端框架 Mysql数据集
*	训练服务 carpo-support 与具体训练任务有关的工具库或python脚本
