// class Player {
//     name = '';
//     enemy = '';
//     life = 100;

//     constructor(name, enemy) {
//         this.name = name;
//         this.enemy = enemy;

//         this.drawPlayer();
//     }

//     drawPlayer() {
//         const html = `
//             <div class="player" id="${this.name}">
//                 <div class="player__name">
//                     ${this.name}
//                     <button
//                         onclick="player${this.name}.giveDamage(player${this.enemy})"
//                     >Make damage</button>
//                 </div>
//                 <div class="player__life">${this.life}%</div>
//             </div>
//         `
//         document.querySelector('#app').innerHTML += html;
//     }

//     recieveDamage(damage) {
//         if (!this.life) return;

//         this.life -= damage;
//         if (this.life < 0) {
//             this.life = 0;
//             this.changeLife();
//             return;
//         }
//         this.changeLife();
//     }

//     changeLife() {
//         const player = document.querySelector(`#${this.name}`);
//         const life = player.querySelector('.player__life');
//         life.innerText = this.life + '%';
//         life.style.width = this.life + '%';
//         life.style.background = this.lifeColor;
//     }

//     giveDamage(anamy) {
//         const damage = Math.round(Math.random() * 20);
//         anamy.recieveDamage(damage);
//     }

//     get lifeColor() {
//         if (this.life > 75) return 'green';
//         else if (this.life > 25) return 'orange';
//         else return 'red';
//     }
// }

// const playerIvan = new Player('Ivan', 'Petro');
// const playerPetro = new Player('Petro', 'Ivan');