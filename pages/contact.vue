<template>
    <div class="bg-[#ffefef] min-h-screen">
        <Header />
        <section class="container mx-auto py-24 px-4">
            <h1 class="text-4xl font-bold mb-10 text-center font-lust-didone">Contactez-nous</h1>
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
                            class="px-6 py-3 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
                <div class="text-center">
                    <p class="text-lg mb-4">Vous préférez nous contacter directement ?</p>
                    <a href="mailto:contact@4you.fr" class="text-violet-600 hover:underline font-semibold text-lg">
                        Envoyez-nous un email
                    </a>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// Define the form object using reactive
const form = reactive({
    name: '',
    email: '',
    message: ''
});

// Define the submitForm method
const submitForm = () => {
    console.log('Form submitted:', form);

    form.name = '';
    form.email = '';
    form.message = '';
};
</script>

<style scoped>
/* Removed the scoped style as it's no longer needed */
</style>
