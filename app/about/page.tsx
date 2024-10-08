import React from "react";
import Header from "../components/heaedr";
import Nav from "../components/nav";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">
                <Header />
                <Nav />
                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Welcome</h1>
                    <p>
                        We are the best coffe in the planet!!
                    </p>
                </div>
            </div>
        </div>
    </>
}