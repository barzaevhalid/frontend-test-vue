<template>
  <div class="wrap">
    <label class="desc"> {{ label }}</label>
    <input
      class="data"
      :class="{ invalid: error }"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="change"
      @blur="isValid"
    />
    <div class="warning" v-if="error">Поле является обязательным</div>
  </div>
</template>
<script>
export default {
  name: "AppInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    type: String,
    placeholder: String,
    name: String,
    label: String,
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    isValid() {
      if (this.modelValue.length === 0) {
        this.error = true;
      }
    },
    change(e) {
      this.$emit("update:modelValue", e.target.value);
      this.error = false;
    },
  },
};
</script>

<style scoped>
.wrap input {
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
}
.wrap input:focus,
.wrap input:active {
  border: 1px solid green;
}

.desc {
  font-weight: 400;
  font-size: 10px;
  color: #49485e;
  margin-bottom: 5px;
}
.data {
  padding: 10px 0 10px 15px;
  font-size: 12px;
  width: 100%;
}
input.invalid {
  border: 1px solid rgba(255, 132, 132, 1);
}
.warning {
  color: rgba(255, 132, 132, 1);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  margin-top: 5px;
}
</style>
