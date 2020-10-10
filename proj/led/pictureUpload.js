app.component('app-picture-upload', {
    template: `
        <h4 class="ui horizontal divider header">
            <i class="image icon"></i>
            Upload a picture
        </h4>
        <div class="ui card" style="width: auto;">
            <div class="content">
                <div ref="wrapper">
                    <div class="upload__button">
                        <label class="ui right labeled icon button primary">
                            <i class="image icon"></i>
                            Upload image
                            <input type="file" ref="uploader" hidden @change="handleFileSelect" accept="image/jpeg"/>
                        </label >
                    </div>
                    <canvas
                        class="upload__drawer"
                        ref="canvas"
                        width="640"
                        height="480"
                        hidden
                    ></canvas>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            image: new Image(),
            imgData: null,
            imgLoaded: false,
            OUT_WIDTH: 0,
            OUT_HEIGTH: 0,
            OUT_DEPTH: 3,
        };
    },
    computed: {
        OUT_SRC() {        
            const widthList = Array(this.OUT_WIDTH).fill().map((i, j) => j);
            const heightList = Array(this.OUT_HEIGTH).fill().map((i, j) => j);

            const byteArray = new Uint8Array(this.OUT_HEIGTH * this.OUT_WIDTH  * 3);

            heightList.forEach(y => {
                widthList.forEach(x => {
                    const index = y * widthList.length + x;
                    const dta = this.getPixel(this.imgData, x, y);
                    byteArray[index] = dta.r;
                    byteArray[index + 1] = dta.g;
                    byteArray[index + 2] = dta.b;
                });
            });

            return byteArray;
        },
    },
    methods: {
        handleFileSelect(event){
            const [ file ] = event.target.files;
            if(!file) return;
            
            if(file.type !== '' && !file.type.match('image.*')) return;
            
            window.URL = window.URL || window.webkitURL;
            
            var imageURL = window.URL.createObjectURL(file);
            this.loadAndDrawImage(imageURL);
        },
        loadAndDrawImage(url) {
            this.image = new Image();
            this.image.addEventListener('load', () => {
                this.drawImage();
                this.imgLoaded = true;
            });
            this.image.src = url;
        },
        drawImage() {
            const wrapper = this.$refs.wrapper;
            let { width } = wrapper.getBoundingClientRect();
            if (width > 600) width = 600;

            const canvas = this.$refs.canvas;
            const context = canvas.getContext("2d");
        
            const imgWidth = this.image.width;
            const imgHeight = this.image.height;
            const imgRatio = imgWidth / imgHeight;
      
            this.OUT_WIDTH = imgWidth > width ? width : imgWidth;
            this.OUT_HEIGTH = (imgWidth > width ? width : imgWidth) / imgRatio;

            canvas.width  = this.OUT_WIDTH;
            canvas.height = this.OUT_HEIGTH;
        
            context.drawImage(this.image, 0, 0, this.OUT_WIDTH, this.OUT_HEIGTH);
        
            this.imgData = context.getImageData(0, 0, this.OUT_WIDTH, this.OUT_HEIGTH);

            this.sendImgData();
        },
        getPixel(imageData, x, y) {
            var index = (x + y * imageData.width) * 4;
            return {
                r: imageData.data[index+0], 
                g: imageData.data[index+1], 
                b: imageData.data[index+2], 
                a: imageData.data[index+3],
            };
        },
        sendImgData() {
            const body = new Blob([this.OUT_SRC], {type: "octet/stream"})

            fetch('/draw', {  
                method: 'POST',  
                headers: {  
                  'Content-Type': 'application/octet-stream',
                },  
                body,
            });
        }
    },
    mounted() {

    }
});