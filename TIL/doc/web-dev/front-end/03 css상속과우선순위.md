��Ӱ� �켱���� ����
=============

[CSS ���]
* ���� : �������� ������ ��Ÿ���� �������� �ݿ�.
* ���� :
 �̷� ���� ���� �ܰ�� ��ø�� ������Ʈ���� �Ź� ���� ����� ���� ũ�⸦ �ο����� �ʾƵ� ��.
* ����
������ ��� CSS �Ӽ��� �̷� Ư¡�� ���� �Ǹ� ���� �߻�
 >> box-model�̶�� �Ҹ��� �Ӽ���(width, height, margin, padding, border)�� ���� ũ��� ��ġ ���õ� �Ӽ����� ����������Ʈ�� ����� ���� ����.


[Cascading  = �Ӽ��� �켱������ ���� �����Ǵ� ��]
- �ߺ� �Ǵ� �ٸ� ������ ���� ��带 �θ��� ��� � ���� ����Ǵ����� ���� ��Ģ
1. ���� ��Ŀ� ���� ����
inline > internal = external

2. ��Ģ��
+ ������ ����
<pre><code>
// example 1
<style>
span {
 color : red;
}
span {
 color : blue;
}
</style>
<span> TEXT </span>
</code></pre>
  result : blue ���߿� ����

+ ��ü���� �������� ����
<pre><code>
// example 2
<style>
span > div{
 color : red;
}
div {
 color : blue;
}
</style>
<span> <div>TEXT</div> </span>
</code></pre>
  result : red  bc ��ü������ ǥ��
    ��ü���̸� ������ �� �ֱ� ������ ���õǴ� �� 
    
+ id > class �� �켱����
<pre><code>
// example 3
<style>
#A{ color : red; }
.B{ color : blue;}
div{ color: green; }
</style>
<span id="A" class = "B"> TEXT </span>
</code></pre>
  result : red  
    
 ������ ���� �ý����� >> css specificity
 
** id�� 1�� class�� 10 �� �ִٰ� class�� �켱������ �������� ���� �ƴ�
