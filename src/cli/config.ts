// all paths should be relative to the directory where the rnt command is run
export default {
    componentTemplatePath: 'src/cli/templates/component.ejs',
    componentTestTemplatePath: 'src/cli/templates/component.test.ejs',
    screenViewTemplatePath: 'src/cli/templates/screenView.ejs',
    screenControllerTemplatePath: 'src/cli/templates/screenController.ejs',
    stackTemplatePath: 'src/cli/templates/stack.ejs',

    // when an element is generated, it will reside in the respective directory.
    // Moreover, it will be re-exported in an index.ts file residing in the directory.
    // if index.ts does not exist, it will be created.
    componentsPath: 'src/components',
    componentTestsPath: '__tests__/components',
    screensPath: 'src/screens',
    stacksPath: 'src/navigation/stacks',
}
