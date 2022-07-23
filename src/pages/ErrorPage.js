import React from "react";

function ErrorPage() {
    return (

        <main class="h-screen w-full flex flex-col justify-center items-center bg-blackbg">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-blue-400 px-2 text-sm rounded rotate-12 absolute">
            Page Not Found
        </div>
    </main>

    )
}

export default ErrorPage;