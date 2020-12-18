package algorithms;

import java.util.Arrays;

/**
 * 
 * 
 * In a given grid, each cell can have one of three values:
 * 
 * the value 0 representing an empty cell; the value 1 representing a fresh
 * orange; the value 2 representing a rotten orange. Every minute, any fresh
 * orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
 * 
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1 instead.
 * 
 */

public class RottingOranges {
    public int orangesRotting(int[][] grid) {
        // Create a deep copy of the 2D grid
        int[][] deepCopy = new int[grid.length][];
        for (int i = 0; i < grid.length; i++) {
            deepCopy[i] = Arrays.copyOf(grid[i], grid[i].length);
        }
        int minutes = 0;
        int[][] currentRef = grid;
        int[][] nextRef = deepCopy;
        boolean key = true;
        // while (!key 
        for(int m = 0; m < 5; m++){
            if(key == false){
                return -1;
            }
            minutes += 1;
            key = false;
            for (int x = 0; x < grid.length; x++) {
                for (int y = 0; y < grid[x].length; y++) {
                    if (currentRef[x][y] == 1) {
                        int top = 0;
                        int right = 0;
                        int bottom = 0;
                        int left = 0;

                        if (x - 1 >= 0) {
                            top = currentRef[x - 1][y];
                        }

                        if (y + 1 < grid[x].length) {
                            right = currentRef[x][y + 1];
                        }

                        if (x + 1 < grid.length) {
                            bottom = currentRef[x + 1][y];
                        }

                        if (y - 1 >= 0) {
                            left = currentRef[x][y - 1];
                        }

                        int newVal = this.rot(top, right, bottom, left);

                        if (newVal == -1) {
                            return -1;
                        } else if (newVal != currentRef[x][y]) {
                            nextRef[x][y] = newVal;
                            key = true;
                        }
                    }
                }
            }
            int[][] tempRef = currentRef;
            currentRef = nextRef;
            nextRef = tempRef;
        }
        // Return -1 if there is no other returns
        return minutes;
    }

    // Enter the values from the blocks above, right, bottom and left of the current
    // position
    // If the value cannot be given have it be 0
    public int rot(int top, int right, int bottom, int left) {
        if (top == 0 && right == 0 && bottom == 0 && left == 0) {
            return -1;
        } else if (top == 2 || right == 2 || bottom == 2 || left == 2) {
            return 2;
        } else {
            return 1;
        }
    }
}
