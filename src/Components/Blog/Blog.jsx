import { useTitle } from '../../hooks/hooks';
import './Blog.css';
const Blog = () => {
    useTitle("Blog")
    return (
        <div className="container">
            <h1 className="text-center fs-1 fw-bolder my-3">Questions & Answers</h1>
            <div className="container main-content text-start">
                <h4>1. What is an access token and refresh token? How do they work and where should we store them on the client-side? </h4>
                <p> <strong>Ans:</strong> Access tokens and refresh tokens are used in authentication and authorization protocols. Access tokens are used to authenticate a user and grant access to resources. They are short-lived and expire after a certain period of time. Refresh tokens are used to obtain new access tokens after the original access token has expired. They are long-lived and can be used to obtain new access tokens without requiring the user to re-authenticate.
                
                Access tokens should be stored in memory or in an httpOnly cookie. Refresh tokens should not be stored on the client-side because they are long-lived and can be used to obtain new access tokens without requiring the user to re-authenticate. Instead, they should be stored on the server-side.

                Controlled components are used when we want to have more control over the form elements. They are used when we want to validate the input data before submitting it to the server.

                Uncontrolled components are used when we want to have less control over the form elements. They are used when we don’t need to validate the input data before submitting it to the server.

                </p>
                <hr />
                <h4>2. Compare SQL and NoSQL databases?</h4>
                <p><strong>Ans:</strong> SQL and NoSQL databases are different types of databases that store and retrieve data in different ways. SQL databases are table-based and use a relational model and a structured query language. NoSQL databases are non-relational and can use various formats such as document-oriented, key-value pairs, graph structures, or wide-column stores.

                SQL databases are suitable for applications that need multi-row transactions, consistency, and predefined models. They are best used for structured data. NoSQL databases are suitable for applications that need scalability, performance, and flexibility. They are best used for structured, semi-structured, and unstructured data.</p>
                <hr />
                <h4>3. What is express js? What is Nest JS? </h4>
                <p> <strong>Ans:</strong> Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. </p>
                <hr />
                <p>
                    <strong>Next.js</strong> is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application
                </p>
                <hr />
                <h4>4. What is MongoDB aggregate and how does it work? </h4>
                <p><strong>Ans:</strong> Aggregation in MongoDB is a framework for data aggregation operations. It is used to process data records and return computed results.
                Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together and can perform a variety of operations on the grouped data to return a single result.
                </p>
            </div>
        </div>
    );
};

export default Blog;