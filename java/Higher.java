import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class Higher {

    /**
     * 
     * @param x {int}
     * @param y {int}
     * @return {int} the higher of the two values
     * 
     */

     public static int highInt(int x, int y) {
         return x > y ? x : y;
     }

     @Test
     void higherInt () {
         assertEquals(5, highint(5, 3));
     }
}
