<template>
<div class="col-md-6">
    <div class="joke">
        <button class="close" @click="removeJoke(index)">
            <span>&times;</span>
        </button>
        <h4>{{ joke.setup }}</h4>
        <p><em>{{ joke.punchline }}</em></p>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['joke', 'index'],
    methods: mapActions([
        'removeJoke'
    ])
}
</script>

<style>
    .joke {
        margin: 5px;
        padding: 5px;
        border: 2px solid #2C3350;
        border-radius: 2px;
        background-color: #ccc;
    }

    .close {
        outline: none;
    }
</style>