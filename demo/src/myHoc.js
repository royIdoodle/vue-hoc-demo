function WithConsole(WrappedComponent) {
    return {
        extends: WrappedComponent,
        mounted () {
            console.log('I have already mounted in my hoc');
        }
    }
}

export default WithConsole;
