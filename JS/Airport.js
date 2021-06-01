const PassengerPlane = require("./Planes/PassengerPlane");
const MilitaryPlane = require("./Planes/MilitaryPlane");
const MilitaryType = require("./models/MilitaryType");
const ExperimentalPlane = require("./Planes/ExperimentalPlane");

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        let passengerPlanes = [];
        for (let passengerPlaneType of this.planes) {
            if (passengerPlaneType instanceof PassengerPlane) {
                passengerPlanes.push(passengerPlaneType);
            }
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        }
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let plane of passengerPlanes) {
            if (
                passengerPlanes[plane].getPassengersCapacity() >
                planeWithMaxCapacity.getPassengersCapacity()
            ) {
                planeWithMaxCapacity = passengerPlanes[plane];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let plane of militaryPlanes) {
            if (
                militaryPlanes[plane].getMilitaryType() === MilitaryType.TYPE_TRANSPORT
            ) {
                transportMilitaryPlanes.push(militaryPlanes[plane]);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let plane of militaryPlanes) {
            if (militaryPlanes[plane].getMilitaryType() === MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[plane]);
            }
        }
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes = [];
        for (let plane of experimentalPlanes) {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        }
        return experimentalPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((currPlane, nextPlane) =>
            currPlane.getMaxFlightDistance() > nextPlane.getMaxFlightDistance() ? 1 : -1
        );
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((currPlane, nextPlane) =>
            currPlane.getMaxSpeed() > nextPlane.getMaxSpeed() ? 1 : -1
        );
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((currPlane, nextPlane) =>
            currPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity() ? 1 : -1
        );
        return this;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = Airport;