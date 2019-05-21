package basicJavaCollection;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class collectionException_ConcurrentModificationException {
	public static List<Integer> list = new ArrayList<>();

	public static void main(String[] args) {
		// ������ ����
		setData();

		// �߻� ���̽� : for-each���� Iterator�� ����Ѵ�. �� �ݺ��� ���ο��� add/remove��� ó�� ����Ʈ�� �����ϴ�
		// ���۷��̼��� �ϴ� ���
		//makeConcurrentModificationException2();
		// 1. for loop ����
		solvebyForLoop();
		// 2. Iterator :
		// �� ������� �Ҷ��� ������ �� ó�� ���ѷ�����, IndexOutOfBoundary ���� �Ǵ� ����� �߻��� �� �ִ� �������� ��츦
		// ����ؾ� �Ѵ�.
		solvebyIterator();
		// 3. CopyOnWriteArray
		solvebyCopyOnWriteArray();
		// 4. EditLater
		solvebyEditLater();
		// 5. removeIf�� lambda expression
		solvebyRemoveIfLamda();

	}

	private static void setData() {
		list.add(1);
		list.add(2);
		list.add(3);
		list.add(4);
	}

	private static void makeConcurrentModificationException2() {
		for (Integer i : list) {
			list.remove(i); // ConcurrentModificationException occur
		}
	}
	
	// 1. for loop ����
	private static void solvebyForLoop() {
		// TODO Auto-generated method stub
		for (int i = 0; i < list.size(); i++) {
			if (i == 1) {
				list.remove(i);
			}
			System.out.println("�ε���: " + i + " - ��:" + list.get(i));
		}
	}
	
	//2. Iterator :
	private static void solvebyIterator() {
		// TODO Auto-generated method stub
		Iterator<Integer> it = list.iterator();
		while (it.hasNext()) {
			Integer i = it.next();
			System.out.println("��:" + i);
			if (i == 2) {
				it.remove();
			}
		}

		System.out.println("---------------");
		for (Integer i : list) {
			System.out.println("��:" + i);
		}

	}
	// 3. CopyOnWriteArray
	private static void solvebyCopyOnWriteArray() {
		// TODO Auto-generated method stub
		// java.util.concurrent��Ű���� ���Ե� Ŭ������, �÷��ǿ� � �����۾��� �Ͼ�� ��� �� �÷����� ����� ����
		// Synchronization�� JVM�� �˾Ƽ� �ذ�
		// add�� ���������� ����� �� ArrayList�� �������Ƿ� ConcurrentModificationException�� �߻����� �ʴ´�.
		// �ݺ��� ��ģ �� �ٽ� �ݺ��� ���� add�ߴ� ������ ��� �� ���� Ȯ���� �� �ִ�.
		// �� ����� �÷��ǿ� ���� ���� ����ְ� ���� �����ؾ� �ϴ� ��� ������ ���� ���� �� �ִ�.
		List<Integer> thislist = new CopyOnWriteArrayList<>();
		thislist.add(1);
		thislist.add(2);
		thislist.add(3);

		for (Integer i : thislist) {
			System.out.println("��:" + i);
			if (i == 2) {
				thislist.remove(i);
			}
		}

		System.out.println("--------");
		for (Integer i : thislist) {
			System.out.println("��:" + i);
		}

	}

	// 4.EditLater
	private static void solvebyEditLater() {
		// TODO Auto-generated method stub
		List<Integer> toRemove = new ArrayList<>();

		for (Integer i : list) {
			if (i == 2) {
				toRemove.add(i);
			}
			System.out.println("��:" + i);
		}

		list.removeAll(toRemove);
		System.out.println("--------");
		for (Integer i : list) {
			System.out.println("��:" + i);
		}

	}

	// 5. removeIf�� lambda expression
	private static void solvebyRemoveIfLamda() {
		// TODO Auto-generated method stub
		list.removeIf(i -> i == 2);

		for (Integer i : list) {
			System.out.println("��:" + i);
		}

	}
}
