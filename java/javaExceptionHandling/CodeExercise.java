package javaExceptionHandling;

public class CodeExercise {
	public static void main(String[] args) {
		String str = "Java Programming";

		// Reverse the String

		char[] strToArr = str.toCharArray();

		for (int i = strToArr.length - 1; i >= 0; i--) {
			System.out.print(strToArr[i]);
		}

	}
}
