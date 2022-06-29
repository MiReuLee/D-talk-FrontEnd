<template>
    <main>
        <router-view />
    </main>
</template>

<style lang="scss">
html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

#app {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(6,223,215,1) 0%, rgba(163,247,191,1) 100%);
}
</style>

<style lang="scss" scoped>
    main {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        > * {
            flex: 1;
        }
    }
</style>
