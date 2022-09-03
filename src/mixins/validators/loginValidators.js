export default {
  data: function() {
    return {
      rules: {
        required: (v) => !!v || "Value required",
        email: (v) => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return regex.test(v) || "Must be a valid email address"
        },
        password: (v) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+=])[A-Za-z\d^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+=]{8,}$/
          return regex.test(v) || "Must have at least 8 characters including at least 1 number, 1 special character, 1 lowercase letter and 1 uppercase letter"
        }
      }
    }
  }
}
