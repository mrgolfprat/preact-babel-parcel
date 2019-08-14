import { h, Component, render } from 'preact'
import Page from './components/Page'


class App extends Component {
    render(props, state) {
        return (
            <Page></Page>
        )
    }
}

render(<App />, document.getElementById("root"));


// add to package json to use compat
// "alias": {
//     "react": "preact-compat",
//         "react-dom": "preact-compat"
// },