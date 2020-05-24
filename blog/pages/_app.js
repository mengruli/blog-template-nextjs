import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import {MDXProvider} from '@mdx-js/react';
import Code from '../components/Code';

const components = {
    pre: props => <div {...props} />,
    code: Code
}

export default function App({ Component, pageProps }) {
    return <MDXProvider components={components}>
            <Component {...pageProps} />
        </MDXProvider>
}