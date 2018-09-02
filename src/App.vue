<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/v01">Justo v0.1 MVP</router-link> |
      <router-link to="/justo">Justo, fale comigo - Dev</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ApiAiClient } from 'api-ai-javascript';
import config from './config';

// use the config token
const client = new ApiAiClient({ accessToken: config.app.token });

export default {
  name: 'app',
  data() {
    return {
      answers: [],
      query: '',
      speech: config.locale.strings.voiceTitle,
      micro: false,
      muted: config.app.muted,
      online: navigator.onLine,
      config,
    };
  },
  watch: {
    // eslint-disable-next-line
    answers(val) {
      setTimeout(() => {
        // if new answers arrive, wait for render and then
        // smoothly scroll down to #bottom selector, used as anchor
        document.querySelector('#bottom').scrollIntoView({
          behavior: 'smooth',
        });
      }, 2);
    },
  },
  methods: {
    submit() {
      client.textRequest(this.query).then((response) => {
        if (response.result.action === 'input.unknown' && this.config.app.googleIt === true) {
          response.result.fulfillment.messages[0].unknown = true;
          response.result.fulfillment.messages[0].text = response.result.resolvedQuery;
        } // if the googleIt is enabled, show the button

        this.answers.push(response);
        this.handle(response); // <- handle the response in handle() method

        this.query = '';
        this.speech = config.locale.strings.voiceTitle; // <- reset query and speech
      });
    },
    handle(response) {
      if (response.result.fulfillment.speech || response.result.fulfillment.messages[0].type === 'simple_response') {
        let speechText = response.result.fulfillment.speech;
        if (speechText === null || speechText === '') {
          speechText = response.result.fulfillment.messages[0].textToSpeech;
        }
        const speech = new SpeechSynthesisUtterance(speechText);

        speech.voiceURI = 'native';
        speech.lang = config.locale.settings.speechLang;
        // Speech output if microphone is allowed
        if (this.muted === false) window.speechSynthesis.speak(speech);
      }
    },
    autosubmit(suggestion) {
      this.query = suggestion;
      this.submit();
    },
    mute(mode) {
      this.muted = mode;
    },
    microphone(mode) {
      this.micro = mode;
      const self = this; // <- correct scope

      if (mode === true) {
        // chrome speech recognition
        // eslint-disable-next-line
        const recognition = new webkitSpeechRecognition();

        recognition.interimResults = true;
        recognition.lang = config.locale.settings.recognitionLang;
        recognition.start();

        // eslint-disable-next-line
        recognition.onresult = function (event) {
          for (let i = event.resultIndex; i < event.results.length; i += 1) {
            self.speech = event.results[i][0].transcript;
          }
        };

        // eslint-disable-next-line
        recognition.onend = function () {
          recognition.stop();
          self.micro = false;
          self.autosubmit(self.speech);
        };
      }
    },
  },
};
</script>
