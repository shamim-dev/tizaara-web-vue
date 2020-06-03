<template/>
<script>
  export default {
    created() {
      let currentPopupMenu = window.self;
      let token = this.$route.query.token;
      if (token) {
        token = decodeURIComponent(token);
        token = JSON.parse(token);
        window.opener.postMessage({userToken: token}, "*");
        currentPopupMenu.close();
      }

      this.$router.push('/account');
    }
  }
</script>
