app.component('app-picture-drawer', {
    template: `
        <h4 class="ui horizontal divider header">
            <i class="bar pencil icon"></i>
            Draw a picture
        </h4>
        <div class="ui card" style="width: auto;">
            <div class="content">
                <div ref="colorPicker"></div>
                <div
                    ref="drawer"
                    class="drawer"
                    @touchstart="startDraw"
                    @touchmove="doDraw"
                    @touchend="endDraw"
                    @mousedown="startDraw"
                    @mousemove="doDraw"
                    @mouseup="endDraw"
                    @contextmenu.prevent="showPicker"
                >
                    <div
                        v-for="row in ySize"
                        :key="row"
                        :style="'width: ' + charSize * xSize + 'px;'"
                        class="drawer__row"
                    >
                        <div
                            v-for="col in xSize"
                            class="drawer__col"
                            :style="'width: ' + charSize + 'px; height: ' + charSize + 'px;'"
                            :data-x="col"
                            :data-y="row"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            currentColor: 'rgb(255, 255, 255)',
            srcColor: [255, 255, 255, 255],
            xSize: 16,
            ySize: 16,
            isDrawing: false,
            prevDrawnElement: null,
            charSize: 0,
            picker: null,
        };
    },
    watch: {
        xSize() {
            this.calculateCharSize();
        },
        ySize() {
            this.calculateCharSize();
        }
    },
    methods: {
        showPicker(e) {
            console.log(this.picker);
            this.picker.show();
        },
        calculateCharSize() {
            const drawer = this.$refs.drawer;
            if (!drawer) return 0;

            const { width } = drawer.getBoundingClientRect();

            this.charSize = width / this.xSize;
        },
        initPicker() {
            const pickerEl = this.$refs.colorPicker;
            this.picker = new Picker(pickerEl);
            this.picker.setOptions({
                popup: 'bottom',
            });
            
            this.picker.onChange = color =>  {
                this.srcColor = color.rgba;
                this.currentColor = color.rgbaString;
            };
        },
        startDraw(event) {
            this.isDrawing = true;
            this.doDraw(event);
        },
        doDraw(event) {
            event.preventDefault();
            if (!this.isDrawing) return;
            
            var xcoord = event.touches? event.touches[0].clientX : event.clientX;
            var ycoord = event.touches? event.touches[0].clientY : event.clientY;
            
            var targetElement = document.elementFromPoint(xcoord, ycoord);

            if (this.prevDrawnElement === targetElement) return;
            this.prevDrawnElement = targetElement;
            
            if (targetElement && targetElement.classList.contains('drawer__col')) {
                targetElement.style.backgroundColor = this.currentColor;
                const { x, y } = targetElement.dataset;
                const [r, g, b] = this.srcColor;
                this.sendData({ x: +x, y: +y, r, g, b });
            }

        },
        endDraw() {
            this.isDrawing = false;
        },
        sendData(params) {
            fetch('/pixel', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        }
    },
    mounted() {
        this.initPicker();
        this.calculateCharSize();
    }
});