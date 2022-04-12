# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

##TODO

MVP FEATURES:

1. [x] Build the Column Component

2. [x] Build the task card component inside the column

3. [x] Ability to edit the title of the column component

4. [x] Land on Data format to add a bunch of columns and task cards. Adding or removing data from the local store should update the front end on refresh

5. [] Initialize the backend to reflect the data store once the above is done.

6. [] Hook up front end to backend.

7. [] test out backend create new, list all and update features using postman.

8. [0.5] Add Tasks to one column + update the backend.

9. [0.5] Add a new column + update the backend accordingly.

10. [] Ensure new column title is editable.

11. [] Drag Drop for Task Card in a column.

12. [] Drag and Drop tasks from one column to another.

13. [] ensure backend for drag drop is updated accordingly.

14. [] Drag Drop Task Card from one column to another.

15. [] Ensure backend for DND to another column reflects accordingly.

16. [] DND Columns? - decide if this needs to be in post MVP...(really want to do this but lets see)

POST MVP:

To be divided in to seperate phases after. Below is a though dump of features.

1.  [] integrate with Auth (Auth 0 or Google) to enable login.

2.  [] Display data relevant to that user on login.

3.  [] logout button

4.  [] Add details to Task Card

    4.1 [] clicking on the card opens a task card details modal where more information can be added.

    4.2 [] - Implement an update button and a cancel button.

    4.2 [] Add Description.

    4.3 [] Task Due Date

        4.3.1 [] implement a simple date add functionality

        4.3.2 [] implement a data picker

    4.4 [] Priority

        4.4.1 [] Set Priority add a icon or ! based on priority.

    4.5 [] Description - Add more detailed description of the task.

    4.6 [] Attachments?

    4.7 [] Labels?

    4.8 [] ensure mobile view (iphone, ipad screen size)
