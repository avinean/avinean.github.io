app.component('app-picture-gallery', {
    template: `
        <h4 class="ui horizontal divider header">
            <i class="folder open icon"></i>
            Find picture in gallery
        </h4>
        <div class="ui card" style="width: auto;">
            <div class="content">
                <div
                    v-if="images.length"
                    class="ui small images mb-10"
                >
                    <img
                        v-for="image in images"
                        :key="image"
                        :src="image"
                    />
                </div>
                <div
                    class="upload__button mb-10"
                >
                    <button
                        class="ui left labeled icon button primary"
                        :class="{
                            loading: loading
                        }"
                        @click="loadGallery"
                    >
                        <i class="image icon"></i>
                        {{ images.length ? 'Load more' : 'Load gallery' }}
                    </button >
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            images: [],
            loading: false,
        }
    },
    methods: {
        loadGallery() {
            this.loading = true;
            setTimeout(() => {
                this.images = [...this.images, ...[
                    "https://myrusakov.ru/images/avatars/54d0990fd00d7.jpeg",
                    "https://myrusakov.ru/images/avatars/54d0990fd00d7.jpeg",
                    "https://myrusakov.ru/images/avatars/54d0990fd00d7.jpeg",
                    "https://myrusakov.ru/images/avatars/54d0990fd00d7.jpeg",
                ]];

                this.loading = false;
            }, 2000);
        }
    }
});