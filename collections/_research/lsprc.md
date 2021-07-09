---
layout: default
title: "大规模行人检索竞赛 (LSPRC)"
assets_root: /assets/research/lsprc
---
# 大规模行人检索竞赛(LSPRC[^1]) - 属性识别赛道

![]({{ page.assets_root }}/Backbone.png)

Backbone:
将所有的属性分成Global attributes和Part attributes两组，构建Multi-task模式。使用ResNet-34作为backbone，将CAS module插入Layer1至Layer4，backbone的输出再经过global average pooling和linear layer得到两组属性预测结果。

![]({{ page.assets_root }}/CAS.png)

CAS module：
复现Multi-Task Learning via Co-Attentive Sharing for Pedestrian Attribute Recognition
CAS module的主要作用是融合两条分支包含的信息并使用了多种维度的attention(spatial attention, channel attention)，同时CAS module不改变输入的维度，可以方便的插入到已有的Multi-task模型中。

Weighted Loss:
解决属性分布不平衡的问题。

$$ 
\begin{array}{c}
\operatorname{Loss}=-\frac{1}{N} \sum_{i=1}^{N} \sum_{l=1}^{L} w_{l}\left(y_{i l} \log \left(\hat{p}_{i l}\right)+\left(1-y_{i l}\right) \log \left(1-\hat{p}_{i l}\right)\right) \\
w_{l}=\left\{\begin{array}{ll}
\exp \left(\left(1-p_{l}\right) / \sigma^{2}\right), & y_{l}=1 \\
\exp \left(p_{l} / \sigma^{2}\right), & y_{l}=0 \\
\end{array}\right.\\
\end{array}
$$

\\(w_l\\)表示第\\(l\\)个属性的loss权重，对于正样本和负样本值是不同的，\\(y_l\\)表示样本第\\(l\\)个属性的ground truth，\\(p_l\\)表示第l个属性的正样本率。
\\( \hat{p}_{il} \\)表示第\\(i\\)个样本的第\\(l\\)个属性的预测结果。


独立负责属性识别赛道，获得第12名的成绩。

[^1]: Large-Scale Pedestrian Retrieval Competition
