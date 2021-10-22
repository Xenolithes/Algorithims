morning_courses = {"Java", "C", "Ruby", "Lisp", "C#"}
morning_courses_list = ["Java", "C", "Ruby", "Lisp", "C#"]
afternoon_courses = {"Python", "C#", "Java", "C", "Ruby"}
afternoon_courses_list = ["Python", "C#", "Java", "C", "Ruby"]


possible_courses = morning_courses ^ afternoon_courses
print(possible_courses)

possible_courses_list = set(morning_courses_list).symmetric_difference(afternoon_courses_list)
print(possible_courses_list)