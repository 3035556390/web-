<template>
    <div class="papercontainer">
        <div class="paperrow">

            <hr v-for="i in 70" key="i">

        </div>
        <div class="papercolumn">
            <hr v-for="i in 150" key="i">
        </div>

    </div>



</template>
<script>
</script>
<style scoped>
.papercontainer {

    width: 100%;
    height: 100vh;
    overflow: hidden;

    position: absolute;
    z-index: -1;
    background-color: rgb(255, 243, 227);
}

hr {
    width: 100%;
    margin: 15px;

}

.paperrow {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;

}

.papercolumn {
    width: 100%;
    height: 200%;
    position: absolute;
    z-index: -1;
    transform: rotate(90deg);
}
</style>