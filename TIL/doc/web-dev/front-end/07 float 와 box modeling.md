07 float �� box modeling
-----------------------

1. float 
 * ������ ��ġ���� ���ܷ� �յ� ���ִ� �� 
 * ����� �������� ������ �ܸ������� ������
 <pre>
 <style>
 .blue{background-color:blue;}
 .green{
   background-color:green;
   float:left; 
 }
 .red{background-color:red;}
 
 </style>
 <html>
  <div class="blue">1</div>
  <div class="green">2</div>
  <div class="red">3</div>
 </html>
 </pre>
 - green �� float:left �� �Ǹ鼭 �� ������ �� �� ������ �ν� red�� green �Ʒ��� ���� �� .
 - z ������ ���ִ� ���������� 2���������� �� ���� �����Ƿ� ��ġ�� Ȱ�� ���� 
 + **�� �ڽ��� float �� ��� �� ���ֱ� ������ �ڽ����� �������� ����. ���� �� �θ� ����� �ִ� ��� ���� ���� �� �ִ�. ���� overflow�� �־ float�� �ν��ϰ� ��.** 
    overflow : hidden; �Ǵ� hidden;
 + float �Ӽ��� ���� 'clear:both' 
  
 2. Box Modeling : margin border padding 
  * margin : element ���� ����
  * border : ������ ǥ��
  * padding : ���������� ����
  * box-shadow : border �ۿ� �׵θ��� �׸� �� �ִ� �Ӽ���
  + ǥ�� : margin : {0 0 0 10px};
 
 3. Element Size
   * block���� �ڽ��� width�� �θ��� width �� ���� 
   
 4. ** Box Sizing **
 * padding �Ӽ��� �ø��� ������Ʈ�� ũ�Ⱑ �޶��� 
 * box-sizing : border-box�� ������Ʈ�� ũ�⸦ �����ϸ鼭 padding ���� ���� (������ ǥ�� ���� ���� ��)
 - �⺻���� contents-box
 
 css-grid flex �Ӽ����� �߰��ǰ� ������ �������� ���� ��Ȳ Ȯ�� �ϱ�
 
 
 
