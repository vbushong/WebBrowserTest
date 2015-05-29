function getNFLStadiumLocation(teamName)
{
    
    var stadiumLocation = {
        Latitude: 0,
        Longitude: 0
    }

    switch (teamName)
    {
        case "Arizona Cardinals":
            stadiumLocation.Latitude = 33.527736;
            stadiumLocation.Longitude = -112.262604;
            break;
        case "Atlanta Falcons":
            stadiumLocation.Latitude = 33.757692;
            stadiumLocation.Longitude = -84.400978;
            break;
        case "Baltimore Ravens":
            stadiumLocation.Latitude = 39.277779;
            stadiumLocation.Longitude = -76.622665;
            break;
        case "Buffalo Bills":
            stadiumLocation.Latitude = 42.773736;
            stadiumLocation.Longitude = -78.787025;
            break;
        case "Carolina Panthers":
            stadiumLocation.Latitude = 35.225826;
            stadiumLocation.Longitude = -80.852867;
            break;
        case "Chicago Bears":
            stadiumLocation.Latitude = 41.862357;
            stadiumLocation.Longitude = -87.616723;
            break;
        case "Cincinnati Bengals":
            stadiumLocation.Latitude = 39.095485;
            stadiumLocation.Longitude = -84.516143;
            break;
        case "Cleveland Browns":
            stadiumLocation.Latitude = 41.505994;
            stadiumLocation.Longitude = -81.699583;
            break;
        case "Dallas Cowboys":
            stadiumLocation.Latitude = 32.747829;
            stadiumLocation.Longitude = -97.092970;
            break;
        case "Denver Broncos":
            stadiumLocation.Latitude = 39.743971;
            stadiumLocation.Longitude = -105.020108;
            break;
        case "Detroit Lions":
            stadiumLocation.Latitude = 42.340068;
            stadiumLocation.Longitude = -83.045687;
            break;
        case "Green Bay Packers":
            stadiumLocation.Latitude = 44.501240;
            stadiumLocation.Longitude = -88.062194;
            break;
        case "Houston Texans":
            stadiumLocation.Latitude = 29.684992;
            stadiumLocation.Longitude = -95.410871;
            break;
        case "Indianapolis Colts":
            stadiumLocation.Latitude = 39.760069;
            stadiumLocation.Longitude = -86.163782;
            break;
        case "Jacksonville Jaguars":
            stadiumLocation.Latitude = 30.323926;
            stadiumLocation.Longitude = -81.637399;
            break;
        case "Kansas City Chiefs":
            stadiumLocation.Latitude = 39.048942;
            stadiumLocation.Longitude = -94.484002;
            break;
        case "Miami Dolphins":
            stadiumLocation.Latitude = 25.957960;
            stadiumLocation.Longitude = -80.238838;
            break;
        case "Minnesota Vikings":
            stadiumLocation.Latitude = 44.976619;
            stadiumLocation.Longitude = -93.224503;
            break;
        case "New England Patriots":
            stadiumLocation.Latitude = 42.090949;
            stadiumLocation.Longitude = -71.264394;
            break;
        case "New Orleans Saints":
            stadiumLocation.Latitude = 29.951025;
            stadiumLocation.Longitude = -90.081160;
            break;
        case "New York Giants":
            stadiumLocation.Latitude = 40.813565;
            stadiumLocation.Longitude = -74.074419;
            break;
        case "New York Jets":
            stadiumLocation.Latitude = 40.813565;
            stadiumLocation.Longitude = -74.074419;
            break;
        case "Oakland Raiders":
            stadiumLocation.Latitude = 37.751585;
            stadiumLocation.Longitude = -122.200555;
            break;
        case "Philadelphia Eagles":
            stadiumLocation.Latitude = 39.900768;
            stadiumLocation.Longitude = -75.167459;
            break;
        case "Pittsburgh Steelers":
            stadiumLocation.Latitude = 40.446860;
            stadiumLocation.Longitude = -80.015655;
            break;             
        case "San Diego Chargers":
            stadiumLocation.Latitude = 32.783109;
            stadiumLocation.Longitude = -117.119624;
            break;
        case "San Francisco 49ers":
            stadiumLocation.Latitude = 37.403335;
            stadiumLocation.Longitude = -121.969929;
            break;
        case "Seattle Seahawks":
            stadiumLocation.Latitude = 47.595202;
            stadiumLocation.Longitude = -122.331654;
            break;
        case "St. Louis Rams":
            stadiumLocation.Latitude = 38.632861;
            stadiumLocation.Longitude = -90.188519;
            break;
        case "Tampa Bay Buccaneers":
            stadiumLocation.Latitude = 27.976003;
            stadiumLocation.Longitude = -82.503382;
            break;
        case "Tennessee Titans":
            stadiumLocation.Latitude = 36.166484;
            stadiumLocation.Longitude = -86.771303;
            break;
        case "Washington Redskins":
            stadiumLocation.Latitude = 38.907689;
            stadiumLocation.Longitude = -76.864483;
            break;
        default:
            stadiumLocation.Latitude = 0;
            stadiumLocation.Longitude = 0;
            break;
    }

    return stadiumLocation;
}