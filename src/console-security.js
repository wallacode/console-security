(function(window) {

    if(((typeof window.console === 'undefined'))) {
        return false;
    }

    window.console.security = function(title, description, logo, logoWidth, logoHeight) {

        // TODO enable to edit styles
        var options = {
            titleStyle: 'font-size: 18px; color: #E64F4F; padding: 0; background: none; line-height: auto; font-family: arial',
            descriptionStyle: 'font-size: 14px; color: #696969; padding: 5px; font-family: arial'
        };

        var img = new Image();

        img.onload = function() {
            console.log("%cLogo %c \n\n" + title + " %c \n\n" + description + "\n\n",
                'background-image: url(' + logo + '); color: transparent;' + "font-size: 0; padding: " + Math.floor(logoHeight/2) + "px " + Math.floor(logoWidth/2) + "px; line-height: " + logoHeight + "px;",
                options.titleStyle,
                options.descriptionStyle
            );
        };

        img.src = logo;

        return this;
    };

    // TODO remove example
    window.console.security(
        'Security Warning',
        'This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a new feature or "hack" someone\'s account, it is a scam and will give them access to your account or personal details.',
        'https://raw.githubusercontent.com/walla-rnd/console-security/master/src/logo.png',
        300,
        110
    );

})(window);



