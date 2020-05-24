import Layout from '../components/Layout'

function withLayout(WrappedComponent) {
    const wrapper = props => {
        return <Layout>
                <WrappedComponent {...props} />
        </Layout>
    }

    return wrapper;
}

export { withLayout }