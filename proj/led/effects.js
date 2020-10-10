const observer = {
    events: {},
    emit(event, ...args) {
        const e = this.events[event];
        if (!(e && e instanceof Array)) return;

        e.forEach((cb) => {
            cb(...args);
        })
    },
    on(event, cb, once) {
        let e = this.events[event];
        if (!(e && e instanceof Array)) {
            this.events[event] = [];
            e = this.events[event];
        }

        if (once && e.includes(cb)) return;

        e.push(cb);
    }
}

app.component('app-effects', {
    template: `
        <h4 class="ui horizontal divider header">
            <i class="film icon"></i>
            Effect
        </h4>
        <div class="ui card" style="width: auto;">
            <div class="content">
                <div class="mb-10">
                    <select ref="dropdown" class="ui search dropdown">
                        <option value="">Select effect</option>
                        <option
                            v-for="(label, value) in effectsList"
                            :key="label"
                            :value="value"
                        >{{ label }}</option>
                    </select>
                </div>
            </div>
        </div>
        <h4 class="ui horizontal divider header">
            <i class="fast forward icon"></i>
            Effect spped
        </h4>
        <div class="ui card" style="width: auto;">
            <div class="content">
                <div class="mb-10">
                    <div class="ui segment">
                        <div class="ui range" id="tmp"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            selectedEffect: 0,
            speed: 5,
            effectsList: {
                0: 'effect 1',
                1: 'effect 2',
                2: 'effect 3',
                3: 'effect 4',
                4: 'effect 5',
                5: 'effect 6',
                6: 'effect 7',
            },
            speedConfig: {
                min: 0,
                max: 10,
                onChange: (value) => {
                    this.speed = value;
                },
            }
        };
    },
    mounted() {
        $('.ui.dropdown').dropdown();
        $('.ui.range').range(this.speedConfig);
    }
});