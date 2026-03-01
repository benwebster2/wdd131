const character = {
    // Properties
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://via.placeholder.com/300x200", // Replace with your image path

    // Methods
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            
            // Check if dead after subtraction
            if (this.health <= 0) {
                this.health = 0;
                alert("Character Died");
            }
            this.updateDisplay();
        }
    },

    levelUp: function() {
        this.level += 1;
        this.updateDisplay();
    },

    // Helper function to sync the UI with the data
    updateDisplay: function() {
        document.getElementById('char-name').innerText = this.name;
        document.getElementById('char-class').innerText = this.class;
        document.getElementById('char-level').innerText = this.level;
        document.getElementById('char-health').innerText = this.health;
    }
};

// Initialize the display on load
character.updateDisplay();