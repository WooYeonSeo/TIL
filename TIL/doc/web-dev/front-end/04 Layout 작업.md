Layout �۾� =CSS ������ 
* ������ �Ʒ��� ������� ��ġ�Ǵ� ���� �Ϲ���
* �������� ������ �⺻ �־��� �Ӽ���� ������, ��κ� display block inline�� ����ϴ°� ����
* ��ġ�� ���� �Ӽ� : 
  - display(block, inline, inline-block) :�±׵��� �⺻���� display �Ӽ��� ������ ���� div,p-block, span-inline
  - position (static, absolute, relative, absolute)
  - float(left, right)
  
  1. display
  + Block : ������ �Ʒ��� ����
  <pre>
  <div> block1 </div>
  <p> block2 </p>
  <div> block3 </div>
  </pre>
  > ��� : ������� ���δ�.
  
  +inline : span, strong, a
  <pre>
  <style>
  *{ display: inline;}  
  </style>
  <div> block1 </div>
  <p> block2 </p>
  <div> block3 </div>
  </pre>
  </pre>
  > ��� : ���������� �� �پ ���� 
  
  2. position : ���� Ư���� ��ġ�� �ϴ� ��� 
  + static : �⺻��.
  + absolute : top left right bottom���� ���������� ������. ������ : ���� element �� static�� �ƴ� �� 
  + relative : �ڱⰡ ��ġ�ؾ� �� ���� �������� ������� ��ġ�� ���� (top left right bottom - ���� ���ָ� static ��ġ�� ����) 
  + fixed : ��ġ ��ü�� �������� ȭ�鿡�� ���� (����)
  
  3.margin : element�� ����
  ```
  <style>
   *{
   margin : 0 0 10px 0;
   }
  </style>
  ```
  +�߰�
  css�� �ּ� 1�ε� ó����
  p tag �⺻ ��������