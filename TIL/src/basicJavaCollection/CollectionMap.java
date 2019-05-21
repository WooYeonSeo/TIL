package basicJavaCollection;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class CollectionMap {
	static Map<Integer,String> map = new HashMap<>();
	public static void main(String[] args) {
		//set map data
		setData();
		
		foreachFunc();
		entrySetFunc(); //use entryset
		keySetFunc();
		iteratorFunc(); 
		StreamForeachFunc();
	}

	private static void setData() {
		map.put(1, "s1");
		map.put(2, "s2");
		map.put(3, "s3");
	}

	// foreach
	private static void foreachFunc() {
		map.forEach((key, value) -> System.out.println(key + " - " + value));
	}
	
	//entrySet
	private static void entrySetFunc() {
		 for (Map.Entry<Integer, String> entry : map.entrySet()) {
			 Integer key = entry.getKey();
		     Object value = entry.getValue();
		     System.out.println("item " + key + " - " + value);
		 }
	}
	
	//keySet
	private static void keySetFunc() {
		for (Integer key : map.keySet() ) {
			System.out.println(key + " - " + map.get(key));
		}
	}
	
	// iterator
	private static void iteratorFunc() {
		// keySet의 iterator를  반복
		Iterator<Integer> it = map.keySet().iterator();
		while(it.hasNext()) {
			Integer key = it.next();
			String value = map.get(key);
			System.out.println(key + " - " + value);
		}
	}
	
	//Stream foreach
	private static void StreamForeachFunc() {
		map.keySet().stream().forEach(key -> System.out.println(key + " - " + map.get(key)));
	}

}
