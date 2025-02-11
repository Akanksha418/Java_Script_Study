{/<html>
    <head>
        </head>
        <body>
            <script>
                function findGeolocation(){
                    if("geolocation" in navigation){
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const latitude = position.coords.latitude;
                                const longitude = position.coords.longitude;
                                alter()
                            }
                        )
                    }
                } 
            