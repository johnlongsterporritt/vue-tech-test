<template>
    <div class="col-12 col-md-6 col-lg-4 photo-card-container">
      <div class="photo-card">
          <h3>
              {{ photo.photographer }}
          </h3>

          <p>
              {{ photo.alt }}
          </p>

          <a href="">
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