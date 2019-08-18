<template>
  <transition name="fade">
    <div id="simpleModal" class="modal">
      <div class="modal-container">
        <div class="m-header">
          <slot name="modal-header"></slot>
          <span class="close-btn" @click="closeModal">&times;</span>
        </div>
        <div class="m-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="m-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
    outsideClick(e) {
      const modal = document.querySelector(".modal");
      if (e.target === modal) {
        this.$emit("close");
      }
    }
  },
  created() {
    window.addEventListener("click", this.outsideClick);
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  background-color: #1a1a1a;
  margin: 10vh auto;
  width: 90vw;
  max-width: 600px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  color: white;
  display: block;
}

.m-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--monoton);
  color: white;
  font-size: var(--nav-font-size);
  margin: 0 2rem;
}

.close-btn:hover,
.close-btn:focus {
  color: aqua;
  text-decoration: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


