## Add at least 3 Project features

**Course Selection :** If user selects a course than it will show on the bookmark at the right side if he selects the same course again it will show a toast alert.

**Course Limitation :** Every user has a limitations of credit hour if a user chose over 20 hours credit time it will show a toast that you don't have enough credit hour.

**Course Details :** By using my webpage a user easily can select his favorite course and can learn his favorite programming language.

## Discuss how I managed the state in my assignment project.

*In my project i am use 5 state to compleat this. Now i am discuss where i use this state in this assignment-7 project.


**courseCard :** This state was used to store an empty array initially, which was later updated with data fetched from a JSON file using the 'fetch' API and 'setCourseCard' in the 'useEffect' hook.

**selectedCard :** This state was used to keep track of the selected cards. When a card was selected, it was added to this array using 'setSelectedCard'.

**remainingCredit :** This state was initialized with a value of 0 and updated based on the total credit time of the selected cards. It represented the remaining available credit hours.

**totalCredit :** This state was used to keep track of the total credit time of the selected cards. It was updated whenever a card was selected.

**totalPrice :** Similar to 'totalCredit', this state was used to keep track of the total price of the selected cards. It was updated whenever a card was selected.