package algorithms;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class TwoSumTest {
    private TwoSum testMethod = new TwoSum();
    @Test
    void twoSum () {
        int[] intArray = {1,5,3,2,8,1,9};
        int[] outputOne = testMethod.twoSum(intArray, 6);
        assertEquals(0, outputOne[0]);
        assertEquals(1, outputOne[1]);

        int[] outputTwo = testMethod.twoSum(intArray, 10);
        assertEquals(3, outputTwo[0]);
        assertEquals(4, outputTwo[1]);

        int[] secondIntArray = {3,2,4};
        int[] outputThree = testMethod.twoSum(secondIntArray, 6);
        assertEquals(1, outputThree[0]);
        assertEquals(2, outputThree[1]);


    }
}
