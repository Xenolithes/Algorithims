import time

# print(time.gmtime(0))
# print(time.localtime())
# print(time.time())
# print(time.localtime(time.time()))

# time_here = time.localtime()
# print(time_here)
# print("Year:", time_here[0], time_here.tm_year)
# print("Month:", time_here[1], time_here.tm_mon)
# print("Day:", time_here[2], time_here.tm_mday)

from time import time as my_timer
# perf_counter is the most accurate time
# from time import perf_counter as my_timer
# monotonic timers cannot be set back
# from time import monotonic as my_timer
# process_time is the time it takes the cpu to do the task
# from time import process_time as my_timer
import random

input("Press Enter to start")

wait_time = random.randint(1, 6)
time.sleep(wait_time)
start_time = my_timer()

input("Press Enter to stop")

end_time = my_timer()

#strftime - string from time
print("Started at " + time.strftime("%X", time.localtime(start_time)))
print("Ended at " + time.strftime("%X", time.localtime(end_time)))

print("Your reaction time was {} seconds".format(end_time - start_time))

# If you wanted to know why a particular method was added 
# You can look at the PEP for methods