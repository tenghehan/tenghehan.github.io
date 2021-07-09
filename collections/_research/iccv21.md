---
layout: default
title: "A Free Lunch to Person Re-identification: Learning from Automatically Generated Noisy Tracklets"
assets_root: /assets/research/iccv21
---
# A Free Lunch to Person Re-identification: Learning from Automatically Generated Noisy Tracklets

## Abstract

> A series of unsupervised video-based re-identification (re-ID) methods have been proposed to solve the problem of high labor cost required to annotate re-ID datasets. But their performance is still far lower than the supervised counterparts. In the mean time, clean datasets without noise are used in these methods, which is not realistic. In this paper, we propose to tackle this problem by learning re-ID models from automatically generated person tracklets by multiple objects tracking (MOT) algorithm. To this end, we design a tracklet-based multi-level clustering (TMC) framework to effectively learn the re-ID model from the noisy person tracklets. First, intra-tracklet isolation to reduce ID switch noise within tracklets; second, alternates between using inter-tracklet association to eliminate ID fragmentation noise and network training using the pseudo label. Extensive experiments on MARS with various manually generated noises show the effectiveness of the proposed framework. Specifically, the proposed framework achieved mAP 53.4% and rank-1 63.7% on the simulated tracklets with strongest noise, even outperforming the best existing method on clean tracklets. Based on the results, we believe that building re-ID models from automatically generated noisy tracklets is a reasonable approach and will also be an important way to make re-ID models feasible in real-world applications.

行人重识别技术(re-ID)，其主要任务是利用计算机视觉技术在若干候选图像或视频中寻找特定ID的行人，行人重识别技术作为行人识别和行人追踪的重要组成部分，在智能安防领域获得广泛的关注。

行人重识别数据集的标注成本及难度都很高，因此有越来越多关于无监督行人重识别方法的研究，但这些方法的效果通常与有监督方法的效果存在较大差距。

针对上述情况，我们提出了一种 Tracklet-based Multi-level Clustering (TMC) 的方法，利用多目标追踪算法得到的追踪结果来进行Re-ID模型的学习。首先，通过intra-tracklet isolation来降低tracklet内部的ID Switch噪声；然后通过inter-tracklet association对tracklet间的ID进行关联，关联结果作为伪标签监督模型的训练。
我们的方法对于强噪声的追踪结果依然表现出良好的效果，甚至优于一些已有的无监督方法在纯净数据集上的结果；同时我们的方法缩短了无监督行人重识别方法与有监督行人重识别方法的差距。

## Method

![]({{ page.assets_root }}/聚类去噪.png)

Multi-object Tracking的结果中可能存在噪声，其中ID Switch噪声（一个tracklet中包含了多个行人）对模型的训练效果有负面影响。通过观察追踪的结果，我们发现ID Switch通常发生在两个行人的运动轨迹非常相似或者可以自然衔接的情况下，而与行人的外观是否相似没有直接的关系。因此我们利用tracklet内部DBSCAN聚类的方法，通过每帧行人图片的外观feature来将不同ID的行人区分开。
下图是对聚类去噪效果的可视化展示，图中的每个Point表示一帧图片的feature，(a)(c)的颜色表示行人的真实ID，(b)(d)的颜色表示内部聚类的结果。

![]({{ page.assets_root }}/framework.png)

首先，对所有tracklets做内部聚类操作，降低ID Switch噪声的干扰，然后进入训练阶段，在每个Epoch开始前，利用tracklets间的DBSCAN聚类获取Hard伪标签，同时将相同的数据输入Mean Net，将其输出作为Soft伪标签，两种伪标签共同监督Net的训练，再每个Epoch结束时，用Net的权重通过Exponential Moving Average的方式更新Mean Net。

Loss function:

$$ \mathcal{L}_{i d}(\boldsymbol{\theta})=\frac{1}{N} \sum_{i=1}^{N} \mathcal{L}_{c e}\left(C\left(F\left(\boldsymbol{x}_{i} \mid \boldsymbol{\theta}\right)\right), \tilde{\boldsymbol{y}}_{i}\right) $$

$$ \begin{aligned}
\mathcal{L}_{t r i}(\boldsymbol{\theta})=\frac{1}{N} \sum_{i=1}^{N} \max \left(0,\left\|F\left(\boldsymbol{x}_{i} \mid \boldsymbol{\theta}\right)-F\left(\boldsymbol{x}_{i, p} \mid \boldsymbol{\theta}\right)\right\|\right.
&\left.+m-\left\|F\left(\boldsymbol{x}_{i} \mid \boldsymbol{\theta}\right)-F\left(\boldsymbol{x}_{i, n} \mid \boldsymbol{\theta}\right)\right\|\right)
\end{aligned} $$

$$ \mathcal{L}_{\text {sid }}(\boldsymbol{\theta})=-\frac{1}{N} \sum_{i=1}^{N}\left(C\left(F\left(\boldsymbol{x}_{i} \mid E^{(T)}[\boldsymbol{\theta}]\right)\right) \cdot \log C\left(F\left(\boldsymbol{x}_{i} \mid \boldsymbol{\theta}\right)\right)\right) $$

$$ \mathcal{L}_{\text {stri }}(\boldsymbol{\theta})=\frac{1}{N} \sum_{i=1}^{N} \mathcal{L}_{\text {bce }}\left(\mathcal{T}_{i}(\boldsymbol{\theta}), \mathcal{T}_{i}\left(E^{(T)}[\boldsymbol{\theta}]\right)\right) $$

$$ \begin{aligned}
\mathcal{L}(\boldsymbol{\theta}) &=\left(1-\lambda_{i d}\right) \mathcal{L}_{i d}(\boldsymbol{\theta})+\lambda_{i d} \mathcal{L}_{\text {sid }}(\boldsymbol{\theta})+\left(1-\lambda_{t r i}\right) \mathcal{L}_{t r i}(\boldsymbol{\theta})+\lambda_{\text {tri }} \mathcal{L}_{\text {stri }}(\boldsymbol{\theta})
\end{aligned} $$

![]({{ page.assets_root }}/对比.png)


## 落地
* ICCV 一作在投
* 专利：基于多目标追踪的低成本自监督行人重识别方法
* 应用于清华大学校保卫处智能安防系统
