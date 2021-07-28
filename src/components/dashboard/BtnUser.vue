<template>
  <div class="app-header-right">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left">
            <div class="btn-group">
              <!-- <a
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="p-0 btn"
              > -->
              <div class="p-0 btn disabled" style="opacity: 1">
                <img
                  width="42"
                  class="rounded-circle"
                  :src="user.urlImg"
                  alt="User avatar"
                />
                <i v-if="false" class="fa fa-angle-down ml-2 opacity-8"></i>
              </div>
              <div
                tabindex="-1"
                role="menu"
                aria-hidden="true"
                class="dropdown-menu dropdown-menu-right"
              >
                <button
                  :key="index"
                  v-for="(item, index) in items"
                  type="button"
                  tabindex="0"
                  class="dropdown-item"
                >
                  {{ item }}
                </button>

                <button
                  v-if="false"
                  type="button"
                  tabindex="0"
                  class="dropdown-item"
                >
                  Settings
                </button>
                <h6 v-if="false" tabindex="-1" class="dropdown-header">
                  Header
                </h6>
                <button
                  v-if="false"
                  type="button"
                  tabindex="0"
                  class="dropdown-item"
                >
                  Actions
                </button>
                <div v-if="false" tabindex="-1" class="dropdown-divider"></div>
                <button
                  v-if="false"
                  type="button"
                  tabindex="0"
                  class="dropdown-item"
                >
                  Dividers
                </button>
              </div>
            </div>
          </div>
          <div class="widget-content-left ml-3 header-user-info">
            <div class="widget-heading">{{ user.name }}</div>
            <div class="widget-subheading">{{ user.role }}</div>
          </div>
          <div v-if="false" class="widget-content-right header-user-info ml-3">
            <button
              type="button"
              class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
            >
              <i class="fa text-white fa-calendar pr-1 pl-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [], //Asi se retornan los arrays
    },
    user: {
      type: Object,
      default: () => {
        return { urlImg: '', name: '', role: '' }
      },
      require: true,
    },
  },
}
</script>
