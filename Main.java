import java.lang.reflect.Array;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> inputList = new ArrayList<>();

        while (sc.hasNext()) {
            String input = sc.nextLine();
            if (input.equals("--end")) {
                break;
            }
            inputList.add(input);
        }
        System.out.println("--------------------");
        inputList.forEach((target) -> {
            String result = Stream.of(target.split("")).map(convert)
                    .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
            System.out.println(result);

        });
    }

    static List<String> array = Arrays.asList("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split(""));

    private static Function<String, String> convert = (character) -> array.get(array.lastIndexOf(character) - 13);

}