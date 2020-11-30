<template>
  <v-app dark id="main-site">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
      :clipped-left="clipped"
      elevate-on-scroll
      fixed
      app
      color="white"
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
        v-click-outside="onClickOutside"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <NuxtLink to="/" :class="miniVariant ? 'logo' : 'logo-true'">
          <span>IOT Admin Dashboard</span>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="profile-logo"
            v-bind="attrs"
            v-on="on"
            outlined
            depressed
            medium
          >
            <v-icon class="mr-2">mdi-account</v-icon>
            <span class="text-capitalize mr-2">admin</span>
          </v-btn>
        </template>
        <v-list class="mt-9">
          <v-list-item to="/admin/profile">
            <v-icon class="mdi mdi-account black--text"></v-icon>
            <v-list-item-title class="ml-3">Profile</v-list-item-title>
          </v-list-item>
          <v-list-item to="/admin/about_us">
            <v-icon class="mdi mdi-account-group black--text"></v-icon>
            <v-list-item-title class="ml-3">About Us</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-icon class="mdi mdi-logout black--text"></v-icon>
            <v-list-item-title class="ml-3">Logouot</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>    
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>IOT Company&copy; 2020-{{ new Date().getFullYear() +1}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {auth} from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'IOT Admin Dashboard',
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Water',
          to: '/water'
        },
        {
          icon: 'mdi-flash',
          title: 'Electricity',
          to: '/electricity'
        }
      ],
    }
  },
  methods: {
      onClickOutside() {
        this.miniVariant = true
      },
      async logout() {
            await auth.signOut()
            await Cookie.remove('access_token')

            location.href = "/"
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');  
$body-font-family: 'Barlow Condensed', sans-serif;

#main-site{
  font-family: $body-font-family;
}

.logo{
  margin-left: 1px;
  margin-bottom: 8px;
  color: #233348;
  font-size: 26px;
  text-decoration: none;
}

.logo-true{
  margin-left: 19px;
  margin-bottom: 8px;
  color: #233348;
  font-size: 26px;
  text-decoration: none;
}

</style>