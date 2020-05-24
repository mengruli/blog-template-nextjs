import dynamic from 'next/dynamic';
import { withLayout } from '../../utils/hoc';
import fetch from 'node-fetch';

function PostPage({ file_name }) {
    const BlogContent = dynamic(() => import(`../posts-md/${file_name}`))
    return <BlogContent />
}

export async function getServerSideProps(ctx) {
    const { postId } = ctx.params
    const res = await fetch(`${process.env.API_BASE || 'http://localhost:3000/api'}/posts/${postId}`);
    const json = await res.json();
    
    return {
        props: json
    }
}

export default withLayout(PostPage);
