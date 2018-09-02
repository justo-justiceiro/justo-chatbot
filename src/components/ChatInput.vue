<template>
  <div id="query">
    <md-field>
        <md-button class="md-icon-button" @click="microphone(true)">
          <md-icon >mic</md-icon>
        </md-button>
        <label>Digite aqui!</label>
        <md-input :aria-label="config.locale.strings.queryTitle"
                autocomplete="off"
                v-model="query"
                class="queryform"
                @keyup.enter="submit()"
                :placeholder="config.locale.strings.queryTitle"
                autofocus
                type="text"></md-input>
        <md-button class="md-icon-button" @click="mute(true)">
          <md-icon>volume_up</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="mute(false)">
          <md-icon>volume_off</md-icon>
        </md-button>

    </md-field>
  </div>
</template>
<script>
export default {
  name: 'chat-input',
};
</script>
