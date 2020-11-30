<template>
    <v-app dark>
        <v-main id='main-site'>
            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');  
$body-font-family: 'Barlow Condensed', sans-serif;

#main-site{
  font-family: $body-font-family;
}

</style>