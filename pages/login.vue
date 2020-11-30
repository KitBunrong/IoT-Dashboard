<template>
    <v-container>
      <section class="content">
            <h2 class="text-center mb-1" style="font-size: 35px">Login</h2>
          <div class="box">
              <UserAuthForm buttonText="Login" :submitForm="loginUser" />
          </div>
            <div v-if="isError">
                <p class="red mb-0">{{ errMsg }}</p>
            </div>
      </section>
      
      
    </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
    layout: 'session',
    data: () => ({
        isError: false,
        errMsg: ''
    }),
    components: {
        UserAuthForm
    },
    methods: {
        loginUser(loginInfo) {
            this.$store.dispatch('users/login', loginInfo)
            .then(() => {
                this.$router.push('/admin')
            })
            .catch(error => {
                this.isError = true;
                this.errMsg = error.code;

                setTimeout(() => {
                    this.isError = false;
                }, 5000)
            })
        }
    }

}
</script>

<style lang='scss'>
.content {
    margin: 2rem auto;
    max-width: 80rem;
    padding: 1rem;
    width: 100%;
}

.box {
    border-radius: 10px;
    border: 1px solid #292929;
    display: grid;
    grid-gap: 1rem 4rem;
    margin: 0 auto;
    max-width: 472px;
    padding: 0 1.5rem .25rem;
}
</style>