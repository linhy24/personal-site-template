# Personal Website Template

This project is a template website for personal portafolio/blog written based on a React app. This is an experiment project to test GPT-4, which is used thoroughly during development. Users may find its code style a bit verbose.

## Project Explaination

This is a React project, so please refer to [`React.md`](https://github.com/linhy24/personal-site-template/blob/main/React.md) or [`Create React App`](https://create-react-app.dev/docs/deployment/) for project testing and deployment.

As the standard practice of building a React app, the core part of project code is under `/src` directory, and each webpage is coded as separate component under `/components`. `App.js` orchestrates all components to a React App.

## Logic of Dark Mode

Users' darkmode preference is remembered in SessionStorage by default.

You can easily change the behavior of dark mode by changing the keyword `sessionStorage` to `localStorage` in file `App.js`.

 Then, users' darkmode preference will be remembered as long as the browser cache is not cleared. Users can close and reopen the tab, and theme preference stays.

## Usage

After cloning this project to your local repo, run `npm install` to install the required node modules to start developing. The development process follows standard React development practices.

Please refer to [official React documentation](https://react.dev/reference/react) for more guidance.