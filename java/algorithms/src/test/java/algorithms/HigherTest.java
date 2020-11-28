package algorithms;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
public class HigherTest {
    private Higher testMethod = new Higher();
    @Test
    void higherInt () {
        assertEquals(5, testMethod.highInt(5, 3));
    }
}
