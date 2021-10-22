required_skills = ['python', 'github', 'linux']

candidates = {
  'anna': {'hava', 'linux', 'windows', 'github', 'python', 'full stack'},
  'bob': {'github', 'linux', 'python'},
  'carol': {'linux', 'javascript', 'html', 'python', 'github'},
  'daniel': {'pascal', 'java', 'c++', 'github'},
  'ekani': {'html', 'css', 'github', 'python', 'linux'},
  'fenna': {'linux', 'pascal', 'java', 'c', 'lisp', 'modula-2', 'perl', 'github'}   
}

interviewees = set()
required_skills_set = set(required_skills)
for candidate, skills in candidates.items():
    # if skills >= required_skills_set:
    #     interviewees.add(candidtate)
    if skills > required_skills_set:
        interviewees.add(candidate)

print(interviewees)