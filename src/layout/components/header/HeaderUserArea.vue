<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left">
            <!-- <div
              toggle-class="p-0 mr-2"
              menu-class="dropdown-menu-lg"
              variant="link"
              right
            > -->
            <!-- <div class="btn-group b-dropdown dropdown">
                <button class="btn btn-link dropdown-toggle p-0 mr-2"> -->
            <span>
              <!-- slot="button-content"> -->
              <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                <img
                  width="42"
                  class="rounded-circle"
                  :src="require(`@/assets/images/avatars/${id}.jpg`)"
                />
              </div>
            </span>
            <!-- </button> -->
            <div
              v-if="false"
              class="dropdown-menu dropdown-menu-right dropdown-menu-lg"
              role="menu"
              tabindex="-1"
            >
              <button type="button" tabindex="0" class="dropdown-item">
                Menus
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                Settings
              </button>
              <h6 tabindex="-1" class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">
                Actions
              </button>
              <div tabindex="-1" class="dropdown-divider"></div>
              <button type="button" tabindex="0" class="dropdown-item">
                Dividers
              </button>
            </div>
            <!-- </div> -->
            <!-- </div> -->
          </div>
          <div class="widget-content-left ml-3 header-user-info">
            <div class="widget-heading">{{ userName }}</div>
            <div class="widget-subheading">{{ userTitle }}</div>
          </div>
          <!-- <div class="widget-content-right header-user-info ml-3">-->
          <!-- <b-btn
              v-b-tooltip.hover
              title="Tooltip Example"
              class="btn-shadow p-1"
              size="sm"
              variant="info"
            > -->
          <!-- <button>
              <font-awesome-icon icon="calendar-alt" class="mr-1 ml-1" />
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VuePerfectScrollbar from 'vue3-perfect-scrollbar'
import api from '@/api'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  // faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,
  faFileArchive,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faAngleDown,
  // faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,
  faFileArchive,
  faEllipsisH
)

export default {
  components: {
    // VuePerfectScrollbar,
    // 'font-awesome-icon': FontAwesomeIcon,
  },
  data: () => ({
    userName: '',
    userTitle: '',
    path: 'assets/images/avatars/',
  }),
  props: { id: { type: Number, default: 0 } },
  methods: {},
  created() {
    api.getUserData(this.id).then((resp) => {
      this.userName =
        resp.data[0].userFirstName + ' ' + resp.data[0].userFirstLastname
      api.getUserTitle(resp.data[0].idCargo).then((resp) => {
        this.userTitle = resp.data[0].nameCargo
      })
    })
  },
}
</script>
