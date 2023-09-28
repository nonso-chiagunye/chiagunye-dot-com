'use strict';

export let education = [];

class Education {
  constructor(school, course, year) {
    this.school = school;
    this.course = course;
    this.year = year;
  }
}

education.push(
  new Education(
    'MIT College of Computing',
    'Cyber Security, Technology Application and Policy',
    2022
  )
);

education.push(new Education('Simplilearn', 'PGD CyberSecurity', 2022));

education.push(
  new Education(
    'Lagos Business School',
    'Operations and Finance Management',
    2012
  )
);

education.push(
  new Education(
    'University of Nigeria, Nsukka',
    'B.Sc Geology (2nd Class Upper)',
    2008
  )
);
