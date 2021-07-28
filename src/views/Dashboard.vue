<template>
  <div
    class="
      app-container app-theme-white
      body-tabs-shadow
      fixed-sidebar fixed-header
    "
  >
    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
          <btn-hamburger
            @clickClose="toggleClose"
            :classObject="[
              'close-sidebar-btn hamburger--elastic',
              { 'is-active': openMenu },
            ]"
            dataClass="'closed-sidebar'"
          ></btn-hamburger>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <btn-hamburger
          @clickClose="toggleClose"
          :classObject="[
            'hamburger--elastic mobile-toggle-nav',
            { 'is-active': openMenu },
          ]"
          dataClass="''"
        ></btn-hamburger>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            :class="[
              'btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav',
              { active: menuSm },
            ]"
            @click="toggleMenuSm"
          >
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div :class="['app-header__content', { 'header-mobile-open': menuSm }]">
        <div class="app-header-left">
          <txt-search
            phValue="Buscar..."
            v-model="search"
            @clickSearch="!openSearch ? toggleSearch() : searchText()"
            @closeSearch="toggleSearch"
            :isActive="openSearch"
          ></txt-search>
          <ul class="header-menu nav">
            <nav-item
              :key="index"
              v-for="(item, index) in items"
              :dataObject="item"
            ></nav-item>
          </ul>
        </div>
        <btn-user :items="itemsMenu" :user="user"></btn-user>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/main.css';
</style>

<script>
import BtnHamburger from '@/components/dashboard/BtnHamburger'
import TxtSearch from '@/components/dashboard/TxtSearch'
import NavItem from '@/components/dashboard/NavItem'
import BtnUser from '@/components/dashboard/BtnUser'

export default {
  data() {
    return {
      openMenu: true,
      openSearch: false,
      menuSm: false,
      search: '',
      items: [
        {
          class: '',
          icon: 'fa-database',
          title: 'Statistics',
          href: 'javascript:void(0);',
        },
        {
          class: 'btn-group',
          icon: 'fa-edit',
          title: 'Projects',
          href: 'javascript:void(0);',
        },
        {
          class: 'dropdown',
          icon: 'fa-cog',
          title: 'Settings',
          href: 'javascript:void(0);',
        },
      ],
      itemsMenu: ['User Account', 'Settings', 'Actions', 'Dividers'],
      user: {
        urlImg: 'http://localhost/siremy/assets/images/avatars/1.jpg',
        name: 'Alina Mclourd',
        role: 'VP People Manager',
      },
    }
  },
  components: {
    BtnHamburger,
    TxtSearch,
    NavItem,
    BtnUser,
  },
  methods: {
    toggleClose() {
      this.openMenu = !this.openMenu
    },
    toggleSearch() {
      this.openSearch = !this.openSearch
    },
    toggleMenuSm() {
      this.menuSm = !this.menuSm
    },
    searchText() {},
  },
}
</script>
