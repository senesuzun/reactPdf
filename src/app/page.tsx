import React from 'react';
import Link from 'next/link';

const Home = () => (
    <div style={{ padding: '20px' }}>
        <h1>Welcome to Dynamic CV Creator</h1>
        <Link href="/api/resume" legacyBehavior>
            <a target="_blank">Download Resume</a>
        </Link>
    </div>
);

export default Home;
