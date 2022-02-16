<template>
    <div>
        <h5>
            {{ photo.photographer }}
        </h5>

        <p> 
            {{ photo.alt }}
        </p>

        <a href="">
            View Original
        </a>
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