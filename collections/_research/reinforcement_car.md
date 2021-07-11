---
layout: default
title: Reinforcement Car
assets_root: /assets/research/car
---
# Reinforcement Car

**Reinforcement Car** 是一个基于强化学习的赛车游戏 AI 练习项目。项目小组使用 Python 独立实现了一款简单的赛车游戏，并基于 DQN[^1] 算法实现了这款游戏的一个简单的 AI 模型，玩家可以和 AI 模型进行比赛，同时还实现了模型状态的可视化功能。

对于当前环境的状态表示，我们采用小车前方五个角度的障碍物距离：

<img src="{{ page.assets_root }}/图片 1.png" width="80%" />

下面的视频展示了在一条自定义赛道上，从第一次训练到第一次冲过终点线的全过程。

<video weight="480px" height="360px" controls autoplay muted>
  <source src="{{ page.assets_root }}/训练过程-15s.mp4" type="video/mp4" />
</video>

项目代码见 [GitHub](https://github.com/komejisatori/ReinforcementCar)。

[^1]: Mnih V, Kavukcuoglu K, Silver D, et al. Playing atari with deep reinforcement learning[J]. arXiv preprint arXiv:1312.5602, 2013