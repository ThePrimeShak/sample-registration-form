export const registrationSteps = [
  {
    id: 'username',
    label: 'Username',
    focusField: 'username',
    title: 'Make it yours.',
    subtitle: 'Every great start begins with a name. Choose yours.',
    caption: 'Your next chapter starts here.',
    detail: 'Three simple steps. One fresh beginning.',
    image: new URL('../assets/images/female-user.svg', import.meta.url).href
  },
  {
    id: 'email',
    label: 'Email',
    focusField: 'email',
    title: 'Let’s stay in touch.',
    subtitle: 'Add the email address you’d like to use.',
    caption: 'A little more connected.',
    detail: 'Your details, one simple step at a time.',
    image: new URL('../assets/images/female-email.svg', import.meta.url).href
  },
  {
    id: 'review',
    label: 'Review',
    focusField: 'description',
    title: 'Looking good!',
    subtitle: 'Take a moment to review your details.',
    caption: 'All the details. All you.',
    detail: 'Review your information before you go.',
    image: new URL('../assets/images/female-review.svg', import.meta.url).href
  }
]
