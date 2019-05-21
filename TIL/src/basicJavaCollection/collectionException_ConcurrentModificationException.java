package basicJavaCollection;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class collectionException_ConcurrentModificationException {
	public static List<Integer> list = new ArrayList<>();

	public static void main(String[] args) {
		// 데이터 세팅
		setData();

		// 발생 케이스 : for-each문은 Iterator를 사용한다. 이 반복문 내부에서 add/remove등과 처럼 리스트를 수정하는
		// 오퍼레이션을 하는 경우
		//makeConcurrentModificationException2();
		// 1. for loop 조건
		solvebyForLoop();
		// 2. Iterator :
		// 이 방법으로 할때는 설명한 것 처럼 무한루프나, IndexOutOfBoundary 예외 또는 실행시 발생할 수 있는 여러가지 경우를
		// 고려해야 한다.
		solvebyIterator();
		// 3. CopyOnWriteArray
		solvebyCopyOnWriteArray();
		// 4. EditLater
		solvebyEditLater();
		// 5. removeIf와 lambda expression
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
	
	// 1. for loop 조건
	private static void solvebyForLoop() {
		// TODO Auto-generated method stub
		for (int i = 0; i < list.size(); i++) {
			if (i == 1) {
				list.remove(i);
			}
			System.out.println("인덱스: " + i + " - 값:" + list.get(i));
		}
	}
	
	//2. Iterator :
	private static void solvebyIterator() {
		// TODO Auto-generated method stub
		Iterator<Integer> it = list.iterator();
		while (it.hasNext()) {
			Integer i = it.next();
			System.out.println("값:" + i);
			if (i == 2) {
				it.remove();
			}
		}

		System.out.println("---------------");
		for (Integer i : list) {
			System.out.println("값:" + i);
		}

	}
	// 3. CopyOnWriteArray
	private static void solvebyCopyOnWriteArray() {
		// TODO Auto-generated method stub
		// java.util.concurrent패키지에 포함된 클래스로, 컬렉션에 어떤 수정작업이 일어나는 경우 새 컬렉션을 만들어 수정
		// Synchronization은 JVM이 알아서 해결
		// add는 내부적으로 복사된 새 ArrayList에 더해지므로 ConcurrentModificationException이 발생하지 않는다.
		// 반복을 마친 후 다시 반복해 보면 add했던 값들이 모두 들어간 것을 확인할 수 있다.
		// 이 방법은 컬렉션에 값이 많이 들어있고 자주 수정해야 하는 경우 성능이 좋지 않을 수 있다.
		List<Integer> thislist = new CopyOnWriteArrayList<>();
		thislist.add(1);
		thislist.add(2);
		thislist.add(3);

		for (Integer i : thislist) {
			System.out.println("값:" + i);
			if (i == 2) {
				thislist.remove(i);
			}
		}

		System.out.println("--------");
		for (Integer i : thislist) {
			System.out.println("값:" + i);
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
			System.out.println("값:" + i);
		}

		list.removeAll(toRemove);
		System.out.println("--------");
		for (Integer i : list) {
			System.out.println("값:" + i);
		}

	}

	// 5. removeIf와 lambda expression
	private static void solvebyRemoveIfLamda() {
		// TODO Auto-generated method stub
		list.removeIf(i -> i == 2);

		for (Integer i : list) {
			System.out.println("값:" + i);
		}

	}
}
