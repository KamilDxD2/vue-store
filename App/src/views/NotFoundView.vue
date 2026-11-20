<template>
    <div id="Error">
        <h1>Page not found</h1>
        <p>Check out our current <a href="/">promotions</a></p> 
    </div>
</template>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #Error {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2em;
        height: 100%;
        width: 100%;
        gap: 1.5em;
    }

    #Error h1 {
        color: darkslategray;
        font-size: 2em;
    }

</style>