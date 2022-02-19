<template>
    <main>
        <div class="row">
            <photo-card v-for="photo in data.photos"
                v-bind:key="photo.id"
                :photo="photo"
            ></photo-card>
        </div>
    </main>
</template>

<script>
    import PhotoCard from '@/components/PhotoCard.vue';
    import { getImages } from '@/services/ApiService';

    export default {
        components: { PhotoCard },

        data() {
            return {
                data: {},
            };
        },

        mounted () {
            getImages().then((response) => {
                this.data = response.data
            });
        }
    };
</script>
