import React from 'react';
import Link from 'next/link';

export default () => (
    <section>
        <div>Project Section</div>
        <Link href="/">
            <button type="button">Back to Home Page</button>
        </Link>
    </section>
);
