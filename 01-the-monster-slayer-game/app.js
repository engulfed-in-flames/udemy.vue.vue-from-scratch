const PLAYER_MAX_HEALTH_VALUE = 100;
const PLAYER_MAX_ATK_VALUE = 12;
const PLAYER_MIN_ATK_VALUE = 5;
const PLAYER_SPECIAL_MAX_ATK_VALUE = 10;
const PLAYER_SPECIAL_MIN_ATK_VALUE = 25;
const PLAYER_MIN_HEAL_VALUE = 8;
const PLAYER_MAX_HEAL_VALUE = 20;

const MONSTER_MAX_HEALTH_VALUE = 100;
const MONSTER_MAX_ATK_VALUE = 15;
const MONSTER_MIN_ATK_VALUE = 8;

const app = Vue.createApp({
    data() {
        return {
            playerHealth: PLAYER_MAX_HEALTH_VALUE,
            monsterHealth: MONSTER_MAX_HEALTH_VALUE,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            return {
                width: (this.monsterHealth < 0 ? 0 : this.monsterHealth) + '%',
            };
        },
        playerBarStyles() {
            return {
                width: (this.playerHealth < 0 ? 0 : this.playerHealth) + '%',
            };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
    },
    methods: {
        startGame() {
            this.playerHealth = PLAYER_MAX_HEALTH_VALUE;
            this.monsterHealth = MONSTER_MAX_HEALTH_VALUE;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(
                PLAYER_MAX_ATK_VALUE,
                PLAYER_MIN_ATK_VALUE
            );
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(
                MONSTER_MAX_ATK_VALUE,
                MONSTER_MIN_ATK_VALUE
            );
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(
                PLAYER_SPECIAL_MIN_ATK_VALUE,
                PLAYER_SPECIAL_MAX_ATK_VALUE
            );
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(
                PLAYER_MAX_HEAL_VALUE,
                PLAYER_MIN_HEAL_VALUE
            );

            if (this.playerHealth + healValue > PLAYER_MAX_HEALTH_VALUE) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', attackValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount('#game');

// If the function is only used inside of the JS code,
// then you can write a regular JS function.
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
