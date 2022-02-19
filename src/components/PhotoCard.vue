<template>
    <div class="col-12 col-md-6 col-lg-4 photo-card-container">
        <div class="photo-card">
            <a :href="photo.url" target="_blank" class="background-image" :title="photo.alt">
              <img :src="photo.src.large" :alt="photo.alt" class="img-fluid">
            </a>

              <h3>
                  {{ photo.photographer }}
              </h3>

              <p>
                  {{ photo.alt }}
              </p>

              <a :href="photo.url" target="_blank">
                  View Original
              </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PhotoCard',
        props: [
            'photo'
        ]
    }
</script>