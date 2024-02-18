<?php

namespace de\eriktunsch\library\utils;

use Location\Bearing\BearingSpherical;
use Location\Distance\Vincenty;
use Location\Coordinate;

class Geo
{
    public function calculateDistance($latitudeFrom, $longitudeFrom, $latitudeTo, $longitudeTo)
    {
        $coordinate1 = new Coordinate($latitudeFrom, $longitudeFrom);
        $coordinate2 = new Coordinate($latitudeTo, $longitudeTo);

        return $coordinate1->getDistance($coordinate2, new Vincenty());
    }

    public function calculateAngle($lat1, $long1, $lat2, $long2)
    {
        $source = new Coordinate($lat1, $long1);
        $destination = new Coordinate($lat2, $long2);

        $bearingCalculator = new BearingSpherical();
        return $bearingCalculator->calculateFinalBearing($source, $destination) + 180;
    }

    public function DMStoDD($deg, $min, $sec)
    {

        // Converting DMS ( Degrees / minutes / seconds ) to decimal format
        if (($deg . $min . $sec) < 0) {
            return (abs($deg) + ($min / 60) + ($sec / 3600)) * -1;
        } else {
            return (abs($deg) + ($min / 60) + ($sec / 3600));
        }
    }
}
