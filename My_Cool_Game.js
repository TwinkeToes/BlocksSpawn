    const box = document.querySelector('#box');
    const sprite = document.querySelector('#sprite');
    let speed = 15;
    let sprite_x = sprite.style.bottom;
    let sprite_y = sprite.style.left;
    let chest_x = chest.style.left;

    const toNum = (pxVal) => {
        return parseInt(pxVal, 10);
    };

    const handleMovement = (e) => {
        let left = toNum(sprite.style.left);
        const bottom = toNum(sprite.style.bottom);
DivObject();
        switch (e.key) {
            case 'a':
                if (left <= Screen.width) return (sprite.style.left = box);
                sprite.style.left = left - speed + 'px';
                break;
            case 'd':
                if (left >= Screen.width) return (sprite.style.left = box);
                sprite.style.left = left + speed + 'px';
                break;
            case 'w':
                if (bottom >= Screen.height) return (sprite.style.bottom = box);
                sprite.style.bottom = bottom + speed + 'px';
                break;
            case 's':
                if (bottom <= -Screen.height) return (sprite.style.bottom = -box );
                sprite.style.bottom = bottom - speed + 'px';
                break;
        }
    };
    	DivObject = function() {
	    this.div = document.createElement( "div" ) ;
	    document.body.appendChild( this.div ) ;
	    this.div.className = "chest" ;
	    this.div.style.top = parseInt( 75 * Math.random() ) + "%" ;
	    this.div.style.left = parseInt( 75 * Math.random() ) + "%" ;
}


    window.addEventListener('keydown', handleMovement);

