<template>
  <div class="bg-[#ffefef] min-h-screen">
    <Header textColor="text-black"/>
    <section class="container mx-auto py-24 px-4">
        <h1 class="text-4xl font-bold mb-10 text-center font-lust-didone">Envoyez votre demande</h1>
        <div class="flex flex-col items-center">
          <form @submit.prevent="submitForm" class="w-full max-w-lg bg-white p-8 rounded-lg shadow-md mb-8">
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div class="mb-6">
              <label for="date" class="block text-sm font-medium text-gray-700 mb-2">Date de l'événement</label>
              <VueDatePicker
                v-model="form.date"
                :enable-time-picker="false"
                :format="dateFormat"
                :locale="locale"
                placeholder="Sélectionnez une date"
                :min-date="new Date()"
                class="custom-datepicker"
              >
                <template #day-overlay="{ day }">
                  <div v-if="isWeekend(day.date)" class="weekend-indicator"></div>
                </template>
              </VueDatePicker>
            </div>
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>
            <div class="text-right">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md disabled:opacity-50"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande' }}
              </button>
            </div>
          </form>
          <div v-if="submitStatus" :class="['text-center p-4 rounded-md', submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
            {{ submitStatus.message }}
          </div>
          <div class="text-center mt-8">
            <p class="text-lg mb-4">Vous préférez nous contacter directement ?</p>
            <a href="mailto:contact@4you-event.fr" class="text-violet-600 hover:underline font-semibold text-lg">
              Envoyez-nous un email
            </a>
          </div>
        </div>
      </section>
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useContactForm } from '~/composables/useContactForm'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const form = reactive({
  name: '',
  email: '',
  date: null,
  message: ''
})

const { isSubmitting, submitStatus, submitForm } = useContactForm(form)

const locale = {
  locale: 'fr',
  format: 'dd/MM/yyyy',
  firstDay: 1,
  yearSuffix: '',
  weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  today: "Aujourd'hui",
  clear: 'Effacer',
  close: 'Fermer'
};

const dateFormat = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
</script>

<style>
.custom-datepicker .dp__theme_light {
    --dp-background-color: #fff;
    --dp-text-color: #212121;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #212121;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #041322;
    --dp-primary-disabled-color: #000000;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #ddd;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #aaaeb7;
    --dp-border-color-focus: #aaaeb7;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
    --dp-marker-color: #ff6f60;
    --dp-tooltip-color: #fafafa;
    --dp-disabled-color-text: #8e8e8e;
    --dp-highlight-color: rgb(25 118 210 / 10%);
    --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
    --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
    --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

.custom-datepicker .dp__theme_light .dp__calendar_header {
  font-weight: bold;
  color: #333333;
}

.custom-datepicker .dp__theme_light .dp__today {
  border: 2px solid #333333;
}

.custom-datepicker .dp__theme_light .dp__active_date {
  background-color: #333333;
  color: #ffffff;
}

.custom-datepicker .weekend-indicator {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 8px 0;
  border-color: transparent #f59e0b transparent transparent;
}
</style>